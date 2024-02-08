import * as React from "react";
import { Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WorkoutsMainPage from "./WorkoutsMainPage";
import WorkoutsExerciseList from "./WorkoutsExerciseList";

const WorkoutsStack = createNativeStackNavigator();

const WorkoutsScreen = () => {
  return (
    <WorkoutsStack.Navigator screenOptions={{ headerShown: false }}>
      <WorkoutsStack.Screen name="MainPage" component={WorkoutsMainPage} />
      <WorkoutsStack.Screen
        name="ExerciseList"
        component={WorkoutsExerciseList}
      />
    </WorkoutsStack.Navigator>
  );
};

export default WorkoutsScreen;