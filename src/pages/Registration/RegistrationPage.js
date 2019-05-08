/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react"
import { connect } from "react-redux"
import { Platform, StyleSheet, Text, View, Button } from "react-native"
import {
  BaseContainer,
  CommonAlertPopup,
  CommonAlertPopupNoButton,
  InProcessPopup,
  BaseText,
  BaseTextInput
} from "@shares"

class RegistrationPage extends BaseContainer {
  state = { username: null, password: null, retypePassword: null }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Please provide those information to complete registration process
        </Text>

        <BaseTextInput
          style={styles.inputStyle}
          placeholder="Username"
          value={this.state.username}
          onChangeText={value =>
            this.setState({ ...this.state, username: value })
          }
        />

        <BaseTextInput
          placeholder="Password"
          style={styles.inputStyle}
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={value =>
            this.setState({ ...this.state, password: value })
          }
        />

        <BaseTextInput
          placeholder="Retype Password"
          style={styles.inputStyle}
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={value =>
            this.setState({ ...this.state, retypePassword: value })
          }
        />

        <Button
          title="Register"
          onPress={() => {
            this.props.register(
              this.state.username,
              this.state.password,
              this.state.retypePassword
            )
          }}
        />
        <CommonAlertPopup
          title="Welcome to React Native Skeleton Project"
          isShow={false}
        />
        <InProcessPopup isShow={this.props.showLoading} title="Loading..." />
      </View>
    )
  }
}

RegistrationPage.navigationOptions = {
  title: "Registration Page"
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  inputStyle: {
    paddingLeft: 10,
    width: 300,
    height: 40,
    margin: 10,
    borderColor: "gray",
    borderWidth: 1
  }
})

const mapStateToProps = (state, ownProps) => {
  return state.registrationReducer
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { goBack } = ownProps.navigation
  return {
    register: (username, password, retypePassword) =>
      dispatch({
        type: "REGISTER_ACTION",
        payload: { username, password, retypePassword }
      })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationPage)
