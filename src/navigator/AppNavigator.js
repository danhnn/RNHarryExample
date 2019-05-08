import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { createStackNavigator } from "react-navigation"
import { Home, Login } from "@pages"
import {
  createReduxContainer,
  createReactNavigationReduxMiddleware,
  createNavigationReducer
} from "react-navigation-redux-helpers"

const noHeaderStyle = {
  navigationOptions: { header: null },
  cardStyle: { backgroundColor: "white" }
}

export const AppNavigator = createStackNavigator({
  Login: { screen: Login.LoginPage },
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
