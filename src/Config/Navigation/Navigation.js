import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Encrypto from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import {
  Signup,
  Login,
  Home,
  Detail,
  Dibbs,
  Search,
  Saved
} from "../../Screens";
import { Text } from "native-base";

const AppNavigator1 = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  Detail: {
    screen: Detail,
    navigationOptions: {
      header: null
    }
  }
});

const TabNavigator = createBottomTabNavigator(
  {
    Deals: {
      screen: AppNavigator1,
      navigationOptions: {
        tabBarLabel: "Deals",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="handshake-o" size={20} color={tintColor} />
        )
      }
    },
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarLabel: "Search",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="search" size={20} color={tintColor} />
        )
      }
    },
    Saved: {
      screen: Saved,
      navigationOptions: {
        tabBarLabel: "Saved",
        tabBarIcon: ({ tintColor }) => (
          <Encrypto name="heart" size={20} color={tintColor} />
        )
      }
    },
    MyDibbs: {
      screen: Dibbs,
      navigationOptions: {
        tabBarLabel: "My Dibbs",
        tabBarIcon: ({ focused, tintColor }) =>
          focused ? (
            <Text style={{ fontSize: 20, fontWeight: "900", color: "#6f44a3" }}>
              D
            </Text>
          ) : (
            <Text style={{ fontSize: 20, fontWeight: "900", color: "#A68CC5" }}>
              D
            </Text>
          )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "#6f44a3",
      inactiveTintColor: "#A68CC5",
      tabStyle: {
        backgroundColor: "transparent"
      }
    }
  }
);
const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
  Signup: {
    screen: Signup,
    navigationOptions: {
      header: null
    }
  },
  Home: {
    screen: TabNavigator,
    navigationOptions: {
      header: null
    }
  }
});

export default createAppContainer(AppNavigator);
