// import { NavigationReducer } from '@navigator' // has to be imported before all containers
import { combineReducers } from "redux"
import { Home, Login, Registration } from "@pages"
import { NavReducer } from "@navigator"

export default combineReducers({
  homeReducer: Home.HomepageReducer,
  loginReducer: Login.LoginpageReducer,
  registrationReducer: Registration.RegistrationReducer,
  nav: NavReducer
})
