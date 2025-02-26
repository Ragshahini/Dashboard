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
        borderColor: "#17a2b8", // Using the #17a2b8 color
        borderWidth: 3,
        fill: false,
        pointRadius: 5, // Adding more visible data points
        pointBackgroundColor: "#17a2b8", // Point color matching the line color
        tension: 0.4, // Smoother line
        hoverBackgroundColor: "#17a2b8", // Highlighting color when hovering over points
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allow resizing for smaller charts
    animation: {
      duration: 1500, // Animation duration for better effect
      easing: "easeInOutQuad", // Smooth animation easing
    },
    scales: {
      x: {
        grid: {
          display: false, // Hides x-axis grid for a cleaner look
        },
      },
      y: {
        grid: {
          color: "#e0e0e0", // Light grid lines for better contrast
        },
        ticks: {
          beginAtZero: true, // Ensures the y-axis starts at zero
        },
      },
    },
    plugins: {
      tooltip: {
        backgroundColor: "#17a2b8", // Tooltip background color
        titleColor: "#fff", // Tooltip title color
        bodyColor: "#fff", // Tooltip body color
        borderColor: "#17a2b8", // Border color for tooltips
        borderWidth: 1,
      },
    },
  };

  return (
    <div style={{ width: "60%", height: "300px", margin: "0 auto" }}> {/* Reduced size and centered */}
      <Line data={data} options={options} />
    </div>
  );
};

export default UserActivityChart;
