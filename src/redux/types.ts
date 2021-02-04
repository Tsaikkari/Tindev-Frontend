import { DayValue } from 'react-modern-calendar-datepicker'

export const REGISTER_EMPLOYER_REQUEST = 'REGISTER_EMPLOYER_REQUEST'
export const REGISTER_EMPLOYER_SUCCESS = 'REGISTER_EMPLOYER_SUCCESS'
export const REGISTER_EMPLOYER_FAIL = 'REGISTER_EMPLOYER_FAIL'
export const UPDATE_EMPLOYER_REQUEST = 'UPDATE_EMPLOYER_REQUEST'
export const UPDATE_EMPLOYER_SUCCESS = 'UPDATE_EMPLOYER_SUCCESS'
export const UPDATE_EMPLOYER_FAIL = 'UPDATE_EMPLOYER_FAIL'
export const GET_USER_REQUEST = 'GET_USER_REQUEST'
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const GET_USER_FAIL = 'GET_EMPLOYER_FAIL'
export const UPDATE_JOBSEEKER_REQUEST = 'UPDATE_JOBSEEKER_REQUEST'
export const UPDATE_JOBSEEKER_SUCCESS = 'UPDATE_JOBSEEKER_SUCCESS'
export const UPDATE_JOBSEEKER_FAIL = 'UPDATE_JOBSEEKER_FAIL'
export const REGISTER_JOBSEEKER_REQUEST = 'REGISTER_JOBSEEKER_REQUEST'
export const REGISTER_JOBSEEKER_SUCCESS = 'REGISTER_JOBSEEKER_SUCCESS'
export const REGISTER_JOBSEEKER_FAIL = 'REGISTER_JOBSEEKER_FAIL'
export const MATCH_JOBSEEKER_REQUEST = 'MATCH_JOBSEEKER_REQUEST'
export const MATCH_JOBSEEKER_SUCCESS = 'MATCH_JOBSEEKER_SUCCESS'
export const MATCH_JOBSEEKER_FAIL = 'MATCH_JOBSEEKER_FAIL'
export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL'
export const LOGOUT_USER = 'LOGOUT_USER'
export const CREATE_JOB_POST_REQUEST = 'CREATE_JOB_POST_REQUEST'
export const CREATE_JOB_POST_SUCCESS = 'CREATE_JOB_POST_SUCCESS'
export const CREATE_JOB_POST_FAIL = 'CREATE_JOB_POST_FAIL'
export const UPDATE_JOB_POST_REQUEST = 'UPDATE_JOB_POST_REQUEST'
export const UPDATE_JOB_POST_SUCCESS = 'UPDATE_JOB_POST_SUCCESS'
export const UPDATE_JOB_POST_FAIL = 'UPDATE_JOB_POST_FAIL'
export const JOB_DELETE_REQUEST = 'JOB_DELETE_REQUEST'
export const JOB_DELETE_SUCCESS = 'JOB_DELETE_SUCCESS'
export const JOB_DELETE_FAIL = 'JOB_DELETE_FAIL'
export const CREATE_SKILL_REQUEST = 'CREATE_SKILLS_REQUEST'
export const CREATE_SKILL_SUCCESS = 'CREATE_SKILL_SUCCESS'
export const CREATE_SKILL_FAIL = 'CREATE_SKILL_FAIL'
export const GET_SKILLS_REQUEST = 'GET_SKILLS_REQUEST'
export const GET_SKILLS_SUCCESS = 'GET_SKILLS_SUCCESS'
export const GET_SKILLS_FAIL = 'GET_SKILLS_FAIL'
export const ADD_SKILL = 'ADD_SKILL'
export const REMOVE_SKILL = 'REMOVE_SKILL'
export const REDIRECT_PAGE = 'REDIRECT_PAGE'
export const SET_LOGGED_IN = 'SET_LOGGED_IN'
export const SET_LOADING = 'SET_LOADING'
// User
export type UserActions =
  | LoginUserRequestAction
  | LoginUserSuccessAction
  | LoginUserFailAction
  | LogoutUserAction
  | SetLoggedInAction
  | SetLoadingAction
  | GetUserRequestAction
  | GetUserSuccessAction
  | GetUserFailAction

export type LoginUserRequestAction = {
  type: typeof LOGIN_USER_REQUEST
  payload: {
    credential: {
      email: string
      password: string
    }
    history: any
  }
}

export type LoginUserSuccessAction = {
  type: typeof LOGIN_USER_SUCCESS
  payload: {
    credential: {
      email: string
      password: string
    }
    info: {
      id: number
      role: string
      firstName?: string
      lastName?: string
      contact?: string
      relocate?: boolean
      seniority?: string
      startingDate?: string
      created?: Date
      education?: {
        institute?: string
        degree?: string
      }
      skills?: any[]
      skillLevel?: string
      companyName?: string
      companyInfo?: string
      address?: string
      jobPosts?: any[]
      image: string
    }
  }
}

export type LoginUserFailAction = {
  type: typeof LOGIN_USER_FAIL
  payload: {
    error: any
  }
}

export type LogoutUserAction = {
  type: typeof LOGOUT_USER
}

// Employer
export type EmployerActions =
  | RegisterEmployerRequestAction
  | RegisterEmployerSuccessAction
  | RegisterEmployerFailAction
  | UpdateEmployerRequestAction
  | UpdateEmployerSuccessAction
  | UpdateEmployerFailAction
  | GetUserRequestAction
  | GetUserSuccessAction
  | GetUserFailAction

export type RegisterEmployerRequestAction = {
  type: typeof REGISTER_EMPLOYER_REQUEST
  payload: {
    email: string
    password: string
    history: any
  }
}

export type RegisterEmployerSuccessAction = {
  type: typeof REGISTER_EMPLOYER_SUCCESS
  payload: {
    info: {
      email: string
      password: string
      role: string
    }
  }
}

export type RegisterEmployerFailAction = {
  type: typeof REGISTER_EMPLOYER_FAIL
  payload: {
    error: any
  }
}

export type EmployerUpdate = {
  companyName: string
  companyInfo: string
  address: string
}

export type UpdateEmployerRequestAction = {
  type: typeof UPDATE_EMPLOYER_REQUEST
  payload: Partial<EmployerUpdate>
}

export type UpdateEmployerSuccessAction = {
  type: typeof UPDATE_EMPLOYER_SUCCESS
  payload: {
    info: {
      companyName: string
      companyInfo: string
      address: string
    }
  }
}

export type UpdateEmployerFailAction = {
  type: typeof UPDATE_EMPLOYER_FAIL
  payload: {
    error: any
  }
}

export type GetUserRequestAction = {
  type: typeof GET_USER_REQUEST
}

export type GetUserSuccessAction = {
  type: typeof GET_USER_SUCCESS
  payload: {
    companyName: string
    companyInfo: string
    address: string
    role: string
    jobPosts: any[]
  }
}

export type GetUserFailAction = {
  type: typeof GET_USER_FAIL
  payload: {
    error: any
  }
}

// Jobseeker
export type JobseekerActions =
  | RegisterJobseekerRequestAction
  | RegisterJobseekerSuccessAction
  | RegisterJobseekerFailAction
  | updateJobseekerRequestAction
  | updateJobseekerSuccessAction
  | updateJobseekerFailAction
  | matchJobseekerRequestAction
  | matchJobseekerSuccessAction
  | matchJobseekerFailAction

export type RegisterJobseekerRequestAction = {
  type: typeof REGISTER_JOBSEEKER_REQUEST
  payload: {
    email: string
    password: string
    history: any
  }
}

export type RegisterJobseekerSuccessAction = {
  type: typeof REGISTER_JOBSEEKER_SUCCESS
  payload: {
    jobSeekerInfo: {
      email: string
      password: string
      role: string
    }
  }
}

export type RegisterJobseekerFailAction = {
  type: typeof REGISTER_JOBSEEKER_FAIL
  payload: {
    error: any
  }
}

export type JobseekerUpdate = {
  firstName: string
  lastName: string
  seniority: string
  skills: any[]
  relocate: boolean
  startingDate: DayValue | string
  institute: string
  degree: string
  contact: any
  workExperience: any
  image: string
}

export type updateJobseekerRequestAction = {
  type: typeof UPDATE_JOBSEEKER_REQUEST
  payload: Partial<JobseekerUpdate>
}

export type updateJobseekerSuccessAction = {
  type: typeof UPDATE_JOBSEEKER_SUCCESS
  payload: JobseekerUpdate
}

export type updateJobseekerFailAction = {
  type: typeof UPDATE_JOBSEEKER_FAIL
  payload: {
    error: any
  }
}

export type MatchInfo = {
  payload: {
    title: JobPost
    jobDescription: JobPost
    seniority: JobPost
    skills: JobPost
    startingDate: JobPost
    companyName: EmployerUpdate
    companyInfo: EmployerUpdate
    address: EmployerUpdate
  }
}

export type matchJobseekerRequestAction = {
  type: typeof MATCH_JOBSEEKER_REQUEST
}

export type matchJobseekerSuccessAction = {
  type: typeof MATCH_JOBSEEKER_SUCCESS
  payload: MatchInfo
}

export type matchJobseekerFailAction = {
  type: typeof MATCH_JOBSEEKER_FAIL
  payload: {
    error: string
  }
}

// Skills
export type ResourcesActions =
  | GetSkillsRequestAction
  | GetSkillsSuccessAction
  | GetSkillsFailAction
  | CreatingJobPostRequestAction
  | CreatingJobPostFailAction
  | CreatingJobPostSuccessAction
  | DeletingRequestActionType
  | DeletingSuccessActionType
  | DeletingFailActionType
  | UpdateJobPostRequestAction
  | UpdateJobPostSuccessAction
  | UpdateJobPostFailAction

export type SkillActions =
  | CreateSkillRequestAction
  | CreateSkillSuccessAction
  | CreateSkillFailAction

export type Skill = {
  id: number
  name: string
}

export type CreateSkillRequestAction = {
  type: typeof CREATE_SKILL_REQUEST
  payload: {
    name: Skill
  }
}

export type CreateSkillSuccessAction = {
  type: typeof CREATE_SKILL_SUCCESS
  payload: {
    skillInfo: {
      id: number
      name: string
    }
  }
}

export type CreateSkillFailAction = {
  type: typeof CREATE_SKILL_FAIL
  payload: {
    error: string
  }
}

export type GetSkillsRequestAction = {
  type: typeof GET_SKILLS_REQUEST
}

export type GetSkillsSuccessAction = {
  type: typeof GET_SKILLS_SUCCESS
  payload: {
    skills: any[]
  }
}

export type GetSkillsFailAction = {
  type: typeof GET_SKILLS_FAIL
  payload: {
    error: string
  }
}

// Jobpost
export type JobPost = {
  title: string
  jobDescription: string
  seniority: string
  skills: any[]
  startingDate: DayValue | string
}

export type CreatingJobPostRequestAction = {
  type: typeof CREATE_JOB_POST_REQUEST
  payload: JobPost
}

export type CreatingJobPostSuccessAction = {
  type: typeof CREATE_JOB_POST_SUCCESS
  payload: JobPost
}

export type CreatingJobPostFailAction = {
  type: typeof CREATE_JOB_POST_FAIL
  payload: {
    error: any
  }
}

export type UpdateJobPostRequestAction = {
  type: typeof UPDATE_JOB_POST_REQUEST
  payload: Partial<JobPost>
}

export type UpdateJobPostSuccessAction = {
  type: typeof UPDATE_JOB_POST_SUCCESS
  payload: JobPost
}

export type UpdateJobPostFailAction = {
  type: typeof UPDATE_JOB_POST_FAIL
  payload: {
    error: any
  }
}

export type DeletingRequestActionType = {
  type: typeof JOB_DELETE_REQUEST
  payload: JobPost
}

export type DeletingSuccessActionType = {
  type: typeof JOB_DELETE_SUCCESS
}

export type DeletingFailActionType = {
  type: typeof JOB_DELETE_FAIL
  payload: {
    error: any
  }
}

// Credential
export type Credential = {
  email?: string
  password?: string
}

// States
export type CredentialState = {
  credential: Credential
}

export type CredentialStateUser = {
  userInfo: {
    role: string
    id: number
    loading: boolean
    error: any
    relocate: boolean
  }
  info: {
    jobPosts: any[]
    skills: any[]
  }
  isLoggedIn: boolean
}

export type CredentialStateEmployer = {
  companyName: string
  companyInfo: string
  address: any
  image: string
}

export type CredentialStateJobseeker = {
  firstName: string
  lastName: string
  seniority: string
  relocate: boolean
  startingDate: DayValue | string
  institute: string
  degree: string
  contact: any
  workExperience: number
  image: string
  skills: any[]
  jobseekerMatch: any[]
}

export type ResourcesState = {
  skills: any[]
  loading: boolean
  error: any
  jobPost: JobPostState
}

export type JobPostState = {
  title: string
  jobDescription: string
  seniority: string
  skills: any[]
  startingDate: DayValue | string
  image: string
}

export type AppState = {
  user: CredentialStateUser
  employer: CredentialStateEmployer
  jobseeker: CredentialStateJobseeker
  resources: ResourcesState
}

export type SetLoggedInAction = {
  type: typeof SET_LOGGED_IN
}

export type SetLoadingAction = {
  type: typeof SET_LOADING
}
