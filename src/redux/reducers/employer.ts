import {
  EmployerActions,
  REGISTER_EMPLOYER_REQUEST,
  REGISTER_EMPLOYER_SUCCESS,
  REGISTER_EMPLOYER_FAIL,
  UPDATE_EMPLOYER_REQUEST,
  UPDATE_EMPLOYER_SUCCESS,
  UPDATE_EMPLOYER_FAIL,
  CREATE_JOB_POST_SUCCESS,
  CREATE_JOB_POST_REQUEST,
  CREATE_JOB_POST_FAIL,
  JOB_DELETE_REQUEST,
  JOB_DELETE_SUCCESS,
  JOB_DELETE_FAIL,
} from '../types'

const initialState = {
  credential: { email: '', password: '' },
  info: {},
  loading: false,
  error: null,
  jobPost: {
    title: '',
    jobDescription: '',
    seniority: '',
    skills: [],
  },
}

const employer = (state = initialState, action: EmployerActions) => {
  switch (action.type) {
    case REGISTER_EMPLOYER_REQUEST:
      return { ...state, loading: true, credential: action.payload }
    case REGISTER_EMPLOYER_SUCCESS:
      return { ...state, loading: false, info: action.payload }
    case REGISTER_EMPLOYER_FAIL:
      return { ...state, loading: false, error: action.payload }
    case UPDATE_EMPLOYER_REQUEST:
      return { ...state, loading: true }
    case UPDATE_EMPLOYER_SUCCESS:
      console.log(action.payload)
      return {
        ...state,
        loading: false,
        success: true,
        employer: action.payload,
      }
    case UPDATE_EMPLOYER_FAIL:
      return { ...state, loading: false, error: action.payload }
    case CREATE_JOB_POST_REQUEST:
      return { ...state, loading: true, jobPost: action.payload }
    case CREATE_JOB_POST_SUCCESS:
      return { ...state, loading: false, jobPost: action.payload }
    case CREATE_JOB_POST_FAIL:
      return { ...state, loading: false, error: action.payload }
    case JOB_DELETE_REQUEST:
      return { ...state, loading: true }
    case JOB_DELETE_SUCCESS:
      return { ...state, loading: false }
    case JOB_DELETE_FAIL:
      return { ...state, error: action.payload }
    default:
      return state
  }
}

export default employer
