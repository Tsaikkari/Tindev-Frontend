import {
  employerActions,
  CredentialState,
  REGISTER_EMPLOYER_REQUEST,
  REGISTER_EMPLOYER_SUCCESS,
  REGISTER_EMPLOYER_FAIL,
} from '../../types'

export const employerRegisterReducer = (state: CredentialState, action: employerActions) => {
  switch (action.type) {
    case REGISTER_EMPLOYER_REQUEST:
      return { loading: true }
    case REGISTER_EMPLOYER_SUCCESS:
      return { ...state, loading: true, credentials: action.payload }
    case REGISTER_EMPLOYER_FAIL:
      return { loading: false, error: action.payload }
    default: 
      return state
  }
}