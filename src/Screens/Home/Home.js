import React from "react";
import { Header, Card, Search } from "../../Components";
import { StyleSheet, StatusBar, ScrollView, View } from "react-native";

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          icon="md-arrow-back"
          title="Featured Deals"
          icon1="user-o"
          icon2="map-marker-outline"
          icon3="shopping-cart"
          color="#69439a"
        />
        <View style={{ marginLeft: 15, marginBottom: 10 }}>
          <Search placeholder="Search Here" icon="search" />
        </View>
        <ScrollView>
          <Card
            onPress={() => this.props.navigation.navigate("Detail")}
            url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQH1vGJdLWpZIfsM_oxIm9zMZajfgVN2Ov8lAOXswpOVM92OBV&s"
            name=" Restaurant name"
            detail=" Junior collage neighborhood association, Santa rasa - 11.7ml"
            price="17$"
            discount="$39% off"
            date="2 Days - 23:25:23"
            description="39% 0ff- Four $17 vouchers: each DIBBS valid toward one $7
            visit"
          />
          <Card
            onPress={() => this.props.navigation.navigate("Detail")}
            url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQH1vGJdLWpZIfsM_oxIm9zMZajfgVN2Ov8lAOXswpOVM92OBV&s"
            name=" Restaurant name"
            detail=" Junior collage neighborhood association, Santa rasa - 11.7ml"
            price="17$"
            discount="$39% off"
            date="2 Days - 23:25:23"
            description="39% 0ff- Four $17 vouchers: each DIBBS valid toward one $7
            visit"
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    paddingTop: StatusBar.currentHeight
  },
  container: {
    flex: 1,
    backgroundColor: "#f8f2fe"
  }
});

export default Home;
