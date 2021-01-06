//import { employerInfoFromStorage } from '../saga/employer'
import {
  EmployerActions,
  REGISTER_EMPLOYER_REQUEST,
  REGISTER_EMPLOYER_SUCCESS,
  REGISTER_EMPLOYER_FAIL,
  LOGIN_EMPLOYER_REQUEST,
  LOGIN_EMPLOYER_SUCCESS,
  LOGIN_EMPLOYER_FAIL,
  LOGOUT_EMPLOYER,
  JOB_POST_SUCCESS,
  JOB_POST_REQUEST,
  JOB_POST_FAIL,
  JOB_DELETE_REQUEST,
  JOB_DELETE_SUCCESS,
  JOB_DELETE_FAIL,
} from '../types'

const initialState = {
  credential: { email: '', password: '' },
  employerInfo: {},
  loading: false,
  error: null,
  jobPost: {
    title: '',
    jobDescription: '',
    seniority: '',
    skills: [],
  },
  jobPostIdToDelete: '',
}

const employer = (state = initialState, action: EmployerActions) => {
  switch (action.type) {
    case REGISTER_EMPLOYER_REQUEST:
      return { ...state, loading: true, credential: action.payload }
    case REGISTER_EMPLOYER_SUCCESS:
      return { ...state, loading: false, employerInfo: action.payload }
    case REGISTER_EMPLOYER_FAIL:
      return { ...state, loading: false, error: action.payload }
    case LOGIN_EMPLOYER_REQUEST:
      return { ...state, loading: true, credential: action.payload }
    case LOGIN_EMPLOYER_SUCCESS:
      return { ...state, loading: false, employerInfo: action.payload }
    case LOGIN_EMPLOYER_FAIL:
      return { ...state, loading: false, error: action.payload }
    case LOGOUT_EMPLOYER:
      return {}
    case JOB_POST_REQUEST:
      return { ...state, loading: true, jobPost: action.payload }
    case JOB_POST_SUCCESS:
      return { ...state, loading: false, jobPost: {} }
    case JOB_POST_FAIL:
      return { ...state, loading: false, error: action.payload }
    case JOB_DELETE_REQUEST:
      return { ...state, loading: true, jobPostIdToDelete: action.payload }
    case JOB_DELETE_SUCCESS:
      return { ...state, loading: false }
    case JOB_DELETE_FAIL:
      return { ...state, error: action.payload }
    default:
      return state
  }
}

export default employer
