import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuth } from "../../context/loginContext";

import CreateAccount from "./createAccount";
import SignIn from "./signIn";
import ConfigureAccount from "./configureAccount.js";
import Profile from "./ProfilePage";
import LogIn from "./LogIn";

const WorkoutsStack = createNativeStackNavigator();

const LoginScreen = () => {
  const [initialRoute, setInitialRoute] = useState("LoginPage");

  const { userData } = useAuth();
  useEffect(() => {
    const checkUserLoggedIn = async () => {
      // Example async check for user data
      if (!userData) {
        setInitialRoute("ProfilePage");
      }
    };

    checkUserLoggedIn();
  }, []);

  return (
    <WorkoutsStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={initialRoute}
    >
      <WorkoutsStack.Screen name="LoginPage" component={SignIn} />
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
