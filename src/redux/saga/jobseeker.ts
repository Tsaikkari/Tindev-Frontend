import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

import {
  RegisterJobseekerRequestAction,
  updateJobseekerRequestAction,
} from '../types'
import {
  updateJobseekerFail,
  updateJobseekerSuccess,
  registerJobseekerSuccess,
  registerJobseekerFail,
} from './../actions/jobseeker'

function* registerJobseekerSaga(action: RegisterJobseekerRequestAction) {
  const email = action.payload.email
  const password = action.payload.password

  try {
    const res = yield axios.post('/jobseeker', {
      credential: { email, password },
    })
    yield put(registerJobseekerSuccess(res.data))
    const history = action.payload.history
    if (res.data.status === 201) {
      yield history.push('/login')
    }
  } catch (error) {
    yield put(registerJobseekerFail())
  }
}

function* updateJobseekerSaga(action: updateJobseekerRequestAction) {
  const jobseekerInfo = action.payload
  try {
    const response = yield axios.patch('/jobSeeker', jobseekerInfo)
    yield put(updateJobseekerSuccess(response.data.payload))
  } catch (error) {
    yield put(updateJobseekerFail(error.message))
  }
}

const sagaWatcher = [
  takeLatest('UPDATE_JOBSEEKER_REQUEST', updateJobseekerSaga),
  takeLatest('REGISTER_JOBSEEKER_REQUEST', registerJobseekerSaga),
]

export default sagaWatcher
