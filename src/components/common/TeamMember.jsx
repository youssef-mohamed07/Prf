import React from "react";
import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  useColorModeValue,
  Icon,
  Link,
} from "@chakra-ui/react";
import { FaEnvelope, FaLinkedin, FaTwitter } from "react-icons/fa";

const TeamMember = ({ image, name, jobTitle, email, avatar, linkedin, twitter }) => {
  return (
    <Center py={4}>
      <Box
        maxW={"250px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.700")}
        boxShadow={"lg"}
        rounded={"lg"}
        overflow={"hidden"}
        transition={"all 0.3s"}
        _hover={{ transform: "scale(1.03)", boxShadow: "xl" }}
      >
        <Image 
          h={"150px"} 
          w={"full"} 
          src={image} 
          objectFit="cover" 
          alt={`${name} cover`} 
        />
        <Flex justify={"center"} mt={-12}>
          <Avatar
            size={"xl"}
            src={avatar}
            css={{
              border: "4px solid white",
            }}
          />
        </Flex>
        <Box p={4}>
          <Stack spacing={1} align={"center"} mb={4}>
            <Heading fontSize={"lg"} fontWeight={600} fontFamily={"body"}>
              {name}
            </Heading>
            <Text color={"gray.500"} fontSize={"md"}>{jobTitle}</Text>
          </Stack>

          <Stack direction={"row"} justify={"center"} spacing={4}>
            {email && (
              <Link href={`mailto:${email}`} isExternal>
                <Icon as={FaEnvelope} w={6} h={6} color={"gray.600"} _hover={{ color: "blue.400" }} />
              </Link>
            )}
            {linkedin && (
              <Link href={linkedin} isExternal>
                <Icon as={FaLinkedin} w={6} h={6} color={"gray.600"} _hover={{ color: "blue.600" }} />
              </Link>
            )}
            {twitter && (
              <Link href={twitter} isExternal>
                <Icon as={FaTwitter} w={6} h={6} color={"gray.600"} _hover={{ color: "blue.400" }} />
              </Link>
            )}
          </Stack>
        </Box>
      </Box>
    </Center>
  );
};

export default TeamMember;
