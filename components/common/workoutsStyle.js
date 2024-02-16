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
    marginTop: 12,
    marginBottom: 37,
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
  startButton: {
    width: 305,
    height: 30,
    borderRadius: 4,
    backgroundColor: "#FF8036",
    marginTop: 24,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
