import { Box, Text } from "@chakra-ui/react";

const StatCard = ({ title, value, date }) => {
  return (
    <Box p={4} borderWidth="1px" borderRadius="md" boxShadow="sm">
      <Text fontSize="lg">{title}</Text>
      <Text fontSize="2xl" fontWeight="bold">{value}</Text>
      <Text fontSize="sm">{date}</Text>
    </Box>
  );
};

export default StatCard;