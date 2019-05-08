/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react"
import { connect } from "react-redux"
import { Platform, StyleSheet, View, Button } from "react-native"
import { BaseContainer, BaseText, showToast } from "@shares"
import { colors } from "@styles"

export default class HomePage extends BaseContainer {
  render() {
    return (
      <View style={styles.container}>
        <BaseText>Welcome To HomePage</BaseText>
        <Button
          title="Show Toasts"
          onPress={() => {
            showToast("Awesome!!!")
          }}
        />
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
