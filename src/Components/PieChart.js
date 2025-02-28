import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { motion } from "framer-motion"; 

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const totalUsers = 1051; 

  const data = {
    labels: ["Staff", "Students", "Other"],
    datasets: [
      {
        data: [(400 / totalUsers) * 100, (400 / totalUsers) * 100, (251 / totalUsers) * 100],
        backgroundColor: [
          "rgba(59, 130, 246, 0.8)",
          "rgba(96, 165, 250, 0.8)", 
          "rgba(23, 162, 184, 0.8)", 
        ],
        hoverBackgroundColor: [
          "rgba(59, 130, 246, 1)", 
          "rgba(96, 165, 250, 1)", 
          "rgba(23, 162, 184, 1)"
        ],
        borderColor: "#fff",
        borderWidth: 3,
        hoverOffset: 10,
        cutout: "50%",
      },
    ],
  };

  const options = {
    responsive: true,
    animation: {
      animateRotate: true,
      animateScale: true,
      duration: 2000,
      easing: "easeInOutQuart",
    },
    plugins: {
      tooltip: {
        backgroundColor: "#333",
        titleColor: "#fff",
        bodyColor: "#ddd",
        borderWidth: 1,
        borderColor: "#17a2b8",
        callbacks: {
          label: (tooltipItem) => {
            const label = data.labels[tooltipItem.dataIndex] || "";
            const percentage = tooltipItem.raw.toFixed(2);
            return `${label}: ${percentage}%`;
          },
        },
      },
      legend: {
        display: false,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: -50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }} 
      transition={{ duration: 1.2, ease: "easeOut" }} 
      style={{
        position: "relative",
        width: "200px",
        height: "200px",
        borderRadius: "10px",
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
        padding: "20px",
        textAlign: "center",
        background: "linear-gradient(135deg, #f8fafc, #e2e8f0)",
      }}
    >
      <Pie data={data} options={options} />
    </motion.div>
  );
};

export default PieChart;
