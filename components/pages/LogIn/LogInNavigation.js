import * as React from "react";
import { Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import WorkoutsMainPage from "./WorkoutsMainPage";
// import WorkoutsExerciseList from "./WorkoutsExerciseList";
// import ExercisePreview from "./ExercisePreview";

import CreateAccount from "./createAccount";
import SignIn from "./signIn";
import ConfigureAccount from "./configureAccount.js";
import Profile from "./ProfilePage";

// import { VideoPlayer } from "../../common/videoElement";

const WorkoutsStack = createNativeStackNavigator();

const LoginScreen = () => {
  return (
    <WorkoutsStack.Navigator screenOptions={{ headerShown: false }}>
      <WorkoutsStack.Screen name="LoginPage" component={SignIn} />
      <WorkoutsStack.Screen name="CreateAccount" component={CreateAccount} />
      <WorkoutsStack.Screen
        name="ConfigureAccount"
        component={ConfigureAccount}
      />
      <WorkoutsStack.Screen name="ProfilePage" component={Profile} />

      {/* <WorkoutsStack.Screen name="VideoPlayer" component={VideoPlayer} /> */}
    </WorkoutsStack.Navigator>
  );
};

export default LoginScreen;
