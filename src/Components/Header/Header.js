import React, { Component } from "react";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Title,
  Text
} from "native-base";

import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native-gesture-handler";

class HeaderIconButtonTextButtonExample extends Component {
  render() {
    return (
      <Header noShadow style={{ backgroundColor: "transparent" }}>
        <Left>
          <TouchableOpacity onPress={() => alert("jhe")}>
            <Button transparent>
              <Ionicons
                color={this.props.color}
                size={25}
                name={this.props.icon}
              />
            </Button>
          </TouchableOpacity>
        </Left>
        <Body>
          <Title style={{ color: this.props.color }}>{this.props.title}</Title>
        </Body>
        <Right>
          <Button transparent>
            <FontAwesome
              color={this.props.color}
              size={20}
              name={this.props.icon1}
            />
          </Button>
          <Button transparent>
            <MaterialCommunityIcons
              color={this.props.color}
              size={20}
              name={this.props.icon2}
            />
          </Button>
          <Button transparent>
            <FontAwesome
              color={this.props.color}
              size={20}
              name={this.props.icon3}
            />
          </Button>
        </Right>
      </Header>
    );
  }
}

export default HeaderIconButtonTextButtonExample;
