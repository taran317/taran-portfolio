import { CheckIcon } from "@chakra-ui/icons";
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
          <Box
            bg="brand.1000"
            p={4}
            borderRadius="md"
            boxShadow="md"
            padding="30px"
          >
            <Text fontSize={{ base: "14px", md: "18px" }} whiteSpace="pre-line">
              Hey there👋 I'm Taran Anantasagar, and I'm currently a student at
              the University of Pennsylvania pursuing BSE and MSE degrees in
              Computer Science, with minors in Mathematics and Statistics. I'm
              passionate about building products that make a difference in
              people's lives, and I'm currently looking for software engineering
              internships for Summer 2024.
              <br />
              <br />
              Outside of class, you can find me:
              
            </Text>
          </Box>
        </Stack>
      </SimpleGrid>
    </>
  );
};

export default About;
