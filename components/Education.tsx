import {
  SimpleGrid,
  Text,
  Stack,
  Heading,
  Box,
  Image,
  Flex,
  List,
  ListItem,
} from "@chakra-ui/react";
import React from "react";
import ProjectLink from "./Project/ProjectLink";

const Education = () => (
  <>
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
      <Stack spacing={4}>
        <Heading fontSize="5xl">Education</Heading>

        <Box bg="#322659" p={4} borderRadius="md" boxShadow="md" padding="30px">
          <Box>
            <Text fontWeight="bold" fontSize="2xl" color="white">
              University of Pennsylvania 🏫
            </Text>
            <Text fontSize="md" fontStyle="italic" color="white">
              School of Engineering and Applied Science
            </Text>
            {/* <Text fontSize="md" fontStyle="italic" color="white">
          Philadelphia, PA
        </Text> */}
            {/* divider line */}
            <Box
              mt={3}
              mb={3}
              w="100%"
              h="1px"
              bg="white"
              opacity="0.2"
              borderRadius="full"
            />
            {/* <Box height="10px" /> */}
            <Flex>
              <Box>
                <Box>
                  <Text fontStyle="italic" fontSize="xl" color="white">
                    MSE, Computer Science [GPA: 4.00] • 2022 — 2025
                  </Text>
                  <List spacing={1} mt={2} ml={5} styleType="disc">
                    <ListItem>
                      <Text
                        fontSize={{ base: "14px", md: "18px" }}
                        color="white"
                        mt={2}
                      >
                        Notable Coursework: Machine Learning, Operating Systems
                        Design, Database and Information Systems, Web3.0
                        Security
                      </Text>
                    </ListItem>
                  </List>
                </Box>
                <Box mt={4}>
                  <Text fontStyle="italic" fontSize="xl" color="white">
                    BSE, Computer Science [GPA: 4.00] • 2021 — 2025
                  </Text>
                  <List spacing={1} mt={2} ml={5} styleType="disc">
                    <ListItem>
                      <Text
                        fontSize={{ base: "14px", md: "18px" }}
                        // fontStyle="italic"
                        // fontWeight="bold"
                        color="white"
                        mt={2}
                      >
                        Minors in Mathematics and Statistics
                      </Text>
                    </ListItem>
                    <ListItem>
                      <Text
                        fontSize={{ base: "14px", md: "18px" }}
                        color="white"
                        mt={2}
                      >
                        Notable Coursework: Data Structures and Algorithms,
                        Scalable and Cloud Computing, Engineering Probability,
                        Linear Algebra, Discrete Mathematics
                      </Text>
                    </ListItem>
                  </List>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Stack>
      <Stack spacing={4}>
        <Heading fontSize="5xl">Experience</Heading>

        <Box bg="#322659" p={4} borderRadius="md" boxShadow="md" padding="30px">
          <Box>
            <Text fontWeight="bold" fontSize="2xl" color="white">
              SWE Intern @ MathWorks (MATLAB) 🎲
            </Text>
            <Box height="10px" />
            <Text fontSize={{ base: "14px", md: "18px" }} color="white" mt={2}>
              As part of the MATLAB/Simulink Core Assessments team, I am working
              on enhancing Mathworks's Verification and Validation suite by
              extending the capabilities of Simulink's temporal assessment
              framework.
            </Text>
            <Box height="10px" />
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
            <Text fontSize={{ base: "14px", md: "18px" }} color="white" mt={2}>
              Built and shipped{" "}
              <Text as="span" fontStyle="italic">
                What's Happening
              </Text>{" "}
              social media feed feature for Ripple's app (iOS) and addressed
              privacy concerns by allowing users to use Ripple without enabling
              location services.
            </Text>
            <Box height="10px" />
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

export default Education;
