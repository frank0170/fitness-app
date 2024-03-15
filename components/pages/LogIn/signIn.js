import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { LogInStyles } from "./loginStyles";
import col from "../../public/exPhoto/col.png";
import appleIcon from "../../public/appleIcon.png";
import googleIcon from "../../public/googleIcon.png";
import { ImageBackground } from "react-native";

import { useAuth } from "../../context/loginContext";

const SignUp = () => {
  const { isAuthenticated } = useAuth();
  return (
    <View style={{ flexDirection: "column" }}>
      <View style={{ backgroundColor: "#111214" }}>
        <ImageBackground source={col} style={{ height: 400 }} />
        <Text
          style={{
            fontSize: 30,
            fontWeight: "500",
            alignSelf: "center",
            color: "#FFFFFF",
            top: "-30px",
          }}
        >
          Your Shape Mentor
        </Text>
      </View>

      <View style={{ backgroundColor: "#111214", height: "100%" }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "400",
            color: "#6B7280",
            alignSelf: "center",
            top: "-15px",
          }}
        >
          One best app for all things fitness
        </Text>

        <TouchableOpacity style={LogInStyles.orangeBox}>
          <Text
            style={{
              color: "#FFFFFF",
              alignSelf: "center",
              left: "30%",
              fontSize: 18,
              fontWeight: "500",
            }}
          >
            Sign up with Mail
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={LogInStyles.greyBox} disabled>
          <Image
            source={appleIcon}
            style={{
              left: "21%",
              alignSelf: "center",
              height: 18,
              width: 18,
            }}
          />
          <Text
            style={{
              color: "#FFFFFF",
              alignSelf: "center",
              left: "26%",
              fontSize: 18,
              fontWeight: "500",
            }}
          >
            Sign up with Apple
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={LogInStyles.greyBox} disabled>
          <Image
            source={googleIcon}
            style={{
              left: "21%",
              alignSelf: "center",
              height: 18,
              width: 18,
            }}
          />
          <Text
            style={{
              color: "#FFFFFF",
              alignSelf: "center",
              left: "26%",
              fontSize: 18,
              fontWeight: "500",
            }}
          >
            Sign up with Google
          </Text>
        </TouchableOpacity>

        <Text style={{ left: "25%", top: 60, color: "#FFFFFF" }}>
          Already have an account?
          <Text style={{ color: "#FF8036" }}> Sign in</Text>
        </Text>
      </View>
    </View>
  );
};

export default SignUp;
