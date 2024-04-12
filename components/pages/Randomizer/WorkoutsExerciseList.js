import React, { useEffect } from "react";
import { Image, Text, View } from "react-native";
import playButton from "../../public/playButton.png";
import timeClock from "../../public/timeClock.png";
import HomePart1 from "../Home/HomePart1.js";
import { workoutsStyle } from "./workoutsStyle.js";
import { ImageBackground } from "react-native";
import back from "../../public/back.png";
import chest from "../../public/chest.png";
import PlayButton from "../../icons/playButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { useExerciseContext } from "../../context/exerciseContext";
import { useAuth } from "../../context/loginContext";
import { TouchableOpacity } from "react-native-gesture-handler";

import { useCategoryContext } from "../../context/categoryContext";

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
    name: "BenchPress",
    foto: "BenchPress",
    time: 30,
  },
  {
    image: undefined,
    status: "Uncompleted",
    name: "Dumbbell Flyes",
    foto: "BenchPress",

    time: 30,
  },
  {
    image: undefined,
    status: "Uncompleted",
    name: "Bench Press",
    foto: "BenchPress",

    time: 30,
  },
  {
    image: undefined,
    status: "Uncompleted",
    name: "Decline Press",
    foto: "BenchPress",
    time: 30,
  },
];

const WorkoutCard = ({ exercise, navigation }) => {
  const { userData } = useAuth();
  const { setExerciseData } = useExerciseContext();
  const handleExercise = (exercise) => {
    setExerciseData(exercise);
    navigation.navigate("ExercisePreviewRandom");
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
        <Image
          source={{
            uri: `https://shape-mentor-prod.fra1.digitaloceanspaces.com/ex-photo/${exercise.photo}.jpg`,
          }}
          style={workoutsStyle?.card_image}
        />
      </View>

      <View style={{ marginLeft: 24, top: -10 }}>
        <Text style={workoutsStyle.exText1}>
          {" "}
          {exercise.status ? "Completed" : "Uncompleted"}
        </Text>
        <Text style={workoutsStyle.exText2}> {exercise.exercise} </Text>
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
  const { categoryData } = useCategoryContext();

  console.log("jypo", categoryData);

  const [exercisesList, setExercisesList] = React.useState([]);

  const sentData = {
    category: categoryData,
  };

  useEffect(() => {
    fetch(
      "https://jellyfish-app-2-7736b.ondigitalocean.app/api/workouts/workouts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sentData),
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setExercisesList(data); // Assuming the data is the array of workouts
      })
      .catch((error) => {
        console.error("There was a problem with your fetch operation:", error);
      });
  }, []); // Empty dependency array means this effect runs once after the initial render

  const person = {
    name: "Guest",
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

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#111214" }}
      edges={["right", "top", "left"]}
    >
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "#111214",
        }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <HomePart1 person={person} />

        <Text> Workouts</Text>

        <Text style={workoutsStyle.text}>Your selected type exercises</Text>
        <View style={{ marginBottom: 24 }} key={exercisesList}>
          {exercisesList.map((exercise) => (
            <WorkoutCard
              key={exercise.exercise + exercise.subCategory}
              exercise={exercise}
              navigation={navigation}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WorkoutsExerciseList;
