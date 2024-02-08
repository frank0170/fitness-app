import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { workoutsStyle } from "./workoutsStyle.js";
import WorkoutsGrid from "../../common/workoutsGrid.js";

const RandomizerMainPage = () => {
  const [selectedItemsArray, setSelectedItemsArray] = useState([]);

  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 60,
      }}
    >
      <Text style={workoutsStyle.title}>What do you want to train today?</Text>

      <Text style={workoutsStyle.subtitle}>
        You can select 2-3 muscle groups.
      </Text>

      <WorkoutsGrid
        multipleSelection={true}
        {...{ selectedItemsArray, setSelectedItemsArray }}
      />
    </View>
  );
};

export default RandomizerMainPage;
