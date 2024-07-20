import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Link,
  Flex,
  IconButton,
  Divider,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube, FaHeart } from "react-icons/fa";
import Logo from "./Logo";

const SocialButton = ({ children, label, href }) => {
  return (
    <IconButton
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={12}
      h={12}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"all 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
        transform: "scale(1.1)",
      }}
      icon={children}
      aria-label={label}
    />
  );
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify={"space-between"}
          align={"center"}
        >
          <Flex align={"center"} mb={{ base: 4, md: 0 }}>
            <Logo />
            <Divider orientation="vertical" h={8} mx={4} />
            <Text fontSize={"sm"}>
              Empowering businesses through innovative solutions
            </Text>
          </Flex>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Twitter"} href={"#"}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={"YouTube"} href={"#"}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Flex>
        <Divider my={6} />
        <Flex
          direction={{ base: "column", md: "row" }}
          justify={"space-between"}
          align={"center"}
        >
          <Text fontSize={"sm"}>
            © {currentYear} Pac-firm. All rights reserved.
          </Text>
          <Flex align={"center"} mt={{ base: 4, md: 0 }}>
            <Text fontSize={"sm"} mr={2}>
              Made with
            </Text>
            <FaHeart color="red" />
            <Text fontSize={"sm"} ml={2}>
              by{" "}
              <Link
                href="https://www.youssefhlemo.com"
                fontWeight="bold"
                color="blue.400"
                target="_blank"
                _hover={{
                  textDecoration: "underline",
                  color: "blue.500",
                }}
              >
                Youssef Halim
              </Link>
            </Text>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}