import React, { Component } from "react";
import { Item, Input } from "native-base";
import Icon from "@expo/vector-icons/FontAwesome";
import { StyleSheet } from "react-native";

class RoundedTextboxExample extends Component {
  render() {
    return (
      <Item rounded style={styles.itemStyle}>
        <Icon
          active
          size={20}
          style={styles.iconStyle}
          name={this.props.icon}
        />
        <Input
          style={styles.inputStyle}
          secureTextEntry={this.props.secureTextEntry}
          value={this.props.value}
          placeholder={this.props.placeholder}
          placeholderTextColor="gray"
        />
      </Item>
    );
  }
}

const styles = StyleSheet.create({
  itemStyle: {
    marginRight: 15,
    marginTop: 8
  },
  iconStyle: {
    marginLeft: 10,
    color: "#6f44a3"
  },
  inputStyle: {
    marginLeft: 15,
    height: 40
  }
});

export default RoundedTextboxExample;
