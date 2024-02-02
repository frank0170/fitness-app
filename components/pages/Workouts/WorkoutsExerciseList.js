import React, { useState, useEffect } from "react";
import { Image, Text, View } from "react-native";
import { workoutsStyle } from "./workoutsStyle.js";
import { ScrollView } from "react-native-gesture-handler";
import HomePart1 from "../Home/HomePart1.js";
import { TouchableOpacity } from "react-native";

// exercise ii un object ce are {
//     image: ...
//     status: ...
//     name: ...
//     time: ...
// }
const WorkoutCard = ({ exercise }) => {
  return (
    <View>
      {/* // astia ii cardul tot */}

      <View>
        <Image />
        <View>
          <Text>{exercise.status}</Text>
          <Text> ... </Text>
          <Text> ... </Text>
        </View>
      </View>

      <TouchableOpacity>
        {/* // asta ii butonul portocaliu cu play */}
      </TouchableOpacity>
    </View>
  );
};
const WorkoutsExerciseList = ({ exercisesList }) => {
  return (
    <View>
      <HomePart1 person={person} />
      <View>
        <Text>Your selected type of workouts</Text>
        <View>
          {/* {exercisesList.map(exercise =< {
            return ( ... )
        })..} */}
        </View>
      </View>
    </View>
  );
};

export default WorkoutsExerciseList;
