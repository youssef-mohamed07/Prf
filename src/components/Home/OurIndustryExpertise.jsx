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
import { CheckIcon } from "@chakra-ui/icons";

const features = [
  { id: 1, title: "CONSTRUCTION" },
  { id: 2, title: "EDUCATION" },
  { id: 3, title: "FOOD & BEVERAGE" },
  { id: 4, title: "GENERAL SERVICE" },
  { id: 5, title: "TRADING COMPANIES" },
  { id: 6, title: "HEALTHCARE" },
  { id: 7, title: "INFORMATION TECHNOLOGY (IT)" },
  { id: 8, title: "RETAIL" },
  { id: 9, title: "REAL ESTATE" },
  { id: 10, title: "PROFESSIONAL SERVICES" },
  { id: 11, title: "OIL/GAS" },
  { id: 12, title: "NOT-FOR-PROFIT ORGANIZATIONS" },
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
                <Icon as={CheckIcon} />
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
