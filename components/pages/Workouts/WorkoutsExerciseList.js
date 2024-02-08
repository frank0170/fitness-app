import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import playButton from "../../public/playButton.png";
import timeClock from "../../public/timeClock.png";
import HomePart1 from "../Home/HomePart1.js";
import { workoutsStyle } from "./workoutsStyle.js";
import { ImageBackground } from "react-native-web";

// exercise ii un object ce are {
//     image: ...
//     status: ...
//     name: ...
//     time: ...
// }

const WorkoutCard = ({ exercise }) => {
  return (
    <View style={{
      backgroundColor: "#24262b",
      borderRadius: "12px",
      border: "1px solid #37383C",
      marginTop: "24px",
      height:"108px",
      marginRight: "24px",
      marginLeft:"24px",
      padding: "14px",
      flexDirection:"row",
    }}>
      
      <View>
        <Image style={workoutsStyle.card_image} source={exercise.image}/>
      </View>

      <View style={{ marginLeft: "24px", top: "-10px"}}>
        <Text style={workoutsStyle.exText1}> {exercise.status}</Text>
        <Text style={workoutsStyle.exText2}> {exercise.name} </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image style={{ height: 16, width: 16, marginTop: 6}} source={timeClock} />
          <Text style={workoutsStyle.exText3}> {exercise.time} sec</Text>
        </View>
      </View>

      <TouchableOpacity style={workoutsStyle.playButton}>
        <Image source={playButton}/>
      </TouchableOpacity>
    </View>
  );
};

const WorkoutsExerciseList = ({ person, exercisesList }) => {
  return (
    <View>
      <HomePart1 person={person} />
      <View>
        <Text style={workoutsStyle.text}>Your selected type exercises</Text>
        
        <View>
          {exercisesList.map((exercise) => (
            <WorkoutCard exercise ={exercise}/>
            ))}
        </View>
      </View>
    </View>
  );
};

export default WorkoutsExerciseList;
