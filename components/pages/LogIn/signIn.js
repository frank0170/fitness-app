import React from "react";
import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { LogInStyles } from "./loginStyles";
import col from "../../public/exPhoto/col2.png";
import appleIcon from "../../public/appleIcon.png";
import googleIcon from "../../public/googleIcon.png";
import { ImageBackground } from "react-native";

import { useAuth } from "../../context/loginContext";
import { ScrollView } from "react-native-web";

const SignUp = ({ navigation }) => {
  const handleNewSignUp = () => {
    navigation.navigate("CreateAccount");
  };

  return (
    <ScrollView style={styles.container}>
      <ImageBackground source={col} style={styles.imageBackground}>
        <View style={styles.titleContainer}>
          <Text style={styles.headerTitle}>Your Shape Mentor</Text>
          <Text style={styles.subtitle}>
            One best app for all things fitness
          </Text>
        </View>
      </ImageBackground>

      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.orangeButton} onPress={handleNewSignUp}>
          <Text style={styles.buttonText}>Sign up with email</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.greyButton} disabled>
          <Image source={appleIcon} style={styles.icon} />
          <Text style={[styles.buttonText, { paddingLeft: 10 }]}>
            Sign up with Apple
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.greyButton} disabled>
          <Image source={googleIcon} style={styles.icon} />
          <Text style={[styles.buttonText, { paddingLeft: 10 }]}>
            Sign up with Google
          </Text>
        </TouchableOpacity>

        <Text style={styles.signInText}>
          Already have an account?
          <Text style={styles.signInLink}>Sign in</Text>
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111214",
  },
  imageBackground: {
    height: 500,
    justifyContent: "flex-end",
    paddingBottom: 30,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: "500",
    alignSelf: "center",
    color: "#FFFFFF",
  },
  bottomContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "400",
    color: "#6B7280",
    alignSelf: "center",
    marginTop: 15,
  },
  orangeButton: {
    backgroundColor: "#FF8036",
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
  },
  greyButton: {
    backgroundColor: "#26282C",
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    flex: 1,
  },
  icon: {
    width: 18,
    height: 18,
  },
  signInText: {
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: 30,
    marginBottom: 24,
  },
  signInLink: {
    color: "#FF8036",
    marginLeft: 8,
  },
});

export default SignUp;
