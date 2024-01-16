import { Text, View } from "react-native";
import HomePart1 from "./HomePart1";
import HomePart2 from "./HomePart2";

const HomeView = ({ person, sampleData }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#111214",
      }}
    >
      <HomePart1 person={person} />
      <HomePart2 person={person} sampleData={sampleData} />
    </View>
  );
};

export default HomeView;
