import { Box, Flex, Heading, Text, Circle } from "@chakra-ui/react";
import Sidebar from "./Components/Sidebar";
import StatCard from "./Components/StatCard";
import UserActivityChart from "./Components/UserActivityChart";
import ActivityLog from "./Components/ActivityLog";
import PieChart from "./Components/PieChart";
import { useState } from "react";

function App() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Flex minHeight="100vh" direction="row" bg="gray.50">
      <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      
      <Box
        flex="1"
        p={4}
        ml={isExpanded ? "260px" : "80px"} // Prevent shifting
        transition="margin-left 0.4s ease-in-out"
      >
        <Flex direction="column" gap={2}>
          <Flex gap={85} wrap="wrap" justify="flex-start">
            <StatCard title="Daily Active Users" value="1051" date="18 Mar 2020" />
            <StatCard title="Monthly Active Users" value="2200" date="18 Mar 2020" />
            <StatCard title="Daily Time Per User" value="3 hrs" date="18 Mar 2020" />
          </Flex>
          <Box mt={4} bg="white" p={4} borderRadius="lg" boxShadow="lg" w="55%">
            <Heading as="h3" size="lg" mb={4}>User Activity Overview</Heading>
            <UserActivityChart />
          </Box>
          <Box mt={4} bg="white" p={4} borderRadius="lg" boxShadow="lg" W="450px">
  <ActivityLog />
</Box>
        </Flex>
      </Box>

      {/* Sidebar remains fixed, content does not shift */}
      <Box
        position="absolute"
        top={4}
        right={13}
        width="390px"
        height="525px"
        bg="white"
        borderRadius="8px"
        boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
        p={7}
        textAlign="center"
      >
        <Heading as="h3" size="lg" mb={2}>Daily Active Users Distribution</Heading>

        <Flex justifyContent="center" alignItems="center">
          <PieChart />
        </Flex>

        <Box mt={2} display="flex" flexDirection="column" gap={1}>
          <Text fontSize="m">Total Daily Active Users: 1051</Text>
          <Box display="flex" alignItems="center">
            <Circle size="8px" bg="#3B82F6" mr={2} />
            <Text fontSize="sm">Staff: 400</Text>
          </Box>
          <Box display="flex" alignItems="center">
            <Circle size="8px" bg="#60A5FA" mr={2} />
            <Text fontSize="sm">Students: 400</Text>
          </Box>
          <Box display="flex" alignItems="center">
            <Circle size="8px" bg="#17a2b8" mr={2} />
            <Text fontSize="sm">Other: 251</Text>
          </Box>
        </Box>

        <Heading as="h4" size="sm" mt={2} color="#17a2b8">By Authentication Method</Heading>
        <Text fontSize="sm">Microsoft: 100 Internal: 100 Small: 100</Text>
      </Box>
    </Flex>
  );
}

export default App;
