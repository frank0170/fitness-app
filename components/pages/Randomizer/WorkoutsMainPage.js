import React, { useState, useEffect } from "react";
import { Text, View, Button } from "react-native";
import { workoutsStyle } from "./workoutsStyle.js";
import WorkoutsGrid from "../../common/workoutsGrid.js";

const WorkoutsMainPage = ({ navigation }) => {
  const [selectedItemsArray, setSelectedItemsArray] = useState([]);

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#111214",
      }}
    >
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          margin: 16,
        }}
      >
        <Text style={workoutsStyle.title}>
          What do you want to train today?
        </Text>

        <Text style={workoutsStyle.subtitle}>
          You can select 2-3 muscle groups.
        </Text>

        <WorkoutsGrid
          multipleSelection={true}
          navigation={navigation}
          {...{ selectedItemsArray, setSelectedItemsArray }}
        />
      </View>
    </View>
  );
};

export default WorkoutsMainPage;
