import { put, takeEvery } from "redux-saga/effects"
import { Const } from "@shares"

function* logoutWatchWorker(action) {
  try {
    yield put({
      type: Const.UPDATE_USER_INFO,
      payload: null
    })
    yield put({ type: Const.NAV_LOGIN })
  } catch (error) {
    console.log(error)
  }
}

export default function* watch() {
  yield takeEvery(Const.LOGOUT_ACTION, logoutWatchWorker)
}
