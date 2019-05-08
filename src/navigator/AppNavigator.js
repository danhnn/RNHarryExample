import React from "react"
import { connect } from "react-redux"
import {
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator
} from "react-navigation"
import { Home, Login, Registration, Setting, Activity, Contact } from "@pages"
import {
  createReduxContainer,
  createReactNavigationReduxMiddleware,
  createNavigationReducer
} from "react-navigation-redux-helpers"
import Ionicons from "react-native-vector-icons/Ionicons"
import IconWithBadge from "./IconWithBadge"

const noHeaderStyle = {
  navigationOptions: { header: null },
  cardStyle: { backgroundColor: "white" }
}

export const Authentication = createStackNavigator({
  Login: { screen: Login.LoginPage },
  Registration: { screen: Registration.RegistrationPage }
})

const HomeIconWithBadge = props => {
  return <IconWithBadge {...props} badgeCount={3} />
}

const TabNavigator = createBottomTabNavigator(
  {
    Home: Home.HomePage,
    Activity: Activity.ActivityPage,
    Contact: Contact.ContactPage,
    Setting: Setting.SettingPage
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        let IconComponent = Ionicons
        let iconName
        if (routeName === "Home") {
          iconName = `ios-information-circle${focused ? "" : "-outline"}`
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
          IconComponent = HomeIconWithBadge
        } else if (routeName === "Activity") {
          iconName = `ios-bicycle`
        } else if (routeName === "Contact") {
          iconName = `ios-book`
        } else if (routeName === "Setting") {
          iconName = `ios-options`
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />
      }
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    }
  }
)

export const AppNavigator = createSwitchNavigator({
  Authentication: { screen: Authentication },
  Main: { screen: TabNavigator }
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
