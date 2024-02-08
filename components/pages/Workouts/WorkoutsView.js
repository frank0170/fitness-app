import { ScrollView } from "react-native-gesture-handler";
import WorkoutsMainPage from "./WorkoutsMainPage";
import WorkoutsExerciseList from "./WorkoutsExerciseList";
import WorkoutExerciseTab from "./WorkoutExerciseTab";
import ExercisePreview from "./ExercisePreview";

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
      <WorkoutsMainPage />

      {/* <WorkoutsExerciseList person={person} exercisesList={exercisesList} /> */}
      {/* <WorkoutExerciseTab exercisesList={exercisesList} /> */}
      {/* <ExercisePreview exercise={exercisesList[0]}/> */}
      {/* Cand termini cu Exercise List, ii dai comment out, cum ii MainPage si scoti din comment pe WorkoutExerciseTab */}
    </ScrollView>
  );
};

export default WorkoutsView;
