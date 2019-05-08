import { put, takeEvery, delay } from "redux-saga/effects"

function* registrationWatchWorker(action) {
  try {
    let { username, password, retypePassword } = action.payload
    yield put({ type: "REGISTRATION_SHOW_LOADING", payload: true })
    yield delay(2000)
    yield put({ type: "REGISTRATION_SHOW_LOADING", payload: false })
    yield delay(200)
    yield put({ type: "NAV_HOME" })
  } catch (error) {
    console.log(error)
    yield put({ type: "REGISTRATION_SHOW_LOADING", payload: false })
  }
}

export default function* watch() {
  yield takeEvery("REGISTER_ACTION", registrationWatchWorker)
}
