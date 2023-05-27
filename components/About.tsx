import {
  SimpleGrid,
  Text,
  Stack,
  Heading,
  Image,
  Flex,
  Box,
  Button,
  useDisclosure,
  Link,
  Fade,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        <Stack spacing={4}>
          <Heading fontSize="5xl">About Me</Heading>
          <Box bg="brand.900" p={4} borderRadius="md" boxShadow="md">
            <Text
              fontSize={{ base: "14px", md: "18px" }}
              whiteSpace="pre-line"
            >
              Hey there👋 I'm Taran Anantasagar, and I'm currently a student at
              the University of Pennsylvania pursuing BSE and MSE degrees in
              Computer Science, with minors in Mathematics and Statistics.
              <br />
              <br />
              More placeholder
              <br />
              <br />
              Placeholder
              <br />
              <br />
            </Text>
          </Box>
        </Stack>
      </SimpleGrid>
    </>
  );
};

export default About;
