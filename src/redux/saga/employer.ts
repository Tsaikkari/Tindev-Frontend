import { put, takeLatest, select } from 'redux-saga/effects'
import axios from 'axios'

import {
  RegisterEmployerRequestAction,
  AppState,
  DeletingRequestActionType,
  UpdateEmployerRequestAction,
} from './../types'
import {
  registerEmployerSuccess,
  registerEmployerFail,
  updateEmployerSuccess,
  updateEmployerFail,
} from '../../redux/actions/employer'
import {
  registerJobPostSuccess,
  registerJobPostFail,
  deleteJobPostFail,
  deleteJobPostSuccess,
} from '../actions/jobpost'

const credential = (state: AppState) => state.employer.credential
const jobPostFormData = (state: AppState) => state.employer.jobPost

function* registerEmployerSaga(action: RegisterEmployerRequestAction) {
  try {
    const credentialData = yield select(credential)
    const res = yield axios.post('/employer', {
      credential: credentialData,
    })
    yield put(registerEmployerSuccess(res.data))
    const history = action.payload.history
    if (res.data.status === 201) {
      yield history.push('/login')
    }
  } catch (error) {
    yield put(registerEmployerFail())
  }
}

function* updateEmployerSaga(action: UpdateEmployerRequestAction) {
  const employerInfo = action.payload
  try {
    const res = yield axios.patch('/employer', employerInfo)
    yield put(updateEmployerSuccess(res.data.payload))
  } catch (error) {
    yield put(updateEmployerFail(error))
  }
}

function* creatingJobPostSaga() {
  try {
    const job = yield select(jobPostFormData)
    const res = yield axios.post('/employer/jobs', job)
    console.log(res)
    yield put(registerJobPostSuccess(job))
  } catch (e) {
    yield put(registerJobPostFail(e))
  }
}

function* deletingJobPostSaga(action: DeletingRequestActionType) {
  try {
    const jobPostId = yield action.payload
    yield axios.delete(`/employer/jobs/${jobPostId}`)
    yield put(deleteJobPostSuccess())
  } catch (e) {
    yield put(deleteJobPostFail(e))
  }
}
const sagaWatcher = [
  takeLatest('REGISTER_EMPLOYER_REQUEST', registerEmployerSaga),
  takeLatest('UPDATE_EMPLOYER_REQUEST', updateEmployerSaga),
  takeLatest('CREATE_JOB_POST_REQUEST', creatingJobPostSaga),
  takeLatest('JOB_DELETE_REQUEST', deletingJobPostSaga),
]

export default sagaWatcher
