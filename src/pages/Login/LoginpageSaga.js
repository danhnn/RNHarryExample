import { put, takeEvery, delay } from "redux-saga/effects"
import { Const } from "@shares"

function* loginWatchWorker(action) {
  try {
    let { username, password } = action.payload
    yield put({ type: Const.LOGIN_SHOW_LOADING, payload: true })
    yield delay(2000)
    yield put({ type: Const.LOGIN_SHOW_LOADING, payload: false })
    yield delay(200)
    yield put({
      type: Const.UPDATE_USER_INFO,
      payload: { token: "12345", username }
    })
    yield put({ type: Const.NAV_MAIN })
  } catch (error) {
    console.log(error)
    yield put({ type: Const.LOGIN_SHOW_LOADING, payload: false })
  }
}

export default function* watch() {
  yield takeEvery(Const.LOGIN_ACTION, loginWatchWorker)
}
