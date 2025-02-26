import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const UserActivityChart = () => {
  const data = {
    labels: ["1 Sep", "2 Sep", "3 Sep", "4 Sep", "5 Sep", "6 Sep"],
    datasets: [
      {
        label: "", 
        data: [400, 800, 600, 1200, 500, 700],
        borderColor: "#17a2b8", 
        borderWidth: 3,
        fill: false,
        pointRadius: 5, 
        pointBackgroundColor: "#17a2b8", 
        tension: 0.4, 
        hoverBackgroundColor: "#17a2b8", 
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, 
    animation: {
      duration: 1500, 
      easing: "easeInOutQuad",
    },
    scales: {
      x: {
        grid: {
          display: false, 
        },
      },
      y: {
        grid: {
          color: "#e0e0e0", 
        },
        ticks: {
          beginAtZero: true, 
        },
      },
    },
    plugins: {
      tooltip: {
        backgroundColor: "#17a2b8", 
        titleColor: "#fff",
        bodyColor: "#fff",
        borderColor: "#17a2b8", 
        borderWidth: 1,
      },
      legend: {
        display: false, 
      },
    },
  };

  return (
    <div style={{ width: "60%", height: "300px", margin: "0 auto" }}> 
      <Line data={data} options={options} />
    </div>
  );
};

export default UserActivityChart;
