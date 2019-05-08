/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react"
import { StyleSheet, View, Button } from "react-native"
import { BaseContainer, BaseText } from "@shares"
import { connect } from "react-redux"
import { colors } from "@styles"

class SettingPage extends BaseContainer {
  render() {
    const { logout } = this.props
    return (
      <View style={styles.container}>
        <BaseText>Welcome to Setting Page</BaseText>

        <Button
          title="Logout"
          onPress={() => {
            logout()
          }}
        />
      </View>
    )
  }
}

SettingPage.navigationOptions = {
  title: "Setting"
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.BACKGROUND
  }
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => dispatch({ type: "LOGOUT_ACTION" })
  }
}

export default connect(
  null,
  mapDispatchToProps
)(SettingPage)
