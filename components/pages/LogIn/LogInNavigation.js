import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuth } from "../../context/loginContext";

import CreateAccount from "./createAccount.js";
import SignIn from "./signIn";
import ConfigureAccount from "./ConfigureAccount.js";
import Profile from "./ProfilePage";
import LogIn from "./LogIn";

const WorkoutsStack = createNativeStackNavigator();

const LoginScreen = () => {
  return (
    <WorkoutsStack.Navigator screenOptions={{ headerShown: false }}>
      <WorkoutsStack.Screen name="LoginPage" component={SignIn} />
      <WorkoutsStack.Screen name="LoginAccount" component={LogIn} />

      <WorkoutsStack.Screen name="CreateAccount" component={CreateAccount} />
      <WorkoutsStack.Screen
        name="ConfigureAccount"
        component={ConfigureAccount}
      />
      <WorkoutsStack.Screen name="ProfilePage" component={Profile} />
    </WorkoutsStack.Navigator>
  );
};

export default LoginScreen;
