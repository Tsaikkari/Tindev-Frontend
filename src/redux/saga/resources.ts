import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

import {
  CreateSkillRequestAction,
  CreatingJobPostRequestAction,
  DeletingRequestActionType,
} from '../types'
import { getSkillsSuccess, getSkillsFail } from '../actions/resources'
import { createSkillSuccess, createSkillFail } from '../actions/skill'
import {
  registerJobPostSuccess,
  registerJobPostFail,
  deleteJobPostFail,
  deleteJobPostSuccess,
} from '../actions/resources'

function* getSkillsSaga() {
  try {
    const res = yield axios.get('/skills')
    yield put(getSkillsSuccess(res.data.skills))
  } catch (error) {
    yield put(getSkillsFail(error))
  }
}

function* createSkillSaga(action: CreateSkillRequestAction) {
  const skill = action.payload
  try {
    const res = yield axios.post('/skills', skill)
    yield put(createSkillSuccess(res.data))
  } catch (error) {
    yield put(createSkillFail(error))
  }
}

function* creatingJobPostSaga(action: CreatingJobPostRequestAction) {
  const job = action.payload
  try {
    const res = yield axios.post('/employer/jobs', job)
    yield put(registerJobPostSuccess(res))
  } catch (e) {
    yield put(registerJobPostFail(e))
  }
}

// Deletes on the backend immediately, on the frontend after page refresh
function* deletingJobPostSaga(action: DeletingRequestActionType) {
  try {
    const jobPostId = yield action.payload
    const res = yield axios.delete(`/employer/jobs/${jobPostId}`)
    if (res.status === 200) {
      yield put(deleteJobPostSuccess())
    }
    throw new Error()
  } catch (e) {
    yield put(deleteJobPostFail(e))
  }
}

const sagaWatcher = [
  takeLatest('GET_SKILLS_REQUEST', getSkillsSaga),
  takeLatest('CREATE_SKILL_REQUEST', createSkillSaga),
  takeLatest('CREATE_JOB_POST_REQUEST', creatingJobPostSaga),
  takeLatest('JOB_DELETE_REQUEST', deletingJobPostSaga),
]

export default sagaWatcher
