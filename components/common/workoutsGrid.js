import React from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
import { workoutsStyle } from "./workoutsStyle.js";
import {
  ChestIcon,
  ShouldersIcon,
  BackIcon,
  CardioIcon,
  LegsIcon,
  ArmsIcon,
  StretchingIcon,
  AbsIcon,
} from "../icons/workoutGridIcons.js";
import { useCategoryContext } from "../context/categoryContext.js";

const WorkoutItem = ({
  icon,
  iconActive,
  text,
  onPress,
  selected,
  multipleSelection,
}) => {
  const selectedItems = multipleSelection ? [selected[0]] : selected;
  const isSelected = selectedItems.includes(text);

  const cardStyle = isSelected
    ? workoutsStyle.cardSelected
    : workoutsStyle.card;

  return (
    <TouchableOpacity style={cardStyle} onPress={onPress}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {isSelected ? iconActive : icon}
      </View>
      <Text style={workoutsStyle.cardText}>{text}</Text>
    </TouchableOpacity>
  );
};

const WorkoutsGrid = ({
  multipleSelection,
  selectedItemsArray,
  setSelectedItemsArray,
  navigation,
}) => {
  const isActive = selectedItemsArray;

  const { categoryData, setCategoryData } = useCategoryContext();

  const handleActive = (item) => {
    if (multipleSelection) {
      setSelectedItemsArray((prevItems) => {
        if (prevItems.includes(item)) {
          return prevItems.filter((prevItem) => prevItem !== item);
        } else {
          return [...prevItems, item];
        }
      });
    } else {
      setSelectedItemsArray((prevItems) => {
        if (prevItems.includes(item)) {
          return prevItems.filter((prevItem) => prevItem !== item);
        } else {
          return [item];
        }
      });
    }
  };

  const handleExerciseList = () => {
    setCategoryData(selectedItemsArray);
    navigation.navigate("ExerciseList");
  };

  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <WorkoutItem
          icon={<ChestIcon />}
          iconActive={<ChestIcon isActive />}
          text={"Chest"}
          onPress={() => handleActive("Chest")}
          selected={isActive}
        />
        <WorkoutItem
          icon={<ShouldersIcon />}
          iconActive={<ShouldersIcon isActive />}
          text={"Shoulders"}
          onPress={() => handleActive("Shoulders")}
          selected={isActive}
        />
        <WorkoutItem
          icon={<BackIcon />}
          iconActive={<BackIcon isActive />}
          text={"Back"}
          onPress={() => handleActive("Back")}
          selected={isActive}
        />
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <WorkoutItem
          icon={<CardioIcon />}
          iconActive={<CardioIcon isActive />}
          text={"Cardio"}
          onPress={() => handleActive("Cardio")}
          selected={isActive}
        />
        <WorkoutItem
          icon={<LegsIcon />}
          iconActive={<LegsIcon isActive />}
          text={"Legs"}
          onPress={() => handleActive("Legs")}
          selected={isActive}
        />
        <WorkoutItem
          icon={<ArmsIcon />}
          iconActive={<ArmsIcon isActive />}
          text={"Arms"}
          onPress={() => handleActive("Arms")}
          selected={isActive}
        />
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <WorkoutItem
          icon={<StretchingIcon />}
          iconActive={<StretchingIcon isActive />}
          text={"Stretching"}
          onPress={() => handleActive("Stretching")}
          selected={isActive}
        />
        <WorkoutItem
          icon={<AbsIcon />}
          iconActive={<AbsIcon isActive />}
          text={"Abs"}
          onPress={() => handleActive("Abs")}
          selected={isActive}
        />
      </View>

      <View
        style={{
          paddingTop: 52, // Take up all available space
          flexDirection: "column",
          justifyContent: "center", // Center children vertically in the container
          alignItems: "center", // Center children horizontally in the container
        }}
      >
        {selectedItemsArray.length > 0 && (
          <TouchableOpacity
            style={workoutsStyle.startButton}
            onPress={handleExerciseList}
          >
            <Text style={{ color: "white" }}>See available workouts</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default WorkoutsGrid;
