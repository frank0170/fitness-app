import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { CategoryProvider } from "./components/context/categoryContext";
import { ExerciseProvider } from "./components/context/exerciseContext";
import { AuthProvider } from "./components/context/loginContext";
// import "./App.css";

import { GestureHandlerRootView } from "react-native-gesture-handler";

import HomeIcon from "./components/icons/homeIcon";
import Home from "./components/pages/Home/HomeContainer";

import WorkoutsIcon from "./components/icons/workoutsIcon";
import Workouts from "./components/pages/Workouts/WorkoutsNavigation";

import ProfileIcon from "./components/icons/profileIcon";

import RandomizerIcon from "./components/icons/randomizer";
import Randomizer from "./components/pages/Randomizer/RandomizerNavigation";

import confirmAccount from "../fitness-app-Expo-v1.0-release/components/pages/LogIn/confirmAccount";
import forgotPass from "./components/pages/LogIn/forgotPass";
import target from "./components/pages/LogIn/target";
import gender from "./components/pages/LogIn/gender";
import MailSignIn from "./components/pages/LogIn/MailSignIn";
import signIn from "./components/pages/LogIn/signIn";
import createAccount from "./components/pages/LogIn/createAccount";

import ProfilePage from "./components/pages/Profile/ProfilePage";
import EditProfile from "./components/pages/Profile/EditProfile";
import MySubs from "./components/pages/Profile/MySubs";
import AboutUs from "./components/pages/Profile/AboutUs";

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconComponent;

            if (route.name === "Home") {
              iconComponent = <HomeIcon isActive={focused} />;
            } else if (route.name === "Workouts") {
              iconComponent = <WorkoutsIcon isActive={focused} />;
            } else if (route.name === "Randomizer") {
              iconComponent = <RandomizerIcon isActive={focused} />;
            } else if (route.name === "Profile") {
              iconComponent = <ProfileIcon isActive={focused} />;
            }

            return iconComponent;
          },

          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#24262b",
            border: "1px solid #24262b",
          },
        })}
        tabBarOptions={{
          activeTintColor: "#FF8036",
          inactiveTintColor: "#6B7280",
        }}
      >
        {/* pus pt development */}
        <Tab.Screen name="Home" component={AboutUs} />
        <Tab.Screen name="Workouts" component={ProfilePage} />
        <Tab.Screen name="Randomizer" component={EditProfile} />
        <Tab.Screen name="Profile" component={createAccount} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthProvider>
        <CategoryProvider>
          <ExerciseProvider>
            <AppNavigation />
          </ExerciseProvider>
        </CategoryProvider>
      </AuthProvider>
    </GestureHandlerRootView>
  );
}
