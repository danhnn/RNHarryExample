/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from "react"
import Store from "@middleware"
import { AppWithNavigationState } from "@navigator"

console.disableYellowBox = true

const App = () => {
  return (
    <Store>
      <AppWithNavigationState />
    </Store>
  )
}

export default App
