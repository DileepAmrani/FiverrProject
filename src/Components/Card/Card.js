import React, { Component } from "react";
import { ImageBackground, TouchableOpacity } from "react-native";
import { CardItem, Text, Left, Right, View } from "native-base";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { StyleSheet } from "react-native";

export default class CardImageExample extends Component {
  render() {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={this.props.onPress}>
        <View style={styles.conatainer}>
          <View style={styles.mainConatainer}>
            <ImageBackground
              source={{ uri: this.props.url }}
              style={styles.imgStyle}
            >
              <View style={styles.iconsContainer}>
                <View style={styles.iconHeart}>
                  <Icon name="heart" size={20} color="#502a7e" />
                </View>
                <View style={styles.iconShare}>
                  <Icon name="share" size={20} color="#eda152" />
                </View>
              </View>
            </ImageBackground>
            <CardItem>
              <Left>
                <Text style={styles.cardContainer}>{this.props.name}</Text>
              </Left>
            </CardItem>
            <CardItem>
              <Left>
                <Text style={{ color: "grey" }}>{this.props.detail}</Text>
              </Left>
            </CardItem>
            <CardItem>
              <Left>
                <Text style={{ color: "#9584b7", fontWeight: "bold" }}>
                  {this.props.price}
                </Text>
                <Text style={{ color: "grey" }}>$28</Text>
                <Text style={styles.discountText}>{this.props.discount}</Text>
              </Left>
              <Right>
                <Text>{this.props.date}</Text>
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Text style={{ color: "grey", textAlign: "left" }}>
                  {this.props.description}
                </Text>
              </Left>
            </CardItem>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
    padding: 12
  },
  mainConatainer: {
    backgroundColor: "#eee",
    borderRadius: 15,
    overflow: "hidden",
    elevation: 1
  },
  imgStyle: {
    height: 170,
    width: null,
    flex: 1
  },
  iconsContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 7,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  iconHeart: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 5
  },
  iconShare: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 5
  },
  cardContainer: {
    fontWeight: "400",
    fontSize: 22,
    color: "#22044e",
    textTransform: "capitalize"
  },
  discountText: {
    backgroundColor: "lightgrey",
    width: 90,
    borderRadius: 10,
    textAlign: "center",
    color: "#9584b7"
  }
});
