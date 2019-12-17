import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar, } from 'react-native';
import Navigation from './src/Config/Navigation/Navigation'
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <SafeAreaView style={styles.safeView}>
        <Navigation />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    paddingTop: StatusBar.currentHeight
  },
  container: {
    flex: 1,
    backgroundColor: '#f8f2ff',
  },


});


export default App