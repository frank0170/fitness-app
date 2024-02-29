import { StyleSheet } from "react-native";

export const LogInStyles = StyleSheet.create({
  orangeBox: {
    backgroundColor: "#FF8036",
    borderRadius: 12, // px is assumed, so it's just a number
    borderWidth: 1, // borderWidth instead of border
    borderColor: "#37383C", // borderColor for the color part of border
    marginTop: 24, // px is assumed, so it's just a number
    height: 54, // px is assumed, so it's just a number
    marginRight: 24, // px is assumed, so it's just a number
    marginLeft: 24, // px is assumed, so it's just a number
    padding: 14, // px is assumed, so it's just a number
    flexDirection: "row", // same as CSS
  },
  greyBox: {
    backgroundColor: "#37383C",
    borderRadius: 12, // px is assumed, so it's just a number
    borderWidth: 1, // borderWidth instead of border
    borderColor: "#37383C", // borderColor for the color part of border
    marginTop: 24, // px is assumed, so it's just a number
    height: 54, // px is assumed, so it's just a number
    marginRight: 24, // px is assumed, so it's just a number
    marginLeft: 24, // px is assumed, so it's just a number
    padding: 14, // px is assumed, so it's just a number
    flexDirection: "row", // same as CSS
  },
});
