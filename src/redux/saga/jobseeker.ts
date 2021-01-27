import { put, takeLatest, select } from 'redux-saga/effects'
import axios from 'axios'

import {
  AppState,
  RegisterJobseekerRequestAction,
  updateJobseekerRequestAction,
} from '../types'
import {
  updateJobseekerFail,
  updateJobseekerSuccess,
  registerJobseekerSuccess,
  registerJobseekerFail,
} from './../actions/jobseeker'

// Doesn't work
// function* registerJobseekerSaga(action: RegisterJobseekerRequestAction) {
//   const email = action.payload.credential.email
//   const password = action.payload.credential.password

//   try {
//     const res = yield axios.post('/jobseeker', { email, password })
//     yield put(registerJobseekerSuccess(res.data))
//     const history = action.payload.history
//     if (res.data.status === 201) {
//       yield history.push('/login')
//     }
//   } catch (error) {
//     yield put(registerJobseekerFail())
//   }
// }

const credential = (state: AppState) => state.jobseeker.credential

function* registerJobseekerSaga(action: RegisterJobseekerRequestAction) {
  try {
    const credentialData = yield select(credential)
    const res = yield axios.post('/jobseeker', {
      credential: credentialData,
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
    console.log('responsedatapayload', response.data.payload)
  } catch (error) {
    yield put(updateJobseekerFail(error.message))
  }
}

const sagaWatcher = [
  takeLatest('UPDATE_JOBSEEKER_REQUEST', updateJobseekerSaga),
  takeLatest('REGISTER_JOBSEEKER_REQUEST', registerJobseekerSaga),
]

export default sagaWatcher
