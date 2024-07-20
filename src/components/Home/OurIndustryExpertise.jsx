"use client";

import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
  useColorModeValue
} from "@chakra-ui/react";
import { 
  FaBuilding, 
  FaSchool, 
  FaBeer, 
  FaTools, 
  FaShoppingCart, 
  FaHeartbeat, 
  FaLaptopCode, 
  FaStore, 
  FaHome, 
  FaBriefcase, 
  FaOilCan, 
  FaHandHoldingHeart 
} from "react-icons/fa";

const features = [
  { id: 1, title: "CONSTRUCTION", icon: FaBuilding },
  { id: 2, title: "EDUCATION", icon: FaSchool },
  { id: 3, title: "FOOD & BEVERAGE", icon: FaBeer },
  { id: 4, title: "GENERAL SERVICE", icon: FaTools },
  { id: 5, title: "TRADING COMPANIES", icon: FaShoppingCart },
  { id: 6, title: "HEALTHCARE", icon: FaHeartbeat },
  { id: 7, title: "INFORMATION TECHNOLOGY (IT)", icon: FaLaptopCode },
  { id: 8, title: "RETAIL", icon: FaStore },
  { id: 9, title: "REAL ESTATE", icon: FaHome },
  { id: 10, title: "PROFESSIONAL SERVICES", icon: FaBriefcase },
  { id: 11, title: "OIL/GAS", icon: FaOilCan },
  { id: 12, title: "NOT-FOR-PROFIT ORGANIZATIONS", icon: FaHandHoldingHeart },
];

export default function OurIndustryExpertise() {
  return (
    <Box
      p={{ base: 4, md: 6 }}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={6} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", md: "3xl" }} fontWeight={700}>
          Our Industry Expertise
        </Heading>
        <Text color={"gray.600"} fontSize={{ base: "lg", md: "xl" }}>
          We possess expertise across various industries
        </Text>
      </Stack>

      <Container maxW={"6xl"} mt={8}>
        <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={8}>
          {features.map((feature) => (
            <HStack
              key={feature.id}
              spacing={4}
              align={"start"}
              p={4}
              borderWidth={1}
              borderRadius={"md"}
              borderColor={useColorModeValue("gray.200", "gray.700")}
              bg={useColorModeValue("white", "gray.900")}
              boxShadow={"md"}
            >
              <Box color={"green.400"} fontSize={{ base: "lg", md: "xl" }}>
                <Icon as={feature.icon} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600} fontSize={{ base: "md", md: "lg" }}>
                  {feature.title}
                </Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
