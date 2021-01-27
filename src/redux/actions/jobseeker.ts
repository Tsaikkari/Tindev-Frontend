import {
  Credential,
  REGISTER_JOBSEEKER_REQUEST,
  REGISTER_JOBSEEKER_SUCCESS,
  REGISTER_JOBSEEKER_FAIL,
  UPDATE_JOBSEEKER_REQUEST,
  UPDATE_JOBSEEKER_SUCCESS,
  UPDATE_JOBSEEKER_FAIL,
  JobseekerUpdate,
} from '../types'

export const updateJobseekerRequest = (jobseeker: Partial<JobseekerUpdate>) => {
  return {
    type: UPDATE_JOBSEEKER_REQUEST,
    payload: jobseeker,
  }
}

export const updateJobseekerSuccess = (jobseeker: JobseekerUpdate) => {
  return {
    type: UPDATE_JOBSEEKER_SUCCESS,
    payload: jobseeker,
  }
}

export const updateJobseekerFail = (error: string) => {
  return {
    type: UPDATE_JOBSEEKER_FAIL,
    payload: error,
  }
}

export const registerJobseekerRequest = (
  email: string,
  password: string,
  history: any
) => {
  return {
    type: REGISTER_JOBSEEKER_REQUEST,
    payload: {
      email,
      password,
      history,
    },
  }
}

export const registerJobseekerSuccess = (jobSeekerInfo: Credential) => {
  return {
    type: REGISTER_JOBSEEKER_SUCCESS,
    payload: jobSeekerInfo,
  }
}

export const registerJobseekerFail = () => {
  return {
    type: REGISTER_JOBSEEKER_FAIL,
  }
}
