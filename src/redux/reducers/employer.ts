import {
  EmployerActions,
  REGISTER_EMPLOYER_REQUEST,
  REGISTER_EMPLOYER_SUCCESS,
  REGISTER_EMPLOYER_FAIL,
  UPDATE_EMPLOYER_REQUEST,
  UPDATE_EMPLOYER_SUCCESS,
  UPDATE_EMPLOYER_FAIL,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
} from '../types'

const initialState = {
  email: '',
  password: '',
  employerInfo: {
    jobPosts: [],
  },
  loading: false,
  error: null,
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
      return {
        ...state,
        loading: false,
        success: true,
        employer: action.payload,
      }
    case UPDATE_EMPLOYER_FAIL:
      return { ...state, loading: false, error: action.payload }
    case GET_USER_REQUEST:
      return { ...state, loading: true }
    case GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        employerInfo: action.payload,
      }
    case GET_USER_FAIL:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export default employer
