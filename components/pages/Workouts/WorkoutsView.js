import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import WorkoutsMainPage from "./WorkoutsMainPage";

const WorkoutsView = () => {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#111214",
      }}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      <WorkoutsMainPage />
    </ScrollView>
  );
};

export default WorkoutsView;
