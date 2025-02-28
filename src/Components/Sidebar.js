import { useState } from "react";  // <-- Import useState
import { Box, VStack, Text, Link, HStack, Image, IconButton } from "@chakra-ui/react";
import { FaHome, FaChartBar, FaClipboardList, FaBook, FaStore, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const Sidebar = ({ isExpanded, setIsExpanded }) => {
  const [activePage, setActivePage] = useState("Dashboard");
  const [hoveredLink, setHoveredLink] = useState(null);

  const links = [
    { name: "Dashboard", icon: <FaHome /> },
    { name: "Data Lab", icon: <FaChartBar /> },
    { name: "Surveys", icon: <FaClipboardList /> },
    { name: "Library", icon: <FaBook /> },
    { name: "Marketplace", icon: <FaStore /> },
  ];

  const handleSidebarToggle = () => setIsExpanded((prev) => !prev);

  return (
    <Box
      as={motion.div}
      width={isExpanded ? "260px" : "80px"}
      minWidth={isExpanded ? "260px" : "80px"}
      height="100vh"
      position="fixed"
      top="0"
      left="0"
      p={5}
      color="white"
      bg="#B3D9D2"
      boxShadow="lg"
      fontFamily="Poppins, sans-serif"
      transition="width 0.4s ease-in-out"
    >
      {/* Sidebar Toggle Button */}
      <HStack justify="flex-end" mt={4}>
        <IconButton
          aria-label="Toggle Sidebar"
          icon={isExpanded ? <FaChevronLeft /> : <FaChevronRight />}
          onClick={handleSidebarToggle}
          variant="ghost"
          color="#17a2b8"
          size="lg"
          _hover={{ bg: "transparent", transform: "scale(1.1)" }}
        />
      </HStack>

      {/* Sidebar Logo */}
      <HStack spacing={3} mb={6} justify={isExpanded ? "center" : "flex-start"} mt={6}>
        <Image src="/logo.webp" alt="Logo" boxSize="50px" transition="all 0.3s ease" borderRadius="full" />
      </HStack>

      {/* Sidebar Links */}
      <VStack align="start" spacing={4} mt={6}>
        {links.map((link, index) => (
          <Link
            key={index}
            display="flex"
            alignItems="center"
            gap={3}
            fontSize="lg"
            p={3}
            fontWeight="medium"
            borderRadius="md"
            bg={activePage === link.name ? "linear-gradient(to right, #17a2b8, #0d6efd)" : "transparent"}
            color={activePage === link.name ? "white" : "black"}
            transition="all 0.3s ease"
            position="relative"
            onClick={() => setActivePage(link.name)}
            onMouseEnter={() => setHoveredLink(link.name)}
            onMouseLeave={() => setHoveredLink(null)}
            _hover={{ bg: "rgba(41, 40, 40, 0.1)", transform: "scale(1.05)" }}
            width="100%"
          >
            <Box as={motion.div} whileHover={{ scale: 1.2 }} transition="0.2s" color="black">
              {link.icon}
            </Box>

            {hoveredLink === link.name && !isExpanded && (
              <Box
                position="absolute"
                left="100%"
                top="50%"
                transform="translateY(-50%)"
                opacity={1}
                visibility="visible"
                bg="rgba(0, 0, 0, 0.7)"
                color="white"
                p={1}
                borderRadius="md"
                fontSize="sm"
                transition="opacity 0.2s ease"
              >
                {link.name}
              </Box>
            )}

            {isExpanded && <Text>{link.name}</Text>}
          </Link>
        ))}
      </VStack>
    </Box>
  );
};

export default Sidebar;
