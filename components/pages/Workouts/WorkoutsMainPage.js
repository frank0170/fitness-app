import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { workoutsStyle } from "./workoutsStyle.js";
import WorkoutsGrid from "../../common/workoutsGrid.js";

const WorkoutsMainPage = () => {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        margin: 16,
      }}
    >
      <Text style={workoutsStyle.title}>What do you want to train today?</Text>

      <Text style={workoutsStyle.subtitle}>
        You can select only one muscle group.
      </Text>

      <WorkoutsGrid />
    </View>
  );
};

export default WorkoutsMainPage;
