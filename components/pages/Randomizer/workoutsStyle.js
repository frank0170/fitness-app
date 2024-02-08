import { StyleSheet } from "react-native";

export const workoutsStyle = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 30,
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: 38,
    letterSpacing: "-0.3px",
    color: "#FFF",
    width: 300,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "160%",
    letterSpacing: "-0.048px",
    color: "#D7D8D9",
    width: 300,
  },

  text: {
    textAlign: "left",
    left: "24px",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "25.6px",
    letterSpacing: "-0.048px",
    color: "#FFF",
    marginTop: 24,
  },

  card: {
    width: 105,
    height: 105,
    borderRadius: 14,
    backgroundColor: "#24262B",
    margin: 5,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  cardSelected: {
    width: 105,
    height: 105,
    borderRadius: 14,
    backgroundColor: "#FF8036",
    margin: 5,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  cardText: {
    textAlign: "center",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "160%",
    letterSpacing: "-0.048px",
    color: "#FFF",
    marginTop: 11,
  },
  card_image: {
    borderRadius: 8,
    width: 80,
    height: 80,
  },
  playButton: {
    backgroundColor: "#FF8036",
    alignSelf: "center",
    padding: 8,
    left: -10,
    marginLeft: "auto",
    width: 38,
    height: 38,
    borderRadius: 11,
  },
  exCard: {
    width: 105,
    height: 55,
    borderRadius: 14,
    backgroundColor: "#1E1F21",
    margin: 5,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  exText1: {
    textAlign: "justify",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "20px",
    letterSpacing: "-0.048px",
    color: "#9EA0A5",
    marginTop: 12,
  },
  exText2: {
    textAlign: "justify",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "25px",
    letterSpacing: "-0.048px",
    color: "#FFF",
    marginTop: 6,
  },
  exText3: {
    textAlign: "justify",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "20px",
    letterSpacing: "-0.048px",
    alignItems: "center",
    color: "#D7D8D9",
    marginTop: 6,
  },
});
