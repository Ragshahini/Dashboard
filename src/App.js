import { Box, Flex, Heading } from "@chakra-ui/react";
import Sidebar from "./Components/Sidebar";
import StatCard from "./Components/StatCard";
import UserActivityChart from "./Components/UserActivityChart";
import ActivityLog from "./Components/ActivityLog";

function App() {
  return (
    <Flex minHeight="100vh" direction="row" bg="gray.50">
      <Sidebar />
      <Box flex="1" p={4}> {/* Reduced padding for the main content */}
        <Flex direction="column" gap={2}> {/* Reduced gap between Flex items */}
          <Flex gap={85} wrap="wrap" justify="flex-start"> {/* Adjusted to bring cards closer */}
            <StatCard title="Daily Active Users" value="1051" date="18 Mar 2020" />
            <StatCard title="Monthly Active Users" value="2200" date="18 Mar 2020" />
            <StatCard title="Daily Time Per User" value="3 hrs" date="18 Mar 2020" />
          </Flex>
          <Box mt={4} bg="white" p={4} borderRadius="lg" boxShadow="lg" w="60%"> {/* Reduced width to 70% */}
            <Heading as="h3" size="lg" mb={4}>User Activity Overview</Heading> {/* Heading added */}
            <UserActivityChart />
          </Box>
          <Box mt={4} bg="white" p={4} borderRadius="lg" boxShadow="lg">
            <ActivityLog />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}

export default App;
