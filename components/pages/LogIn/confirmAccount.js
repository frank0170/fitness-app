import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-web";
import closeButton from "../../public/closeButton.png";
import { LogInStyles } from "./loginStyles";

const confirmAccount = () => {
  return (
    <View style={{ backgroundColor: "#111214", height: "100%" }}>
      <View style={{ flexDirection: "column", height: "100%" }}>
        <TouchableOpacity style={{ top: "5%", left: "5%" }}>
          <Image
            source={closeButton}
            style={{ height: "12px", width: "12px" }}
          />
        </TouchableOpacity>

        <Text
          style={{
            fontSize: "28px",
            fontWeight: "500",
            color: "#FFFFFF",
            left: "5%",
            top: "8%",
          }}
        >
          Confirm Account
        </Text>

        <Text
          style={{
            fontSize: "16px",
            fontWeight: "400",
            top: "10%",
            color: "#6B7280",
            alignSelf: "center",
            left: "5%",
          }}
        >
          We may store and send a verification code to this number
        </Text>

        <View style={[LogInStyles.greyBox, { top: "10%" }]}>
          <TextInput></TextInput>
        </View>
      </View>
    </View>
  );
};

export default confirmAccount;
