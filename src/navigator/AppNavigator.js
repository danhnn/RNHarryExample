import React from "react"
import { connect } from "react-redux"
import { createStackNavigator, createSwitchNavigator } from "react-navigation"
import { Home, Login, Registration } from "@pages"
import {
  createReduxContainer,
  createReactNavigationReduxMiddleware,
  createNavigationReducer
} from "react-navigation-redux-helpers"

const noHeaderStyle = {
  navigationOptions: { header: null },
  cardStyle: { backgroundColor: "white" }
}

export const Authentication = createStackNavigator({
  Login: { screen: Login.LoginPage },
  Registration: { screen: Registration.RegistrationPage }
})

export const AppNavigator = createSwitchNavigator({
  Authentication: { screen: Authentication },
  Home: { screen: Home.HomePage }
})

export const reactNavigationMiddleware = createReactNavigationReduxMiddleware(
  state => state.nav
)

const App = createReduxContainer(AppNavigator)
const mapStateToProps = state => ({
  state: state.nav
})

const AppWithNavigationState = connect(mapStateToProps)(App)
export default AppWithNavigationState
