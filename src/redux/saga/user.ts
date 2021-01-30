import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

import LocalStorage from '../../local-storage'
import { LoginUserRequestAction } from '../types'

import {
  loginUserSuccess,
  loginUserFail,
  getUserSuccess,
  getUserFail,
  setLoggedIn,
} from '../actions/user'

function* loginUserSaga(action: LoginUserRequestAction) {
  const email = action.payload.credential.email
  const password = action.payload.credential.password
  const history = action.payload.history

  try {
    const res = yield axios.post('/login/local', { email, password })

    if (res.data.status === 200) {
      yield put(loginUserSuccess(res.data.payload))
      yield LocalStorage.saveToken(res.data.payload.token)
      yield put(setLoggedIn())
      history.push('/user/profile')
    }
  } catch (error) {
    history.push('/')
    yield put(loginUserFail())
  }
}

function* getUserSaga() {
  try {
    const res = yield axios.get('/user')
    yield put(getUserSuccess(res.data.payload))
  } catch (error) {
    yield put(getUserFail(error))
  }
}
const sagaWatcher = [
  takeLatest('LOGIN_USER_REQUEST', loginUserSaga),
  takeLatest('GET_USER_REQUEST', getUserSaga),
]

export default sagaWatcher
