import React from "react";
import { Box, Heading, Button, Input, Text, VStack } from "@chakra-ui/react";

const App = () => {
  const appTitle = "My Chakra UI Application";
  return (
    <Box
      p={5}
      maxW="600px"
      mx="auto"
      mt={10}
      borderWidth="1px"
      borderRadius="lg"
    >
      <Heading as="h1" size="xl" mb={4}>
        First UI using Chakra
      </Heading>

      <Input placeholder="Enter something..." mb={4} />

      <Button colorScheme="blue" mb={4}>
        Submit
      </Button>

      <VStack
        p={4}
        borderWidth="1px"
        borderRadius="lg"
        spacing={4}
        align="stretch"
      >
        <Text fontSize="md">
          This is a simple card component built with Chakra UI's Box and Text
          components.
        </Text>
        <Button colorScheme="teal">Click Me</Button>
      </VStack>
    </Box>
  );
};

export default App;
