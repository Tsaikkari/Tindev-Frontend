export const REGISTER_EMPLOYER_REQUEST = "REGISTER_EMPLOYER_REQUEST";
export const REGISTER_EMPLOYER_SUCCESS = "REGISTER_EMPLOYER_SUCCESS";
export const REGISTER_EMPLOYER_FAIL = "REGISTER_EMPLOYER_FAIL";

export type employerActions =
  | RegisterEmployerRequestAction
  | RegisterEmployerSuccessAction
  | RegisterEmployerFailAction;

export type RegisterEmployerRequestAction = {
  type: typeof REGISTER_EMPLOYER_REQUEST;
  payload: {
    credentials: {
      email: string;
      password: string;
    };
  };
};

export type RegisterEmployerSuccessAction = {
  type: typeof REGISTER_EMPLOYER_SUCCESS;
  payload: {
    credentials: {
      email: string;
      password: string;
    };
  };
};

export type RegisterEmployerFailAction = {
  type: typeof REGISTER_EMPLOYER_FAIL;
  payload: {
    error: any;
  };
};

export type Credential = {
  email: string;
  password: string;
};

export type CredentialState = {
  credentials: {};
  loading: Boolean;
  error: any;
};

export type AppState = {
  employer: CredentialState;
};
