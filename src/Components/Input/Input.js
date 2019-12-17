import React, { Component } from "react";
import { Item, Input } from "native-base";
import Icon from "@expo/vector-icons/Entypo";
import { StyleSheet } from "react-native";

class RoundedTextboxExample extends Component {
  render() {
    return (
      <Item rounded style={styles.itemStyle}>
        <Input
          style={styles.inputStyle}
          secureTextEntry={this.props.secureTextEntry}
          value={this.props.value}
          placeholder={this.props.placeholder}
          placeholderTextColor="gray"
          type={this.props.type}
        />
        <Icon
          active
          size={20}
          style={styles.iconStyle}
          name={this.props.icon}
        />
      </Item>
    );
  }
}
const styles = StyleSheet.create({
  itemStyle: {
    marginRight: 15,
    marginTop: 16
  },
  iconStyle: {
    marginRight: 10,
    color: "#6f44a3"
  },
  inputStyle: {
    marginLeft: 15
  }
});

export default RoundedTextboxExample;
