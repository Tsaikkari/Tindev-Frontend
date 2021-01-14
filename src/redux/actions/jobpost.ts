import {
  CreatingJobActionType,
  JobSuccessActionType,
  JobFailActionType,
  JobPost,
  DeletingRequestActionType,
  DeletingSuccessActionType,
  DeletingFailActionType,
  CREATE_JOB_POST_REQUEST,
  CREATE_JOB_POST_SUCCESS,
  CREATE_JOB_POST_FAIL,
  JOB_DELETE_REQUEST,
  JOB_DELETE_SUCCESS,
  JOB_DELETE_FAIL,
} from '../types'
export const creatingJobPostRequest = (
  jobForm: JobPost
): CreatingJobActionType => {
  return {
    type: CREATE_JOB_POST_REQUEST,
    payload: jobForm,
  }
}
export const registerJobPostSuccess = (
  jobForm: JobPost
): JobSuccessActionType => {
  return {
    type: CREATE_JOB_POST_SUCCESS,
    payload: jobForm,
  }
}
export const registerJobPostFail = (error: {
  error: any
}): JobFailActionType => {
  return {
    type: CREATE_JOB_POST_FAIL,
    payload: error,
  }
}
export const deleteJobPostRequest = (id: number): DeletingRequestActionType => {
  return {
    type: JOB_DELETE_REQUEST,
    payload: id,
  }
}
export const deleteJobPostSuccess = (): DeletingSuccessActionType => {
  return {
    type: JOB_DELETE_SUCCESS,
  }
}
export const deleteJobPostFail = (error: any): DeletingFailActionType => {
  return {
    type: JOB_DELETE_FAIL,
    payload: error,
  }
}
