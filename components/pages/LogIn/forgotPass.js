import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-web";
import closeButton from "../../public/closeButton.png";
import { LogInStyles } from "./loginStyles";

const forgotPass = () => {
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
        </View>

        <Text
          style={{
            fontSize: "28px",
            fontWeight: "500",
            color: "#FFFFFF",
            left: "5%",
            top: "8%",
          }}
        >
          Forgot Your Password?
        </Text>

        <Text
          style={{
            fontSize: "16px",
            fontWeight: "400",
            top: "10%",
            color: "#6B7280",
            left: "5%",
          }}
        >
          We will send you email with instructions. If you use the same email as
          your Google account, you can sign here.
        </Text>

        <View style={[LogInStyles.greyBox, { top: "10%" }]}>
          <TextInput></TextInput>
        </View>

        <View style={[LogInStyles.orangeBox, { top: "63%" }]}>
          <Text
            style={{
              color: "#FFFFFF",
              left: "35%",
              fontSize: "18px",
              fontWeight: "500",
            }}
          >
            Send Code
          </Text>
        </View>
      </View>
    </View>
  );
};

export default forgotPass;
