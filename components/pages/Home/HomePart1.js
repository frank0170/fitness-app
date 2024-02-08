import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { format } from "date-fns";
import "./homeStyle.js";
import { homeStyles } from "./homeStyle.js";
import CaloriesIcon from "../../icons/caloriesIcon.js";
import CaloriesDaysStat from "../../icons/caloriesDaysStat.js";

const HomePart1 = ({ person }) => {
  const [welcomePart, setWelcomePart] = useState();

  const now = new Date();
  const currentHour = now.getHours();
  const formattedDate = format(now, "EEE, dd MMMM");

  useEffect(() => {
    if (currentHour >= 5 && currentHour < 12) {
      setWelcomePart("Good Morning");
    } else if (currentHour >= 12 && currentHour < 18) {
      setWelcomePart("Good Day");
    } else {
      setWelcomePart("Good Evening");
    }
  }, []);

  const handleIsActive = (day) => {
    const currentDay = formattedDate.slice(0, 3);
    return day === currentDay;
  };

  return (
    <View
      style={{
        backgroundColor: "#111214",
        marginLeft: "24px",
        marginTop: "9px",
      }}
    >
      <Text style={homeStyles.home_1.date}>{formattedDate}</Text>
      <Text
        style={homeStyles.home_1.welcome}
      >{`${welcomePart}, ${person.name}!`}</Text>
      <View
        style={{
          backgroundColor: "#24262b",
          borderRadius: "12px",
          border: "1px solid #37383C",
          marginTop: "25px",
          marginRight: "24px",
          padding: "14px",
        }}
      >
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: "12px",
            }}
          >
            <CaloriesIcon />
            <Text style={homeStyles.home_1.caloriesTitle}> Calories</Text>
          </View>
          <Text style={homeStyles.home_1.caloriesDates}> Week</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          {person.daysOfWeek.map((day) => {
            return (
              <View>
                <View style={{ display: "flex", justifyContent: "flex-end" }}>
                  {handleIsActive(day.name) ? (
                    <CaloriesDaysStat size={day.size} isActive={true} />
                  ) : (
                    <CaloriesDaysStat size={day.size} isActive={false} />
                  )}
                </View>
                <Text style={homeStyles.home_1.caloriesDates}>{day.name}</Text>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default HomePart1;
