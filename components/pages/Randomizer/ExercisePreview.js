import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { ImageBackground } from "react-native";
import playButtonTrans from "../../public/playButton.png";
import { LogInStyles } from "../LogIn/loginStyles";
import stopwatchTimer from "../../public/timeClock.png";
import { useExerciseContext } from "../../context/exerciseContext";
import back from "../../public/back.png";
import StopWatch from "../../icons/stopWatch";
import PlayButton from "../../icons/playButtonBig";
import { workoutsStyle } from "./workoutsStyle.js";

const ExercisePreview = () => {
  const { exerciseData } = useExerciseContext();

  const exercise = {
    image: back,
    status: "Uncompleted",
    name: "Incline Bench",
    time: 30,
    description:
      "In this short tutorial, we'll guide you through the basics of performing a bench press, a fundamental exercise for building chest, shoulder, and triceps strength.",
  };

  return (
    <View style={{ flexDirection: "column" }}>
      <View style={{ width: "100%", height: 450, flexDirection: "column" }}>
        <ImageBackground source={exercise?.image} style={{ height: "100%" }}>
          <View
            style={{
              flex: 1,
              justifyContent: "center", // Center vertically in the ImageBackground
              alignItems: "center", // Center horizontally in the ImageBackground
            }}
          >
            <TouchableOpacity
              style={workoutsStyle.previewButton}
              onPress={() => handleExercise(exercise)}
            >
              <PlayButton />
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: "flex-end",
              alignItems: "center",
              paddingBottom: 20,
            }}
          >
            <Text
              style={{
                fontWeight: 700,
                fontSize: 36,
                alignSelf: "center",
                color: "#FFFFFF",
              }}
            >
              {exercise?.name}
            </Text>
            <Text
              style={{
                fontWeight: 500,
                fontSize: 18,
                alignSelf: "center",
                color: "#FFFFFF",
              }}
            >
              With {exercise?.trainer} Trainer
            </Text>
          </View>
        </ImageBackground>
      </View>

      <View
        style={{
          flexDirection: "column",
          backgroundColor: "#24262B",
          width: "100%",
          height: "100%",
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: "#FFFFFF",
            alignSelf: "center",
            top: 32,
            paddingBottom: 120,
          }}
        >
          {exercise?.description}
        </Text>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#FF8036",
            borderRadius: 12,
            borderWidth: 1,
            borderColor: "#37383C",
            height: 54,
            paddingHorizontal: 24, // Add some horizontal padding if needed
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                fontWeight: "600",
                fontSize: 20,
                color: "#FFFFFF",
                marginRight: 8, // Add some space between text and SVG if needed
              }}
            >
              Start Workout
            </Text>
            <StopWatch />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ExercisePreview;
