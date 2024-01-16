import { Text, View } from "react-native";
import HomePart1 from "./HomePart1";

const HomeView = ({ person }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#111214",
      }}
    >
      <HomePart1 person={person} />
    </View>
  );
};

export default HomeView;
