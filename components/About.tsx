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
      <SimpleGrid columns={{ base: 1, md: 1.5 }} spacing={8}>
        <Stack spacing={4}>
          <Heading fontSize="2xl">About Me</Heading>

          <Text
            color="textSecondary"
            fontSize={{ base: "14px", md: "18px" }}
            whiteSpace="pre-line"
          >
            Hey there👋 I'm Taran Anantasagar, and I'm currently a student at the University of
            Pennsylvania pursuing BSE and MSE degrees in Computer Science, with minors in Mathematics
            and Statistics.
            <br />
            <br />
            More placeholder
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
