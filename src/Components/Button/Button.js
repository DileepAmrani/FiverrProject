import React, { Component } from "react";
import { Button, Text } from "native-base";
import { StyleSheet } from "react-native";

/**************  Component of Button     *****************/

class ButtonRoundedExample extends Component {
  render() {
    return (
      <Button
        light
        onPress={this.props.onPress}
        rounded
        style={styles.btnStyle}
      >
        <Text style={styles.textStyle}>{this.props.name}</Text>
      </Button>
    );
  }
}

/**************  CSS For Button     *****************/

const styles = StyleSheet.create({
  btnStyle: {
    marginLeft: 15,
    marginRight: 15,
    justifyContent: "center",
    marginTop: 17,
    backgroundColor: "#fff",
    width: "53%",
    alignSelf: "center"
  },
  textStyle: {
    width: "70%",
    textAlign: "center",
    color: "black"
  }
});
export default ButtonRoundedExample;
