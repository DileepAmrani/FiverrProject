import React from "react";
import { Input, Button, SocialBtn } from "../../Components";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";

class Signup extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <View style={styles.topBox}>
            <Text style={styles.signupText}>Sign Up</Text>
            <Text
              style={styles.loginText}
              onPress={() => this.props.navigation.navigate("Login")}
            >
              Sign In
            </Text>
          </View>

          {/* Signup Form */}

          <View style={styles.form}>
            <Text style={styles.logoText}>DIBBS</Text>
            <Text style={styles.taglineText}>
              Sign Up to score this great deal!{" "}
            </Text>
            <Input placeholder="First & Last Name" />
            <Input placeholder="Enter your Email" />
            <Input
              placeholder="Enter your Password"
              icon="eye-with-line"
              secureTextEntry={true}
            />
            <Text style={{ padding: 10 }}>
              By clicking on option below I agree in the &nbsp;
              <Text
                style={[styles.loginText, { color: "#6f44a3", fontSize: 13 }]}
              >
                Terms of Use
              </Text>
              &nbsp; and have read the &nbsp;
              <Text
                style={[
                  styles.loginText,
                  { color: "#6f44a3", fontSize: 13, marginBottom: 10 }
                ]}
              >
                Privacy Statement
              </Text>
            </Text>
            <Button
              name="SIGN UP"
              onPress={() => this.props.navigation.navigate("Login")}
            />

            <Text
              style={[
                styles.loginText,
                {
                  color: "balck",
                  alignSelf: "center",
                  marginTop: 10,
                  marginBottom: 10
                }
              ]}
            >
              or Connect With
            </Text>

            <View
              style={{
                flex: 1,
                justifyContent: "center",
                flexDirection: "row"
              }}
            >
              <SocialBtn
                color="#3c53c8"
                icon="facebook-with-circle"
                name="Facebook"
              />
              <SocialBtn
                color="#f44336"
                icon="google--with-circle"
                name="Google"
              />
            </View>
          </View>
        </View>
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
    backgroundColor: "#f8f2ff"
  },

  // Signup View and Text Style Start //

  topBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 14
  },
  signupText: {
    fontSize: 18,
    fontWeight: "400"
  },
  loginText: {
    fontSize: 14,
    color: "blue",
    textDecorationColor: "blue",
    textDecorationLine: "underline"
  },

  // Signup Form and View and Text Style Start //

  form: {
    flex: 1,
    justifyContent: "center",
    padding: 10
  },

  logoText: {
    color: "#6f44a3",
    fontSize: 35,
    letterSpacing: 10,
    fontWeight: "900",
    alignSelf: "center"
  },
  taglineText: {
    letterSpacing: 1,
    marginTop: 20,
    alignSelf: "center"
  }
});

export default Signup;
