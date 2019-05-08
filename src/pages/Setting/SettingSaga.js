import { put, takeEvery } from "redux-saga/effects"

function* logoutWatchWorker(action) {
  try {
    yield put({
      type: "UPDATE_USER_INFO",
      payload: null
    })
    yield put({ type: "NAV_LOGIN" })
  } catch (error) {
    console.log(error)
  }
}

export default function* watch() {
  yield takeEvery("LOGOUT_ACTION", logoutWatchWorker)
}
