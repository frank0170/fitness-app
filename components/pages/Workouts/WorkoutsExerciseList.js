import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import playButton from "../../public/playButton.png";
import timeClock from "../../public/timeClock.png";
import HomePart1 from "../Home/HomePart1.js";
import { workoutsStyle } from "./workoutsStyle.js";
import { ImageBackground } from "react-native-web";
import back from "../../public/back.png";
import chest from "../../public/chest.png";
import PlayButton from "../../icons/playButton";

import { useExerciseContext } from "../../context/exerciseContext";

// exercise ii un object ce are {
//     image: ...
//     status: ...
//     name: ...
//     time: ...
// }

const exercise = [
  {
    image: back,
    status: "Uncompleted",
    name: "Incline Bench",
    time: 30,
  },
  {
    image: undefined,
    status: "Uncompleted",
    name: "Dumbbell Flyes",
    time: 30,
  },
  {
    image: undefined,
    status: "Uncompleted",
    name: "Bench Press",
    time: 30,
  },
  {
    image: undefined,
    status: "Uncompleted",
    name: "Decline Press",
    time: 30,
  },
];

const WorkoutCard = ({ exercise, navigation }) => {
  const { exerciseData, setExerciseData } = useExerciseContext();

  const handleExercise = (exercise) => {
    setExerciseData(exercise);
    navigation.navigate("ExercisePreview");
  };
  return (
    <View
      style={{
        backgroundColor: "#24262b",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#37383C",
        marginTop: 24,
        height: 108,
        marginRight: 24,
        marginLeft: 24,
        padding: 14,
        flexDirection: "row",
      }}
    >
      <View>
        <Image style={workoutsStyle.card_image} source={exercise.image} />
      </View>

      <View style={{ marginLeft: 24, top: -10 }}>
        <Text style={workoutsStyle.exText1}> {exercise.status}</Text>
        <Text style={workoutsStyle.exText2}> {exercise.name} </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            style={{ height: 16, width: 16, marginTop: 6, marginRight: 4 }}
            source={timeClock}
          />
          <Text style={workoutsStyle.exText3}>{exercise.time} sec</Text>
        </View>
      </View>

      <TouchableOpacity
        style={workoutsStyle.playButton}
        onPress={() => handleExercise(exercise)}
      >
        <PlayButton />
      </TouchableOpacity>
    </View>
  );
};

const WorkoutsExerciseList = ({ navigation }) => {
  const person = {
    name: "Lucian",
    daysOfWeek: [
      { name: "Sun", size: 24 },
      { name: "Mon", size: 35 },
      { name: "Tue", size: 47 },
      { name: "Wed", size: 15 },
      { name: "Thu", size: 31 },
      { name: "Fri", size: 35 },
      { name: "Sat", size: 20 },
    ],
  };

  const exercisesList = [
    {
      image: back,
      status: "Uncompleted",
      name: "Incline Bench",
      time: 30,
    },
    {
      image: chest,
      status: "Uncompleted",
      name: "Dumbbell Flyes",
      time: 30,
    },
    {
      image: undefined,
      status: "Uncompleted",
      name: "Bench Press",
      time: 30,
    },
    {
      image: undefined,
      status: "Uncompleted",
      name: "Decline Press",
      time: 30,
    },
  ];
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#111214",
      }}
    >
      <HomePart1 person={person} />
      <View>
        <Text style={workoutsStyle.text}>Your selected type exercises</Text>

        <View>
          {exercisesList.map((exercise) => (
            <WorkoutCard exercise={exercise} navigation={navigation} />
          ))}
        </View>
      </View>
    </View>
  );
};

export default WorkoutsExerciseList;
