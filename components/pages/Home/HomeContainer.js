import { Text, View } from "react-native";
import HomeView from "./HomeView";

const HomeContainer = () => {
  const person = {
    name: "Lucian",
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

  return <HomeView person={person} />;
};

export default HomeContainer;
