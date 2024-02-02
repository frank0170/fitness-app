import { ScrollView } from "react-native-gesture-handler";
import WorkoutsMainPage from "./WorkoutsMainPage";
import WorkoutsExerciseList from "./WorkoutsExerciseList";
import WorkoutExerciseTab from "./WorkoutExerciseTab";

const WorkoutsView = ({ person, exercisesList }) => {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#111214",
      }}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      {/* <WorkoutsMainPage /> */}
      <WorkoutsExerciseList person={person} exercisesList={exercisesList} />
      {/* <WorkoutExerciseTab exercisesList={exercisesList} /> */}

      {/* Cand termini cu Exercise List, ii dai comment out, cum ii MainPage si scoti din comment pe WorkoutExerciseTab */}
    </ScrollView>
  );
};

export default WorkoutsView;
