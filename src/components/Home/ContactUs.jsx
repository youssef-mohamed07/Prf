"use client";

import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Container,
  SimpleGrid,
  Icon,
} from "@chakra-ui/react";
import { MdPhone, MdEmail, MdLocationOn, MdLanguage } from "react-icons/md";

export default function ContactUs() {
  const primaryColor = "#339af0";

  const ContactInfo = ({ icon, text }) => (
    <Flex align="center" mb={4}>
      <Icon as={icon} mr={2} color={primaryColor} boxSize={6} />
      <Text fontSize="sm">{text}</Text>
    </Flex>
  );

  return (
    <Container maxW="6xl" py={10}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Box>
          <Heading color={primaryColor} mb={6}>Let's Connect</Heading>
          <Text mb={6}>We're excited to hear from you! Reach out using the form or contact details below.</Text>
          <VStack align="stretch" spacing={3}>
            <ContactInfo icon={MdPhone} text="(+20)111-222-0941" />
            <ContactInfo icon={MdEmail} text="Sherif@paccpafirm.com" />
            <ContactInfo icon={MdLocationOn} text="6 Hasan Al-Shereey street, Heliopolis, Cairo, Egypt" />
            <ContactInfo icon={MdLanguage} text="www.PACCPAFirm.com" />
          </VStack>
        </Box>
        <Box bg="white" p={8} borderRadius="lg" boxShadow="md">
          <VStack spacing={5}>
            <FormControl>
              <FormLabel>Your Name</FormLabel>
              <Input focusBorderColor={primaryColor} placeholder="John Doe" />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input focusBorderColor={primaryColor} placeholder="johndoe@example.com" type="email" />
            </FormControl>
            <FormControl>
              <FormLabel>Message</FormLabel>
              <Textarea focusBorderColor={primaryColor} placeholder="Your message here..." rows={6} />
            </FormControl>
            <Button 
              bg={primaryColor} 
              color="white" 
              _hover={{ bg: "#228be6" }} 
              width="full"
            >
              Send Message
            </Button>
          </VStack>
        </Box>
      </SimpleGrid>
    </Container>
  );
}