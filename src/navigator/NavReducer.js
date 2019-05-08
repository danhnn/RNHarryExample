import { AppNavigator } from "./AppNavigator"
import { NavigationActions } from "react-navigation"
import { Const } from "@shares"

let initNavState = AppNavigator.router.getStateForAction(
  NavigationActions.init()
)

export default (state = initNavState, action) => {
  let nextState
  switch (action.type) {
    case Const.NAV_LOGIN:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: "Login" }),
        state
      )
      break

    case Const.NAV_HOME:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: "Home" }),
        state
      )
      break

    case Const.NAV_SETTING:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: "Setting" }),
        state
      )
      break

    case Const.NAV_MAIN:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: "Main" }),
        state
      )
      break

    case Const.NAV_REGISTRATION:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: "Registration" }),
        state
      )
      break

    default:
      nextState = AppNavigator.router.getStateForAction(action, state)
      break
  }
  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state
}
