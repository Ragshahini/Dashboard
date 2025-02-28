import { Box, Text, VStack, Divider, HStack, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaUserEdit, FaSignInAlt, FaUserPlus, FaKey } from "react-icons/fa";

// Initial logs with fixed timestamps
const initialLogs = [
  { message: "User name changed to admin by admin123", icon: FaUserEdit, time: "2 hrs ago" },
  { message: "User name successfully logged in", icon: FaSignInAlt, time: "4 hrs ago" },
  { message: "Password updated by user567", icon: FaKey, time: "Yesterday" },
  { message: "New user registered: john_doe", icon: FaUserPlus, time: "3 days ago" },
  { message: "User logged out successfully", icon: FaSignInAlt, time: "1 week ago" },
];

// Function to generate new logs with fixed times
const generateLog = () => {
  const newLogs = [
    { message: "New user joined: alice_wonder", icon: FaUserPlus, time: "5 mins ago" },
    { message: "User logged in: mike_ross", icon: FaSignInAlt, time: "30 mins ago" },
    { message: "Profile updated by user789", icon: FaUserEdit, time: "1 hr ago" },
    { message: "Password changed by user123", icon: FaKey, time: "6 hrs ago" },
    { message: "User signed out: sarah_lee", icon: FaSignInAlt, time: "2 days ago" },
  ];
  return newLogs[Math.floor(Math.random() * newLogs.length)];
};

// Animation Variants
const logVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.2, duration: 0.5, ease: "easeOut" },
  }),
};

const ActivityLog = () => {
  const [logs, setLogs] = useState(initialLogs);

  // Simulate new logs every 5 seconds (but keeps fixed times)
  useEffect(() => {
    const interval = setInterval(() => {
      setLogs((prevLogs) => [
        generateLog(),
        ...prevLogs.slice(0, 9), 
      ]);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      p={4}
      borderWidth="2px"
      borderRadius="md"
      bgGradient="linear(to-r, #17a2b8, #0d6efd)"
      color="white"
      maxH="320px"
      overflowY="auto"
      boxShadow="0px 4px 12px rgba(0, 0, 0, 0.1)"
      sx={{
        "&::-webkit-scrollbar": { width: "6px" },
        "&::-webkit-scrollbar-thumb": {
          background: "rgba(255, 255, 255, 0.4)",
          borderRadius: "10px",
        },
      }}
    >
      <Text fontSize="lg" fontWeight="bold" textAlign="center" mb={2}>
        Activity Log 🔥
      </Text>
      <Divider borderColor="whiteAlpha.700" mb={2} />

      <VStack align="start" spacing={3}>
        {logs.map((log, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={logVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "10px",
              background: "rgba(255, 255, 255, 0.15)",
              backdropFilter: "blur(6px)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
          >
            <HStack spacing={3}>
              <Icon as={log.icon} boxSize={5} />
              <Box>
                <Text fontSize="sm" fontWeight="medium">
                  {log.message}
                </Text>
                <Text fontSize="xs" color="gray.200">
                  {log.time} {/* Fixed timestamp */}
                </Text>
              </Box>
            </HStack>
          </motion.div>
        ))}
      </VStack>
    </Box>
  );
};

export default ActivityLog;
