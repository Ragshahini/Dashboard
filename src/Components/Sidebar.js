import { Box, VStack, Text, Link } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <Box width="250px" bg="gray.800" color="white" height="100vh" p={5}>
      <Text fontSize="xl" mb={5}>Logo</Text>
      <VStack align="start">
        <Link>Dashboard</Link>
        <Link>Data Lab</Link>
        <Link>Surveys</Link>
        <Link>Library</Link>
        <Link>Marketplace</Link>
      </VStack>
    </Box>
  );
};

export default Sidebar;  
