import { put, takeLatest, select } from 'redux-saga/effects'
import axios from 'axios'

import { AppState } from '../types'
import LocalStorage from '../../local-storage'

import {
  registerEmployerSuccess,
  registerEmployerFail,
  loginEmployerSuccess,
  loginEmployerFail,
} from '../../redux/actions/employer'
import {
  registerJobPostSuccess,
  registerJobPostFail,
  deleteJobPostFail,
  deleteJobPostSuccess,
} from '../actions/jobpost'

const credential = (state: AppState) => state.employer.credential
const jobPostFormData = (state: AppState) => state.employer.jobPost
const id = (state: AppState) => state.employer.jobPostIdToDelete
function* registerEmployerSaga() {
  try {
    const credentialData = yield select(credential)
    const req = yield axios.post('/employer', {
      credential: credentialData,
    })
    yield put(registerEmployerSuccess(req.data))
  } catch (error) {
    yield put(registerEmployerFail())
  }
}

function* loginEmployerSaga() {
  try {
    const credentialData = yield select(credential)
    const res = yield axios.post('/login/local', {
      email: credentialData.email,
      password: credentialData.password,
    })

    yield put(loginEmployerSuccess(res))
    yield LocalStorage.saveToken(res.data.payload.token)
  } catch (error) {
    yield put(loginEmployerFail())
  }
}

function* creatingJobPostSaga() {
  try {
    const job = yield select(jobPostFormData)
    const res = yield axios.post('/employer/jobs', job)
    console.log(res)
    yield put(registerJobPostSuccess())
  } catch (e) {
    yield registerJobPostFail(e)
  }
}
function* deletingJobPostSaga() {
  try {
    const jobPostId = yield select(id)
    yield axios.delete(`/employer/jobs/${jobPostId}`)
    deleteJobPostSuccess()
  } catch (e) {
    deleteJobPostFail(e)
  }
}
const sagaWatcher = [
  takeLatest('REGISTER_EMPLOYER_REQUEST', registerEmployerSaga),
  takeLatest('LOGIN_EMPLOYER_REQUEST', loginEmployerSaga),
  takeLatest('JOB_POST_REQUEST', creatingJobPostSaga),
  takeLatest('JOB_DELETE_REQUEST', deletingJobPostSaga),
]

export default sagaWatcher
