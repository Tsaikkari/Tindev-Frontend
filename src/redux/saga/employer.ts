import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import { registerEmployerSuccess } from "../actions/employer";

function* registerEmployerSaga(credentials: Credential) {
  try {
    // const req = yield axios.post('/employer', { credentials })
    //   yield put(registerEmployerSuccess(req.data))
    const req = yield axios.post(
      "https://tindev-dev-deploy.herokuapp.com/employer",
      { credentials }
    );
    yield put(registerEmployerSuccess(req.data));
  } catch (error) {
    //console.log(error)
    throw new Error(error.message);
  }
}

// function* saveState() {
//   const state = yield select()
//   yield localStorage.setItem('initState', JSON.stringify(state))
// }

const sagaWatcher = [
  takeLatest("REGISTER_EMPLOYER_REQUEST", registerEmployerSaga),
];

export default sagaWatcher;
