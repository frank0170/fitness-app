import { Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import "./App.css";

import Home from "./components/pages/Home/HomeContainer";
import HomeIcon from "./components/icons/homeIcon";

import Workouts from "./components/pages/Workouts/WorkoutsContainer";
import WorkoutsIcon from "./components/icons/workoutsIcon";

import Profile from "./components/pages/Profile/ProfileContainer";
import ProfileIcon from "./components/icons/profileIcon";

import Randomizer from "./components/pages/Randomizer/RandomizerContainer";
import RandomizerIcon from "./components/icons/randomizer";

const Tab = createBottomTabNavigator();

export default function App() {
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
        <Tab.Screen name="Workouts" component={Workouts} />
        {/* pus pt development */}
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Randomizer" component={Randomizer} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function makeIconRender(name) {
  return ({ color, size }) => (
    <MaterialCommunityIcons name={name} color={color} size={size} />
  );
}
