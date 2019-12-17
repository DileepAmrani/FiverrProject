import React from "react";
import {
  View,
  Text,
  Button,
  CardItem,
  Body,
  Radio,
  Content,
  Tabs,
  Tab,
  ScrollableTab
} from "native-base";
import { ImageBackground, StyleSheet } from "react-native";
import { Header } from "../../Components";
import Icon from "@expo/vector-icons/FontAwesome";

import EncrptoIcon from "@expo/vector-icons/Entypo";
import { ScrollView } from "react-native-gesture-handler";
class Detail extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={{
            uri:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQH1vGJdLWpZIfsM_oxIm9zMZajfgVN2Ov8lAOXswpOVM92OBV&s"
          }}
          imageStyle={{
            borderBottomLeftRadius: 60,
            borderBottomRightRadius: 60
          }}
          style={styles.imgStyle}
        >
          <Header icon="md-arrow-back" icon3="shopping-cart" color="white" />
        </ImageBackground>

        <ScrollView>
          <View style={{ padding: 10, marginTop: "30%" }}>
            <View style={styles.cardContainer}>
              <View
                style={{
                  backgroundColor: "white",
                  borderRadius: 20,
                  padding: 5
                }}
              >
                <Icon name="mail-forward" size={20} color="#eda152" />
              </View>
              <View
                style={{
                  backgroundColor: "white",
                  borderRadius: 20,
                  padding: 5,
                  marginLeft: 10
                }}
              >
                <Icon name="heart" size={20} color="#502a7e" />
              </View>
            </View>

            <CardItem bordered style={{ borderWidth: 2, borderRadius: 20 }}>
              <Body>
                <Text style={styles.name}>Restaurent Name</Text>
                <Text style={styles.college_name}>
                  Junior Collage neighborhood assocation,
                </Text>
                <Text style={styles.college_name}>snata rise -11.7 mi </Text>

                <View style={styles.tabs_section}>
                  <Tabs
                    tabContainerStyle={{
                      backgroundColor: "transparent",
                      elevation: 0,
                      borderBottomWidth: 1,
                      borderColor: "grey"
                    }}
                  >
                    <Tab
                      heading="Deals"
                      tabStyle={styles.tabStyling}
                      activeTabStyle={styles.activeTabStyle}
                      textStyle={styles.tabTextStyle}
                      activeTextStyle={styles.activeTabTextStyle}
                    >
                      <CardItem>
                        <Radio style={{ marginRight: 10, marginLeft: -15 }} />
                        <Text style={{ fontSize: 12, color: "grey" }}>
                          Four $7 Voucher : each DIBBS valid toward one $7 Visit
                        </Text>
                      </CardItem>
                      <View style={{ flexDirection: "row", marginTop: -10 }}>
                        <Text
                          style={{
                            marginLeft: 30,
                            fontSize: 18,
                            color: "rgb(74, 29, 121)"
                          }}
                        >
                          $17
                        </Text>
                        <Text
                          style={{
                            textDecorationLine: "line-through",
                            marginLeft: 8,
                            marginTop: 3
                          }}
                        >
                          $28
                        </Text>
                        <Text
                          style={{
                            justifyContent: "flex-end",
                            marginLeft: 60,
                            fontSize: 12,
                            marginTop: 3
                          }}
                        >
                          # Amount available
                        </Text>
                      </View>

                      <CardItem>
                        <Radio
                          selected={true}
                          style={{ marginRight: 10, marginLeft: -15 }}
                        />
                        <Text style={{ fontSize: 12, color: "grey" }}>
                          Four $7 Voucher : each DIBBS valid toward one $7 Visit
                        </Text>
                      </CardItem>
                      <View style={{ flexDirection: "row", marginTop: -10 }}>
                        <Text
                          style={{
                            marginLeft: 30,
                            fontSize: 18,
                            color: "rgb(74, 29, 121)"
                          }}
                        >
                          $17
                        </Text>
                        <Text
                          style={{
                            textDecorationLine: "line-through",
                            marginLeft: 8,
                            marginTop: 3
                          }}
                        >
                          $28
                        </Text>
                        <Text
                          style={{
                            justifyContent: "flex-end",
                            marginTop: 3,
                            marginLeft: 60,
                            fontSize: 12
                          }}
                        >
                          # Amount available
                        </Text>
                      </View>
                      <View
                        style={{ flexDirection: "row", alignSelf: "center" }}
                      >
                        <View style={styles.icons}>
                          <Icon
                            active
                            name="phone"
                            style={{ fontSize: 20, color: "#9584b7" }}
                          />
                          <Text style={{ fontSize: 8, color: "#9584b7" }}>
                            Call now
                          </Text>
                        </View>

                        <View style={styles.icons}>
                          <Icon
                            active
                            name="paper-plane"
                            style={{ fontSize: 18, color: "#9584b7" }}
                          />
                          <Text style={{ fontSize: 8, color: "#9584b7" }}>
                            Direct
                          </Text>
                        </View>

                        <View style={styles.icons}>
                          <Icon
                            active
                            name="globe"
                            style={{ fontSize: 20, color: "#9584b7" }}
                          />
                          <Text style={{ fontSize: 8, color: "#9584b7" }}>
                            Website
                          </Text>
                        </View>

                        <View style={styles.icons}>
                          <EncrptoIcon
                            active
                            name="back-in-time"
                            style={{ fontSize: 20, color: "#9584b7" }}
                          />
                          <Text style={{ fontSize: 8, color: "#9584b7" }}>
                            8am-10am
                          </Text>
                        </View>
                      </View>

                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                          width: "100%"
                        }}
                      >
                        <Text style={{ marginTop: 10 }}>
                          Time left to get the deal
                        </Text>
                      </View>

                      <Text
                        style={{
                          color: "#9584b7",
                          fontSize: 20,
                          alignSelf: "center",
                          marginTop: 5
                        }}
                      >
                        2 Days - 23 : 25 : 23
                      </Text>
                    </Tab>

                    <Tab
                      heading="About"
                      tabStyle={styles.tabStyling}
                      activeTabStyle={styles.activeTabStyle}
                      textStyle={styles.tabTextStyle}
                      activeTextStyle={styles.activeTabTextStyle}
                    >
                      <Text>About Info</Text>
                    </Tab>

                    <Tab
                      heading="Location"
                      tabStyle={styles.tabStyling}
                      activeTabStyle={styles.activeTabStyle}
                      textStyle={styles.tabTextStyle}
                      activeTextStyle={styles.activeTabTextStyle}
                    >
                      <Text>Location Info</Text>
                    </Tab>
                  </Tabs>

                  {/* <Text style={[styles.tabs, { color: "#502a7e" }]}>Deals</Text>
                  <Text style={[styles.tabs, { color: "grey" }]}>About</Text>
                  <Text style={[styles.tabs, { color: "grey" }]}>Location</Text> */}
                </View>
              </Body>
            </CardItem>

            <Button style={styles.btn}>
              <Text style={{ letterSpacing: 2, fontSize: 20 }}>DIBBS</Text>
            </Button>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 100
  },
  imgStyle: {
    height: 270,
    width: null,
    flex: 1
  },
  cardContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  name: {
    fontWeight: "bold",
    fontSize: 20,
    letterSpacing: 1,
    color: "rgb(74, 29, 121)"
  },
  college_name: {
    color: "grey"
  },
  tabs_section: {
    width: "100%"
  },
  tabs: {
    marginRight: 40,
    fontWeight: "bold"
  },
  icons: {
    marginRight: 7,
    marginLeft: 7,
    borderRadius: 25,
    width: 55,
    alignItems: "center",
    justifyContent: "center",
    height: 55,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 1.0,
    backgroundColor: "white",
    elevation: 1
  },
  btn: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: "rgb(74, 29, 121)",
    height: 55,
    marginTop: 10
  },

  tabStyling: {
    backgroundColor: "transparent"
  },
  activeTabStyle: {
    backgroundColor: "transparent",
    borderColor: "white",
    borderBottomColor: "red"
  },
  tabTextStyle: {
    color: "grey"
  },
  activeTabTextStyle: {
    fontWeight: "bold",
    color: "black",
    color: "#502a7e"
  }
});

export default Detail;
