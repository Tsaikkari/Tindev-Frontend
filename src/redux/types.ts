export const REGISTER_EMPLOYER_REQUEST = 'REGISTER_EMPLOYER_REQUEST'
export const REGISTER_EMPLOYER_SUCCESS = 'REGISTER_EMPLOYER_SUCCESS'
export const REGISTER_EMPLOYER_FAIL = 'REGISTER_EMPLOYER_FAIL'
export const REGISTER_JOBSEEKER_DATA_REQUEST = 'REGISTER_JOBSEEKER_DATA_REQUEST'
export const REGISTER_JOBSEEKER_DATA_SUCCESS = 'REGISTER_JOBSEEKER_DATA_SUCCESS'
export const REGISTER_JOBSEEKER_DATA_FAIL = 'REGISTER_JOBSEEKER_DATA_FAIL'

export type employerActions =
  | RegisterEmployerRequestAction
  | RegisterEmployerSuccessAction
  | RegisterEmployerFailAction

export type jobseekerDataActions =
  | registerJobseekerDataRequestAction
  | registerJobseekerDataSuccessAction
  | registerJobseekerDataFailAction

export type RegisterEmployerRequestAction = {
  type: typeof REGISTER_EMPLOYER_REQUEST
  payload: {
    credentials: {
      email: string
      password: string
    }
  }
}

export type RegisterEmployerSuccessAction = {
  type: typeof REGISTER_EMPLOYER_SUCCESS
  payload: {
    credentials: {
      email: string
      password: string
    }
  }
}

export type RegisterEmployerFailAction = {
  type: typeof REGISTER_EMPLOYER_FAIL
  payload: {
    error: any
  }
}

export type Credential = {
  email?: string
  password?: string
  firstName?: string
  lastName?: string
  contact?: string
  seniority?: string
  skills?: any[]
  skillLevel?: string
  duration?: string
}

export type CredentialState = {
  credentials: Credential
  loading: Boolean
  error: any
}

export type AppState = {
  employer: CredentialState
  jobseeker: CredentialState
}

export type registerJobseekerDataRequestAction = {
  type: typeof REGISTER_JOBSEEKER_DATA_REQUEST
  payload: {
    jobSeekerId: string
  }
}

export type registerJobseekerDataSuccessAction = {
  type: typeof REGISTER_JOBSEEKER_DATA_SUCCESS
  payload: {
    firstName: string
    lastName: string
    contact: string
    seniority: string
  }
}

export type registerJobseekerDataFailAction = {
  type: typeof REGISTER_JOBSEEKER_DATA_FAIL
  payload: {
    error: any
  }
}
