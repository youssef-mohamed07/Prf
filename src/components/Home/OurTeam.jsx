// src/components/OurTeam.js
import React from "react";
import { 
  Container, 
  SimpleGrid, 
  Heading, 
  Stack, 
  Text, 
  Box, 
  useColorModeValue,
  Fade,
  ScaleFade
} from "@chakra-ui/react";
import TeamMember from "../common/TeamMember";
import { motion } from "framer-motion";

const OurTeam = () => {
  const teamMembers = [
    {
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      avatar: "Picture1.png",
      name: "Sherif Fayed",
      jobTitle: "Managing Partner",
    },
    {
      image:
        "https://media.istockphoto.com/id/1680285819/photo/teamwork-with-business-people-analysis-cost-graph-on-the-desk-in-the-meeting-room-the.jpg?s=612x612&w=0&k=20&c=lzbLWjC26GsHxEd1H-lN-G1cWZYfASVCzspQq952NXM=",
      avatar: "Picture2.png",
      name: "Ali Ismail",
      jobTitle: "Audit & Assurance Services Partner",
    },
    {
      image:
        "https://media.istockphoto.com/id/1480239219/photo/an-analyst-uses-a-computer-and-dashboard-for-data-business-analysis-and-data-management.jpg?s=612x612&w=0&k=20&c=URv6HYZ8L3NCQnxT8-ITvInMW7mlsTE6EjnXHaqF-H4=",
      avatar: "Picture3.png",
      name: "Alaa Fayed",
      jobTitle: "Enterprise Asset Management Partner",
    },
    {
      image:
        "https://media.istockphoto.com/id/1480095869/photo/student-or-man-use-computer-for-elearning-education-online-internet-technology-webinar-online.jpg?s=612x612&w=0&k=20&c=uQ-iVnJGi8O9T6rxI546QNFCLeQAVR9JNMwEm37c94k=",
      avatar: "Picture4.png",
      name: "Hani Tork",
      jobTitle: "Advisory Services Quality & Assurance Strategic Partner",
    },
    {
      image:
        "https://media.istockphoto.com/id/1752167338/photo/new-year-growth-in-2024-with-goal-target-business-concept.jpg?s=612x612&w=0&k=20&c=_-3RwyAW6sqrTa0maUf0mGAKhEJwcxxGO58MXrRE8-Y=",
      avatar: "Picture5.png",
      name: "Mohamed Osman",
      jobTitle: "Financial Services Managing Director, Pac Firm for Financial Services L.L.C",
    },
    {
      image:
        "https://media.istockphoto.com/id/1515913422/photo/a-data-analyst-using-technology-ai-for-working-tool-for-data-analysis-chatbot-chat-with-ai.jpg?s=612x612&w=0&k=20&c=oOKLdZJpcsrUbNrnGVf8TwoIdYud4mWoBkx1A3PdXI0=",
      avatar: "Picture6.png",
      name: "Ahmed Samy",
      jobTitle: "Government Services Manager, Pac Firm for Financial Services L.L.C",
    },
  ];

  const bgColor = useColorModeValue("gray.50", "gray.900");
  const textColor = useColorModeValue("gray.600", "gray.200");
  const headingColor = useColorModeValue("blue.600", "blue.300");

  return (
    <Box bg={bgColor} py={20} id="team">
      <Container maxW={"7xl"}>
        <Fade in={true}>
          <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"} mb={16}>
            <Heading 
              fontSize={"4xl"} 
              color={headingColor}
              fontWeight="bold"
            >
              Our Team
            </Heading>
            <Text color={textColor} fontSize={"xl"} maxW={"2xl"} mx="auto">
              Meet the talented individuals behind our success. Each member brings unique expertise and passion to our mission.
            </Text>
          </Stack>
        </Fade>

        <SimpleGrid 
          columns={{ base: 1, md: 2, lg: 3 }} 
          spacing={10} 
          as={motion.div}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
              }
            }
          }}
        >
          {teamMembers.map((member, index) => (
            <ScaleFade initialScale={0.9} in={true} key={index}>
              <TeamMember
                image={member.image}
                avatar={member.avatar}
                name={member.name}
                jobTitle={member.jobTitle}
              />
            </ScaleFade>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default OurTeam;