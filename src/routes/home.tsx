import React from "react";
import { Flex, Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex as="main" alignItems="center" flexDirection="column" h="80%" w="full">
      <Box as="span" fontSize="4xl" py="200px">
        Welcome to IT Ticketing!
      </Box>
    </Flex>
  );
}
