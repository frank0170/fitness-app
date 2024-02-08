import { ScrollView } from "react-native-gesture-handler";
import RandomizerMainPage from "./RandomizerMainPage";

const RandomizerView = ({ person, exercisesList }) => {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#111214",
      }}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      <RandomizerMainPage />
    </ScrollView>
  );
};

export default RandomizerView;
