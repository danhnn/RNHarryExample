/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react"
import { connect } from "react-redux"
import { Platform, StyleSheet, Text, View, Button } from "react-native"
import { BaseContainer } from "@shares"
import { colors } from "@styles"

export default class HomePage extends BaseContainer {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome To HomePage</Text>
      </View>
    )
  }
}

HomePage.navigationOptions = {
  title: "Home"
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.BACKGROUND
  }
})
