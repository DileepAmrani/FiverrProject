import React, { Component } from "react";
import { Button, Text } from "native-base";
import Ionicons from "@expo/vector-icons/Entypo";
import { StyleSheet } from "react-native";

class ButtonIconExample extends Component {
  render() {
    return (
      <Button
        onPress={() => alert("Social Button Press")}
        rounded
        iconLeft
        style={[styles.btnStyle, { backgroundColor: this.props.color }]}
      >
        <Ionicons size={37} name={this.props.icon} style={styles.iconStyle} />
        <Text style={styles.textStyle}>{this.props.name}</Text>
      </Button>
    );
  }
}

const styles = StyleSheet.create({
  btnStyle: {
    height: 40,
    width: "41%",
    marginLeft: 10,
    marginRight: 10
  },
  textStyle: {
    color: "white",
    textTransform: "capitalize"
  },
  iconStyle: {
    color: "white",
    borderRadius: 50,
    marginLeft: 3
  }
});

export default ButtonIconExample;
