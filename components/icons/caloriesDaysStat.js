import React from "react";

const CaloriesDaysStat = ({ size }) => {
  return (
    <svg
      width="30"
      height="35"
      viewBox="0 0 30 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="30" height={size} rx="6" fill="#111214" />
    </svg>
  );
};

export default CaloriesDaysStat;
