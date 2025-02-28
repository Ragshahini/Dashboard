import { Box, Text, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

const StatCard = ({ title, value, date }) => {
  const motionProps = useBreakpointValue({
    base: { scale: 1 },
    md: { scale: 1.05 },
  });

  return (
    <Box
      as={motion.div}
      whileHover={{ scale: 1.05 }}  
      whileTap={{ scale: 0.95 }}
      whileFocus={{ scale: 1.05 }}
      transition="all 0.3s ease"
      p={3}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg"
      bg="white"
      _hover={{
        boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)",  
        transform: "translateY(-5px)",  
        cursor: "pointer",
      }}
      borderColor="#17a2b8"
      mb={2}
    >
      <Text fontSize="lg" fontWeight="medium" color="gray.600">{title}</Text>
      <Text fontSize="2xl" fontWeight="bold" color="#17a2b8">
        {value}
      </Text>
      <Text fontSize="sm" color="gray.500">{date}</Text>
    </Box>
  );
};

export default StatCard;
