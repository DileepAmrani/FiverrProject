import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "native-base";

class Dibbs extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>My Dibbs Screen</Text>
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
export default Dibbs;
