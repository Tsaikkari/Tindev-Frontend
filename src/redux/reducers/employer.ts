import {
  employerActions,
  REGISTER_EMPLOYER_REQUEST,
  REGISTER_EMPLOYER_SUCCESS,
  REGISTER_EMPLOYER_FAIL,
} from "../types";

//export const employerRegister = (state: CredentialState, action: employerActions) => {
const initialState = {
  credentials: "",
  loading: false,
  error: null,
};

const test = (state = initialState, action: employerActions) => {
  switch (action.type) {
    case REGISTER_EMPLOYER_REQUEST:
      return { ...state, loading: true, credentials: "" };
    case REGISTER_EMPLOYER_SUCCESS:
      return { ...state, loading: false, credentials: action.payload };
    case REGISTER_EMPLOYER_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default test;
