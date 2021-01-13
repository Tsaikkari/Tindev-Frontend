import {
  REGISTER_EMPLOYER_REQUEST,
  REGISTER_EMPLOYER_SUCCESS,
  REGISTER_EMPLOYER_FAIL,
  UPDATE_EMPLOYER_REQUEST,
  UPDATE_EMPLOYER_SUCCESS,
  UPDATE_EMPLOYER_FAIL,
  CredentialStateEmployer,
} from '../types'

export const registerEmployerRequest = (
  email: string,
  password: string,
  history: any
) => {
  return {
    type: REGISTER_EMPLOYER_REQUEST,
    payload: {
      email,
      password,
      history: history,
    },
  }
}

export const registerEmployerSuccess = (
  employerInfo: CredentialStateEmployer
) => {
  return {
    type: REGISTER_EMPLOYER_SUCCESS,
    payload: employerInfo,
  }
}

export const registerEmployerFail = () => {
  return {
    type: REGISTER_EMPLOYER_FAIL,
  }
}

export const updateEmployerRequest = (formData: any) => {
  return {
    type: UPDATE_EMPLOYER_REQUEST,
    payload: {
      info: {
        companyName: formData.companyName,
      },
      credential: Credential,
    },
  }
}

export const updateEmployerSuccess = (formData: any) => {
  return {
    type: UPDATE_EMPLOYER_SUCCESS,
    payload: {
      info: {
        companyName: formData.companyName,
      },
    },
  }
}

export const updateEmployerFail = (error: string) => {
  return {
    type: UPDATE_EMPLOYER_FAIL,
    payload: {
      error,
    },
  }
}
