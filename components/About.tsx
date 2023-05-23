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
          <Heading fontSize="2xl">About Me</Heading>

          <Text
            color="textSecondary"
            fontSize={{ base: "14px", md: "18px" }}
            whiteSpace="pre-line"
          >
            Placeholder text for now
            <br />
            <br />More placeholder
            <br />
            <br />
            Placeholder
            <br />
            <br />
          </Text>
        </Stack>
      </SimpleGrid>
    </>
  );
};

export default About;
