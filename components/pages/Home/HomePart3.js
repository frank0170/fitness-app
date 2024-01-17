import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  StyleSheet,
} from "react-native";
import { format } from "date-fns";
import "./homeStyle.js";
import { homeStyles } from "./homeStyle.js";
import CaloriesIcon from "../../icons/caloriesIcon.js";
import CaloriesDaysStat from "../../icons/caloriesDaysStat.js";
import { Dimensions, PixelRatio } from "react-native";
import chestImage from "../../public/chest.png";

const WorkoutCard = ({ image, title, category, link, all }) => {
  const cardStyle = homeStyles.home_3.workoutCard.card;

  return (
    <ImageBackground source={image} style={cardStyle}>
      <View style={{ padding: 20, alignItems: "flex-end" }}>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "flex-end",
          }}
        >
          <Text style={homeStyles.home_2.imageCard.title}>{title}</Text>
        </View>
        <Text style={homeStyles.home_2.imageCard.category}>{category}</Text>
      </View>
    </ImageBackground>
  );
};

const CategoryCard = ({ category, selectedCategory, setSelectedCategory }) => {
  const cardStyle =
    selectedCategory === category
      ? homeStyles.home_3.categoryCard.selected
      : homeStyles.home_3.categoryCard.notSelected;

  const textStyle =
    selectedCategory === category
      ? homeStyles.home_3.categoryCard.selectedText
      : homeStyles.home_3.categoryCard.notSelectedText;

  console.log("selectedCategory:", selectedCategory);
  console.log("category:", category);
  console.log("textStyle:", textStyle);

  return (
    <TouchableOpacity
      style={cardStyle}
      onPress={() => setSelectedCategory(category)}
    >
      <Text style={textStyle}>{category}</Text>
    </TouchableOpacity>
  );
};

const HomePart2 = ({ person, sampleData }) => {
  const categories = [
    "All type",
    "Chest",
    "Cardio",
    "Lower",
    "Back",
    "Shoulders",
    "Legs",
  ];

  const [selectedCategory, setSelectedCategory] = useState("All type");

  const workoutsStyle = homeStyles.home_2.workoutsStyle.seeAllOff;

  const seeAllTextStyle = homeStyles.home_2.seeAllTextOff;
  return (
    <View style={workoutsStyle}>
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={homeStyles.home_1.welcome}>Choose your workout</Text>
        <TouchableOpacity>
          <Text style={seeAllTextStyle}>Select type</Text>
        </TouchableOpacity>{" "}
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        {categories.map((item) => (
          <CategoryCard
            key={item.id} // Don't forget to add a unique key prop for each item
            category={item}
            setSelectedCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
          />
        ))}
      </ScrollView>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        {sampleData.workouts.map((item) => (
          <WorkoutCard
            key={item.id} // Don't forget to add a unique key prop for each item
            image={item.image}
            title={item.name}
            category={item.category}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default HomePart2;
