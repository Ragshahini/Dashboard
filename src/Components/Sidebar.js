import { Box, VStack, Text, Link, HStack, Image, IconButton } from "@chakra-ui/react";
import { FaHome, FaChartBar, FaClipboardList, FaBook, FaStore, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
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
      height="100vh"
      p={5}
      color="white"
      bg="#2D2D2D"
      boxShadow="lg"
      fontFamily="Poppins, sans-serif"
      initial={{ width: "80px" }}
      animate={{ width: isExpanded ? "260px" : "80px" }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {/* Sidebar Toggle Button */}
      <HStack justify="flex-end" mt={4}>
        <IconButton
          aria-label="Toggle Sidebar"
          icon={isExpanded ? <FaChevronLeft /> : <FaChevronRight />}
          onClick={handleSidebarToggle}
          variant="ghost"
          color="gold"
          size="lg"
          _hover={{ bg: "transparent", transform: "scale(1.1)" }}
        />
      </HStack>

      {/* Sidebar Logo */}
      <HStack spacing={3} mb={6} justify={isExpanded ? "center" : "flex-start"} mt={6}>
        <Image
          src="/logo.webp"
          alt="Logo"
          boxSize={isExpanded ? "50px" : "40px"}
          transition="all 0.3s ease"
          borderRadius="full"
        />
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
            bg={activePage === link.name ? "linear-gradient(45deg, #4e73df, #6a5acd)" : "transparent"}
            color={activePage === link.name ? "white" : "#B0B0B0"}
            transition="all 0.3s ease"
            position="relative"
            onClick={() => setActivePage(link.name)}
            onMouseEnter={() => setHoveredLink(link.name)}
            onMouseLeave={() => setHoveredLink(null)}
            _hover={{ bg: "rgba(255, 255, 255, 0.1)", transform: "scale(1.05)" }}
          >
            <Box as={motion.div} whileHover={{ scale: 1.2 }} transition="0.2s">
              {link.icon}
            </Box>

            {/* Tooltip Box */}
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

            {/* Active Link Indicator */}
            {activePage === link.name && (
              <Box
                as={motion.div}
                layoutId="activeIndicator"
                position="absolute"
                left="-6px"
                height="100%"
                width="5px"
                bg="linear-gradient(45deg, #4e73df, #6a5acd)"
                borderRadius="full"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                boxShadow="0px 0px 10px rgba(78, 115, 223, 0.7), 0px 0px 10px rgba(106, 90, 205, 0.7)"
              />
            )}
          </Link>
        ))}
      </VStack>
    </Box>
  );
};

export default Sidebar;
