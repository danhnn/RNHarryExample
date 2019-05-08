import { Login, Registration, Setting } from "@pages"
import { all } from "redux-saga/effects"

export default function* rootSaga() {
  yield all([
    Login.LoginpageSaga(),
    Registration.RegistrationSaga(),
    Setting.SettingSaga()
  ])
}
