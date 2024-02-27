import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-web";
import appleIcon from "../../public/appleIcon.png";
import closeButton from "../../public/closeButton.png";
import googleIcon from "../../public/googleIcon.png";
import line from "../../public/line.png";
import { LogInStyles } from "./loginStyles";

const createAccount = () => {
  return (
    <View style={{ backgroundColor: "#111214", height: "100%" }}>
      <View style={{ flexDirection: "column", height: "100%" }}>
        <View style={{ flexDirection: "row", top: "5%" }}>
          <TouchableOpacity style={{ left: "5%", alignSelf: "center" }}>
            <Image
              source={closeButton}
              style={{ height: "12px", width: "12px" }}
            />
          </TouchableOpacity>

          <Text
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "#FFFFFF",
              left: "30%",
              alignSelf: "center",
            }}
          >
            Create an Account
          </Text>
        </View>

        <TouchableOpacity style={[LogInStyles.greyBox, { top: "12%" }]}>
          {" "}
          <Image
            source={appleIcon}
            style={{
              left: "21%",
              alignSelf: "center",
              height: "18px",
              width: "18px",
            }}
          />
          <Text
            style={{
              color: "#FFFFFF",
              alignSelf: "center",
              left: "26%",
              fontSize: "18px",
              fontWeight: "500",
            }}
          >
            Sign up with Apple
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={[LogInStyles.greyBox, { top: "10%" }]}>
          {" "}
          <Image
            source={googleIcon}
            style={{
              left: "21%",
              alignSelf: "center",
              height: "18px",
              width: "18px",
            }}
          />
          <Text
            style={{
              color: "#FFFFFF",
              alignSelf: "center",
              left: "26%",
              fontSize: "18px",
              fontWeight: "500",
            }}
          >
            Sign up with Google
          </Text>
        </TouchableOpacity>

        <View style={{ flexDirection: "row", top: "15%", left: "10%" }}>
          <Image
            source={line}
            style={{ height: "1px", alignSelf: "center", width: "81px" }}
          />
          <Text
            style={{ color: "#6B7280", fontSize: "14px", fontWeight: "400" }}
          >
            {" "}
            Or sign in with email{" "}
          </Text>
          <Image
            source={line}
            style={{ height: "1px", alignSelf: "center", width: "81px" }}
          />
        </View>

        <View style={[LogInStyles.greyBox, { top: "16%" }]}>
          <TextInput></TextInput>
        </View>

        <View style={[LogInStyles.greyBox, { top: "14%" }]}>
          <TextInput></TextInput>
        </View>

        <View style={[LogInStyles.greyBox, { top: "12%" }]}>
          <TextInput></TextInput>
        </View>

        <TouchableOpacity style={[LogInStyles.orangeBox, { top: "12%" }]}>
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: "18px",
              fontWeight: "500",
              left: "40%",
            }}
          >
            Sign up
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ top: "32%", left: "20%" }}>
          <Text
            style={{ color: "#FFFFFF", fontSize: "16px", fontWeight: "400" }}
          >
            Already have an account?
            <Text style={{ color: "#FF8036" }}> Sign In</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default createAccount;
