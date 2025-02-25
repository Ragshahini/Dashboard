import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Register necessary components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const UserActivityChart = () => {
  const data = {
    labels: ["1 Sep", "2 Sep", "3 Sep", "4 Sep", "5 Sep", "6 Sep"],
    datasets: [
      {
        label: "User Activity",
        data: [400, 800, 600, 1200, 500, 700],
        borderColor: "blue",
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  return <Line data={data} />;
};

export default UserActivityChart;
