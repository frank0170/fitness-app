import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { ImageBackground } from "react-native-web";
import playButtonTrans from "../../public/playButton.png";
import { LogInStyles } from "../LogIn/loginStyles";
import stopwatchTimer from "../../public/timeClock.png";
import { useExerciseContext } from "../../context/exerciseContext";

const ExercisePreview = () => {
  const { exerciseData } = useExerciseContext();

  const exercise = exerciseData;

  return (
    <View style={{ flexDirection: "column" }}>
      <View style={{ width: "100%", height: "450px", flexDirection: "column" }}>
        <ImageBackground source={exercise?.image} style={{ height: "100%" }}>
          <Image
            source={playButtonTrans}
            style={{
              alignSelf: "center",
              top: "225px",
              height: "72px",
              width: "72px",
            }}
          />
          <Text
            style={{
              fontWeight: "700",
              fontSize: "36",
              alignSelf: "center",
              color: "#FFFFFF",
              top: "300px",
            }}
          >
            {exercise?.name}
          </Text>
          <Text
            style={{
              fontWeight: "500",
              fontSize: "18",
              alignSelf: "center",
              color: "#FFFFFF",
              top: "300px",
            }}
          >
            With {exercise?.trainer} Trainer
          </Text>
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
            fontSize: "16px",
            color: "#FFFFFF",
            alignSelf: "center",
            top: "32px",
          }}
        >
          {exercise?.description}
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: "#FF8036",
            borderRadius: "12px",
            border: "1px solid #37383C",
            marginTop: "24px",
            height: "54px",
            marginRight: "24px",
            marginLeft: "24px",
            padding: "14px",
            flexDirection: "row",
            top: "210px",
          }}
        >
          <Text
            style={{
              fontWeight: "600",
              fontSize: "20px",
              color: "#FFFFFF",
              left: "70px",
              marginTop: "-4px",
            }}
          >
            Start Workout
            <Image
              source={stopwatchTimer}
              style={{
                alignSelf: "center",
                left: "20px",
                top: "4px",
                width: "24px",
                height: "24px",
              }}
            />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ExercisePreview;
