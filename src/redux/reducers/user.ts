import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGOUT_USER,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  UserActions,
  SET_LOGGED_IN,
  SET_LOADING,
} from '../types'

const initialState = {
  email: '',
  password: '',
  history: {},
  role: '',
  firstName: '',
  lastName: '',
  skills: [],
  skillLevel: '',
  relocate: '',
  startingDate: '',
  education: {
    institute: '',
    degree: '',
  },
  isLoggedIn: false,
  loading: true,
  error: null,
  jobPost: {
    title: '',
    jobDescription: '',
    seniority: '',
    skills: [],
    companyName: '',
    companyInfo: '',
    address: '',
  },
}

const user = (state = initialState, action: UserActions) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        loading: true,
        credential: action.payload,
        history: action.payload.history,
      }
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: action.payload,
        isLoggedIn: true,
      }
    case LOGIN_USER_FAIL:
      return { ...state, loading: false, error: action.payload }
    case LOGOUT_USER:
      return {}
    case SET_LOGGED_IN:
      return { ...state, loading: false, isLoggedIn: true }
    case SET_LOADING:
      return { ...state }
    case GET_USER_REQUEST:
      return { ...state, loading: true }
    case GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        info: action.payload,
      }
    case GET_USER_FAIL:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export default user
