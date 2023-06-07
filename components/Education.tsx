import {
  SimpleGrid,
  Text,
  Stack,
  Heading,
  Box,
} from "@chakra-ui/react";
import React from "react";
import ProjectLink from "./Project/ProjectLink";

const Education = () => {
  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        <Stack spacing={4}>
          <Heading fontSize="5xl">Education</Heading>

          <Box
            bg="#322659"
            p={4}
            borderRadius="md"
            boxShadow="md"
            padding="30px"
          >
            <Box>
              <Text fontWeight="bold" fontSize="2xl" color="white">
                University of Pennsylvania 🏫
              </Text>
              <Box height="10px" />
              <Text fontStyle="italic" fontSize="xl" color="white">
                MSE, Computer Science [GPA: 4.00] • 2022 — 2025
              </Text>
              <Text
                fontSize={{ base: "14px", md: "18px" }}
                color="white"
                mt={2}
              >
                Notable Coursework: Machine Learning, Operating Systems Design,
                Database and Information Systems, Web3.0 Security
              </Text>
            </Box>
            <Box mt={4}>
              <Text fontStyle="italic" fontSize="xl" color="white">
                BSE, Computer Science [GPA: 4.00] • 2021 — 2025
              </Text>
              <Text
                fontSize={{ base: "14px", md: "18px" }}
                color="white"
                mt={2}
              >
                Notable Coursework: Data Structures and Algorithms, Scalable and
                Cloud Computing, Engineering Probability, Linear Algebra,
                Discrete Mathematics
              </Text>
            </Box>
          </Box>
        </Stack>
        <Stack spacing={4}>
          <Heading fontSize="5xl">Experience</Heading>

          <Box
            bg="#322659"
            p={4}
            borderRadius="md"
            boxShadow="md"
            padding="30px"
          >
            <Box>
              <Text fontWeight="bold" fontSize="2xl" color="white">
                SWE Intern @ MathWorks (MATLAB) 🎲
              </Text>
              <Box height="10px" />
              <Text
                fontSize={{ base: "14px", md: "18px" }}
                color="white"
                mt={2}
              >
                Simulink Assessments Team
              </Text>
              <ProjectLink id={"mathworks"}>
                <Text fontSize={{ base: "md", md: "lg" }} color="#5CA4FF">
                  Find out more! &rarr;
                </Text>
              </ProjectLink>
            </Box>
            <Box mt={4}>
              <Text fontWeight="bold" fontSize="2xl" color="white">
                SWE Intern @ Ripple Interactive 💥
              </Text>
              <Text
                fontSize={{ base: "14px", md: "18px" }}
                color="white"
                mt={2}
              >
                Building app
              </Text>
              <ProjectLink id={"ripple"}>
                <Text fontSize={{ base: "md", md: "lg" }} color="#5CA4FF">
                  Find out more! &rarr;
                </Text>
              </ProjectLink>
            </Box>
          </Box>
        </Stack>
      </SimpleGrid>
    </>
  );
};

export default Education;
