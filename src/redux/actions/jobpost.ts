import {
  CreatingJobActionType,
  JobSuccessActionType,
  JobFailActionType,
  JobPost,
  DeletingRequestActionType,
  DeletingSuccessActionType,
  DeletingFailActionType,
} from '../types'
export const creatingJobPostRequest = (
  jobForm: JobPost
): CreatingJobActionType => {
  return {
    type: 'JOB_POST_REQUEST',
    payload: jobForm,
  }
}
export const registerJobPostSuccess = (): JobSuccessActionType => {
  return {
    type: 'JOB_POST_SUCCESS',
  }
}
export const registerJobPostFail = (error: {
  error: any
}): JobFailActionType => {
  return {
    type: 'JOB_POST_FAIL',
    payload: error,
  }
}

export const deleteJobPostRequest = (id: string): DeletingRequestActionType => {
  return {
    type: 'JOB_DELETE_REQUEST',
    payload: id,
  }
}
export const deleteJobPostSuccess = (): DeletingSuccessActionType => {
  return {
    type: 'JOB_DELETE_SUCCESS',
  }
}
export const deleteJobPostFail = (error: any): DeletingFailActionType => {
  return {
    type: 'JOB_DELETE_FAIL',
    payload: error,
  }
}
