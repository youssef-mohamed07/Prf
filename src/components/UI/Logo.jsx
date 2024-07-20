import React from "react";
import { Box, Image } from "@chakra-ui/react";

export default function Logo(props) {
  return (
    <Box {...props}>
      <Image src="/logo.png" alt="Logo" style={{ maxWidth: 100 }} />
    </Box>
  );
}
