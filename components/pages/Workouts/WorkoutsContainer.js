import WorkoutsView from "./WorkoutsView";
import back from "../../public/back.png";

const Workouts = () => {
  const person = {
    name: "Lucian",
    daysOfWeek: [
      { name: "Sun", size: 24 },
      { name: "Mon", size: 35 },
      { name: "Tue", size: 47 },
      { name: "Wed", size: 15 },
      { name: "Thu", size: 31 },
      { name: "Fri", size: 35 },
      { name: "Sat", size: 20 },
    ],
  };

  const exercisesList = [
    {
      image: back,
      status: "Uncompleted",
      name: "Incline Bench",
      time: 30,
    },
    {
      image: undefined,
      status: "Uncompleted",
      name: "Dumbbell Flyes",
      time: 30,
    },
    {
      image: undefined,
      status: "Uncompleted",
      name: "Bench Press",
      time: 30,
    },
    {
      image: undefined,
      status: "Uncompleted",
      name: "Decline Press",
      time: 30,
    },
  ];

  return <WorkoutsView person={person} exercisesList={exercisesList} />;
};

export default Workouts;
