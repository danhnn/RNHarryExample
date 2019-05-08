import { put, takeEvery, delay } from "redux-saga/effects"
import { Const } from "@shares"

function* registrationWatchWorker(action) {
  try {
    let { username, password, retypePassword } = action.payload

    if (!username || !password || !retypePassword) {
      yield put({
        type: Const.SET_ALERT_MESSAGE,
        payload: "You should fill all fileds!"
      })
      return
    }

    if (password !== retypePassword) {
      yield put({
        type: Const.SET_ALERT_MESSAGE,
        payload: "Password missmatch!"
      })
      return
    }

    yield put({ type: Const.REGISTRATION_SHOW_LOADING, payload: true })
    yield delay(2000)
    yield put({ type: Const.REGISTRATION_SHOW_LOADING, payload: false })
    yield delay(200)
    yield put({
      type: Const.UPDATE_USER_INFO,
      payload: { token: "12345", username }
    })
    yield put({ type: Const.NAV_MAIN })
  } catch (error) {
    console.log(error)
    yield put({ type: Const.REGISTRATION_SHOW_LOADING, payload: false })
  }
}

export default function* watch() {
  yield takeEvery(Const.REGISTER_ACTION, registrationWatchWorker)
}
