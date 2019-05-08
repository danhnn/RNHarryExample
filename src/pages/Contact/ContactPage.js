/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react"
import { StyleSheet, Text, View } from "react-native"
import { BaseContainer } from "@shares"

export default class ContactPage extends BaseContainer {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to Contact Page</Text>
      </View>
    )
  }
}

ContactPage.navigationOptions = {
  title: "Contact"
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
})
