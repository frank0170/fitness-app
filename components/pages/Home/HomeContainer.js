import { Text, View } from "react-native";
import HomeView from "./HomeView";
import chestImage from "../../public/chest.png";
import backImage from "../../public/back.png";
import shouldersImage from "../../public/shoulders.png";

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

  const sampleData = {
    cards: [
      {
        image: chestImage,
        title: "Massive Upper Body",
        category: "Chest & Shoulders",
        link: "blank",
      },
      {
        image: backImage,
        title: "Back Workout",
        category: "Back & Lats",
        link: "blank",
      },
      {
        image: shouldersImage,
        title: "Shoulder Workout",
        category: "Shoulders",
        link: "blank",
      },
    ],
  };

  return <HomeView person={person} sampleData={sampleData} />;
};

export default HomeContainer;
