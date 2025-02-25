import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "./Components/Sidebar";
import StatCard from "./Components/StatCard";
import UserActivityChart from "./Components/UserActivityChart";
import ActivityLog from "./Components/ActivityLog";

function App() {
  return (
    <Flex>
      <Sidebar />
      <Box flex="1" p={5}>
        <Flex gap={4}>
          <StatCard title="Daily Active Users" value="1051" date="18 Mar 2020" />
          <StatCard title="Monthly Active Users" value="1051" date="18 Mar 2020" />
          <StatCard title="Daily Time Per User" value="1051" date="18 Mar 2020" />
        </Flex>
        <Box mt={5}>
          <UserActivityChart />
        </Box>
        <Box mt={5}>
          <ActivityLog />
        </Box>
      </Box>
    </Flex>
  );
}

export default App;
