// import { NavigationReducer } from '@navigator' // has to be imported before all containers
import { combineReducers } from "redux"
import { Login, Registration } from "@pages"
import { NavReducer } from "@navigator"

export default combineReducers({
  loginReducer: Login.LoginpageReducer,
  registrationReducer: Registration.RegistrationReducer,
  nav: NavReducer
})
