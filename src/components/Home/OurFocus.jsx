import React from "react";
import { Box, Heading, Text, useTheme, VStack, Icon, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaBullseye } from "react-icons/fa";

const MotionBox = motion(Box);
const MotionText = motion(Text);

const OurFocus = () => {
  const theme = useTheme();
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const textColor = useColorModeValue("gray.700", "gray.100");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.2,
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
    <MotionBox
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      p={{ base: 6, md: 8 }}
      borderRadius="xl"
      bg={bgColor}
      boxShadow="xl"
      textAlign="center"
    >
      <VStack spacing={6} align="center">
        <MotionBox variants={itemVariants}>
          <Icon as={FaBullseye} w={{ base: 12, md: 16 }} h={{ base: 12, md: 16 }} color={theme.colors.primary[500]} />
        </MotionBox>
        
        <MotionBox variants={itemVariants}>
          <Heading as="h2" size={{ base: "lg", md: "xl" }} mb={4} color={theme.colors.primary[600]}>
            Our Focus
          </Heading>
        </MotionBox>
        
        <MotionText
          variants={itemVariants}
          fontSize={{ base: "sm", md: "md" }}
          color={textColor}
          maxWidth={{ base: "full", md: "800px" }}
          lineHeight="1.8"
          fontWeight="medium"
        >
          We maintain relationships with our clients founded on mutual regard, respect, and care. Our
          professional standing, esteemed reputation, and unwavering integrity have positioned us as
          leaders in our respective fields across the corporate sector. Protecting the interests of our
          trusted clients is our highest priority.
        </MotionText>
      </VStack>
    </MotionBox>
  );
};

export default OurFocus;
