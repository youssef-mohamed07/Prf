import React from "react";
import { Box, Heading, Text, SimpleGrid, Icon, useColorModeValue } from "@chakra-ui/react";
import { FaLightbulb, FaShieldAlt, FaUserTie } from "react-icons/fa";

const WhyChooseUs = () => {
  const cardData = [
    {
      icon: FaLightbulb,
      title: "Creativity",
      description: "Innovative solutions tailored to your needs.",
    },
    {
      icon: FaShieldAlt,
      title: "Integrity",
      description: "Upholding the highest standards of professionalism.",
    },
    {
      icon: FaUserTie,
      title: "Client Focus",
      description: "Your success is our priority.",
    },
  ];

  return (
    <Box
      p={{ base: 6, md: 8 }}
      bg={useColorModeValue("gray.100", "gray.800")}
      borderRadius="md"
      boxShadow="md"
      textAlign="center"
    >
      <Heading as="h2" size="xl" mb={6}>
        Why Choose Us?
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {cardData.map((card, index) => (
          <Box
            key={index}
            p={6}
            bg="white"
            borderRadius="md"
            boxShadow="lg"
            transition="transform 0.3s, box-shadow 0.3s"
            _hover={{ transform: "scale(1.05)", boxShadow: "xl" }}
          >
            <Icon as={card.icon} w={12} h={12} mb={4} color="teal.500" />
            <Heading as="h3" size="md" mb={2}>
              {card.title}
            </Heading>
            <Text fontSize="md" color="gray.600">
              {card.description}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default WhyChooseUs;
