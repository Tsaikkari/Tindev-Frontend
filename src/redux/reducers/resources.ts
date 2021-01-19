import {
  GET_SKILLS_REQUEST,
  GET_SKILLS_SUCCESS,
  GET_SKILLS_FAIL,
  ResourcesState,
  ResourcesActions,
  CREATE_JOB_POST_SUCCESS,
  CREATE_JOB_POST_REQUEST,
  CREATE_JOB_POST_FAIL,
  JOB_DELETE_REQUEST,
  JOB_DELETE_SUCCESS,
  JOB_DELETE_FAIL,
} from '../types'

export const resources = (
  state: any = {
    skills: [],
    loading: false,
    error: null,
  },
  action: ResourcesActions
): ResourcesState => {
  switch (action.type) {
    case GET_SKILLS_REQUEST:
      return {
        ...state,
        loading: true,
        skills: [],
      }
    case GET_SKILLS_SUCCESS:
      console.log('action payload in reducer', action.payload)
      return {
        ...state,
        loading: false,
        skills: action.payload,
      }
    case GET_SKILLS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
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

export default resources
