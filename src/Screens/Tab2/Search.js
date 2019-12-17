import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "native-base";

class Search extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Search Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
export default Search;
