import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

import {
  RegisterEmployerRequestAction,
  UpdateEmployerRequestAction,
} from './../types'
import {
  registerEmployerSuccess,
  registerEmployerFail,
  updateEmployerSuccess,
  updateEmployerFail,
} from '../../redux/actions/employer'

function* registerEmployerSaga(action: RegisterEmployerRequestAction) {
  const email = action.payload.email
  const password = action.payload.password

  try {
    const res = yield axios.post('/employer', {
      credential: { email, password },
    })
    console.log('res', res)
    yield put(registerEmployerSuccess(res.data))
    const history = action.payload.history
    if (res.data.status === 201) {
      yield history.push('/login')
    }
  } catch (error) {
    yield put(registerEmployerFail())
  }
}

function* updateEmployerSaga(action: UpdateEmployerRequestAction) {
  const employerInfo = action.payload
  try {
    const res = yield axios.patch('/employer', employerInfo)
    yield put(updateEmployerSuccess(res.data.payload))
  } catch (error) {
    yield put(updateEmployerFail(error))
  }
}

const sagaWatcher = [
  takeLatest('REGISTER_EMPLOYER_REQUEST', registerEmployerSaga),
  takeLatest('UPDATE_EMPLOYER_REQUEST', updateEmployerSaga),
]

export default sagaWatcher
