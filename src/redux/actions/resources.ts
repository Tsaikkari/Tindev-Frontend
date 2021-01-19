import {
  GET_SKILLS_REQUEST,
  GET_SKILLS_SUCCESS,
  GET_SKILLS_FAIL,
  GetSkillsSuccessAction,
  CreatingJobPostRequestAction,
  CreatingJobPostSuccessAction,
  CreatingJobPostFailAction,
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

export const getSkillsRequest = () => {
  return {
    type: GET_SKILLS_REQUEST,
  }
}

export const getSkillsSuccess = (skills: GetSkillsSuccessAction) => {
  return {
    type: GET_SKILLS_SUCCESS,
    payload: skills,
  }
}

export const getSkillsFail = (error: string) => {
  return {
    type: GET_SKILLS_FAIL,
    payload: error,
  }
}

export const creatingJobPostRequest = (
  jobForm: JobPost
): CreatingJobPostRequestAction => {
  return {
    type: CREATE_JOB_POST_REQUEST,
    payload: jobForm,
  }
}

export const registerJobPostSuccess = (
  jobForm: JobPost
): CreatingJobPostSuccessAction => {
  return {
    type: CREATE_JOB_POST_SUCCESS,
    payload: jobForm,
  }
}

export const registerJobPostFail = (error: {
  error: any
}): CreatingJobPostFailAction => {
  return {
    type: CREATE_JOB_POST_FAIL,
    payload: error,
  }
}

export const deleteJobPostRequest = (jobPostId: DeletingRequestActionType) => {
  return {
    type: JOB_DELETE_REQUEST,
    payload: jobPostId,
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
