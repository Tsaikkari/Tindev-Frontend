import { jobSeekerInfoFromStorage } from '../saga/jobseeker'
import {
  JobSeekerActions,
  REGISTER_JOBSEEKER_REQUEST,
  REGISTER_JOBSEEKER_SUCCESS,
  REGISTER_JOBSEEKER_FAIL,
  LOGIN_JOBSEEKER_REQUEST,
  LOGIN_JOBSEEKER_SUCCESS,
  LOGIN_JOBSEEKER_FAIL,
  LOGOUT_JOBSEEKER,
} from '../types'

const initialState = {
  info: {},
  credential: { email: '', password: '' },
  jobSeekerInfo: jobSeekerInfoFromStorage,
  loading: false,
  error: null,
}

const jobSeeker = (state = initialState, action: JobSeekerActions) => {
  switch (action.type) {
    case REGISTER_JOBSEEKER_REQUEST:
      return {
        ...state,
        loading: true,
        info: {},
        email: action.payload,
        password: action.payload,
      }
    case REGISTER_JOBSEEKER_SUCCESS:
      return { ...state, loading: false, jobSeekerInfo: action.payload }
    case REGISTER_JOBSEEKER_FAIL:
      return { ...state, loading: false, error: action.payload }
    case LOGIN_JOBSEEKER_REQUEST:
      return { ...state, loading: true, credential: action.payload }
    case LOGIN_JOBSEEKER_SUCCESS:
      return { ...state, loading: false, employerInfo: action.payload }
    case LOGIN_JOBSEEKER_FAIL:
      return { ...state, loading: false, error: action.payload }
    case LOGOUT_JOBSEEKER:
      return {}
    default:
      return state
  }
}

export default jobSeeker