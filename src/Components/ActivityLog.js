import { Box, Text, VStack } from "@chakra-ui/react";

const ActivityLog = () => {
  const logs = [
    "User name changed to admin by admin123",
    "User name successfully logged in",
    "User name changed to admin by admin123",
    "User name successfully logged in",
  ];

  return (
    <Box p={4} borderWidth="1px" borderRadius="md" boxShadow="sm">
      <Text fontSize="lg" fontWeight="bold">Activity Log</Text>
      <VStack align="start" mt={3}>
        {logs.map((log, index) => (
          <Text key={index}>{log} <br /><small>2 hrs ago</small></Text>
        ))}
      </VStack>
    </Box>
  );
};

export default ActivityLog;
