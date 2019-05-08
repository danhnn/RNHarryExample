/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { BaseContainer, BaseText } from "@shares"
import { colors } from "@styles"

export default class ActivityPage extends BaseContainer {
  render() {
    return (
      <View style={styles.container}>
        <BaseText>Welcome to Activity Page</BaseText>
      </View>
    )
  }
}

ActivityPage.navigationOptions = {
  title: "Activity"
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.BACKGROUND
  }
})
