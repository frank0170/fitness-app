import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, ImageBackground } from "react-native";
import { format } from "date-fns";
import "./homeStyle.js";
import { homeStyles } from "./homeStyle.js";
import CaloriesIcon from "../../icons/caloriesIcon.js";
import CaloriesDaysStat from "../../icons/caloriesDaysStat.js";
import { Dimensions, PixelRatio } from "react-native";
import chestImage from "../../public/chest.png";

const FitnessCard = ({ image, title, category, link }) => {
  return (
    <ImageBackground source={image} style={homeStyles.home_2.imageCard.card}>
      <View style={{ padding: "20px" }}>
        <View style={{ display: "flex", width: "126px", flexWrap: "wrap" }}>
          <Text style={homeStyles.home_2.imageCard.title}> {title}</Text>
        </View>
        <Text style={homeStyles.home_2.imageCard.category}>{category}</Text>
        <TouchableOpacity style={homeStyles.home_2.imageCard.button}>
          <Text style={{ color: "#fff" }}>Start</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const HomePart2 = ({ person, sampleData }) => {
  const [seeAllTrue, setSeeAllTrue] = useState(false);

  const handleSeeAllClick = () => {
    setSeeAllTrue(!seeAllTrue);
  };
  return (
    <View
      style={{
        marginTop: 24,
        backgroundColor: "#111214",
        marginLeft: "24px",

        gap: 16,
      }}
    >
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={homeStyles.home_1.welcome}>Recommended workouts</Text>
        <TouchableOpacity onPress={handleSeeAllClick}>
          <Text style={homeStyles.home_2.seeAll}>See all</Text>
        </TouchableOpacity>{" "}
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          gap: "12px",
        }}
      >
        {seeAllTrue ? (
          sampleData.cards.map((item) => {
            return (
              <FitnessCard
                image={item.image}
                title={item.title}
                category={item.category}
              />
            );
          })
        ) : (
          <FitnessCard
            image={sampleData.cards[0].image}
            title={sampleData.cards[0].title}
            category={sampleData.cards[0].category}
          />
        )}
      </View>
    </View>
  );
};

export default HomePart2;
