// src/components/OurServices.js

import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  IoAnalyticsSharp,
  IoFileTrayFullSharp,
  IoBriefcaseSharp,
  IoBusinessSharp,
  IoSearchSharp,
} from "react-icons/io5";

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex w={8} h={8} align={"center"} justify={"center"} rounded={"full"} bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function OurServices() {
  const services = [
    {
      icon: <Icon as={IoFileTrayFullSharp} color={"blue.500"} w={5} h={5} />,
      iconBg: useColorModeValue("blue.100", "blue.900"),
      text: "Audit and Assurance",
      description: "Independent and objective audit services ensuring accuracy and compliance.",
    },
    {
      icon: <Icon as={IoBriefcaseSharp} color={"green.500"} w={5} h={5} />,
      iconBg: useColorModeValue("green.100", "green.900"),
      text: "Tax Services",
      description: "Comprehensive tax planning and compliance services.",
    },
    {
      icon: <Icon as={IoBusinessSharp} color={"purple.500"} w={5} h={5} />,
      iconBg: useColorModeValue("purple.100", "purple.900"),
      text: "Business Advisory",
      description: "Strategic advice to help your business grow and succeed.",
    },
    {
      icon: <Icon as={IoAnalyticsSharp} color={"yellow.500"} w={5} h={5} />,
      iconBg: useColorModeValue("yellow.100", "yellow.900"),
      text: "Establishment of New Companies",
      description: "Expert guidance on setting up new companies, particularly for foreign entities.",
    },
  ];

  return (
    <Container maxW={"7xl"} py={12} id="services">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"blue.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Our Services
          </Text>
          <Heading>Professional Services for Your Business</Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            We offer a range of services to meet your business needs, ensuring accuracy, integrity,
            and strategic insights.
          </Text>
          <Stack
            spacing={4}
            divider={<StackDivider borderColor={useColorModeValue("gray.100", "gray.700")} />}
          >
            {services.map((service, index) => (
              <Stack key={index} spacing={2}>
                <Feature icon={service.icon} iconBg={service.iconBg} text={service.text} />
                <Text color={"gray.500"}>{service.description}</Text>
              </Stack>
            ))}
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={
              "https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
