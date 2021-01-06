import { put, takeLatest, select } from 'redux-saga/effects'
import axios from 'axios'
import { AppState } from '../types'

import LocalStorage from '../../local-storage'
import {
  updateJobseekerFail,
  updateJobseekerSuccess,
  registerJobseekerSuccess,
  registerJobseekerFail,
  loginJobseekerSuccess,
  loginJobseekerFail,
} from './../actions/jobseeker'

const credential = (state: AppState) => state.jobseeker.credential

function* registerJobseekerSaga() {
  try {
    const credentialData = yield select(credential)
    const res = yield axios.post('/jobseeker', {
      credential: credentialData,
    })
    yield put(registerJobseekerSuccess(res.data))
  } catch (error) {
    yield put(registerJobseekerFail())
  }
}

function* loginJobseekerSaga() {
  try {
    const credentialData = yield select(credential)
    const res = yield axios.post('/login/local', {
      email: credentialData.email,
      password: credentialData.password,
    })
    yield put(loginJobseekerSuccess(res.data))
    yield LocalStorage.saveToken(res.data.payload.token)
  } catch (error) {
    yield put(loginJobseekerFail())
  }
}

function* updateJobseekerSaga(credential: Credential) {
  try {
    const response = yield axios.patch('/jobSeeker', { credential })
    console.log('response::: >', response)
    yield put(updateJobseekerSuccess(response.data))
  } catch (error) {
    yield put(updateJobseekerFail(error.message))
  }
}

const sagaWatcher = [
  takeLatest('UPDATE_JOBSEEKER_REQUEST', updateJobseekerSaga),
  takeLatest('REGISTER_JOBSEEKER_REQUEST', registerJobseekerSaga),
  takeLatest('LOGIN_JOBSEEKER_REQUEST', loginJobseekerSaga),
]

export default sagaWatcher
