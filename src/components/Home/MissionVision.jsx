import React from "react";
import { Box, Heading, Text, VStack, Flex, Icon, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaRocket, FaEye } from "react-icons/fa";

const MotionBox = motion(Box);

const MissionVision = () => {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const cardBg = useColorModeValue("white", "gray.700");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <Box p={8} bg={bgColor} borderRadius="xl" boxShadow="xl" id="aboutUs">
      <MotionBox
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <VStack spacing={8} align="stretch">
          <MotionBox variants={itemVariants}>
            <Flex
              bg={cardBg}
              p={6}
              borderRadius="lg"
              boxShadow="md"
              alignItems="center"
              flexDirection={["column", "row"]}
            >
              <Icon as={FaRocket} w={12} h={12} color="blue.500" mr={[0, 6]} mb={[4, 0]} />
              <Box>
                <Heading as="h2" size="lg" mb={3} color="blue.500">
                  Our Mission
                </Heading>
                <Text fontSize="md" lineHeight="tall">
                  To provide professional services with a focus on integrity, creativity, innovation, 
                  and client satisfaction, ensuring compliance with applicable Egyptian laws.
                </Text>
              </Box>
            </Flex>
          </MotionBox>

          <MotionBox variants={itemVariants}>
            <Flex
              bg={cardBg}
              p={6}
              borderRadius="lg"
              boxShadow="md"
              alignItems="center"
              flexDirection={["column", "row"]}
            >
              <Icon as={FaEye} w={12} h={12} color="purple.500" mr={[0, 6]} mb={[4, 0]} />
              <Box>
                <Heading as="h2" size="lg" mb={3} color="purple.500">
                  Our Vision
                </Heading>
                <Text fontSize="md" lineHeight="tall">
                  To become the trusted financial advisor for our clients, recognized for strong work ethics, 
                  technical and service excellence, and our commitment to professional integrity and responsibility.
                </Text>
              </Box>
            </Flex>
          </MotionBox>
        </VStack>
      </MotionBox>
    </Box>
  );
};

export default MissionVision;