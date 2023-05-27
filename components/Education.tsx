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

const Education = () => {
  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        <Stack spacing={4}>
          <Heading fontSize="5xl">Education</Heading>

          <Box bg="brand.900" p={4} borderRadius="md" boxShadow="md">
            <Box>
              <Text fontSize="2xl" color="brand.100">
                University of Pennsylvania
              </Text>
              <Box borderTop="1px" borderColor="gray.300" my={2} />
              <Text fontStyle="italic" fontSize="lg" fontWeight="bold">
                MSE, Computer Science • 2022 — 2025
              </Text>
              <Text mt={2}>
                <Text as="span" fontWeight="bold">
                  Notable Coursework:
                </Text>{" "}
                Machine Learning, Operating Systems Design, Machine Learning,
                Database and Information Systems, Web3.0 Security
              </Text>
              <Text mt={2}>
                <Text as="span" fontWeight="bold">
                  GPA:
                </Text>{" "}
                4.00
              </Text>
            </Box>
            <Box mt={4}>
              <Text fontStyle="italic" fontSize="lg" fontWeight="bold" mt={2}>
                BSE, Computer and Information Science • 2021 — 2025
              </Text>
              <Text mt={2}>
                <Text as="span" fontWeight="bold">
                  Notable Coursework:
                </Text>{" "}
                Data Structures and Algorithms, Scalable and Cloud Computing,
                Engineering Probability, Linear Algebra, Stochastic Processes,
                Discrete Mathematics
              </Text>
              <Text mt={2}>
                <Text as="span" fontWeight="bold">
                  GPA:
                </Text>{" "}
                4.00
              </Text>
            </Box>
          </Box>
        </Stack>
        <Stack spacing={4}>
          <Heading fontSize="5xl">Associations</Heading>
          <Box bg="brand.900" p={4} borderRadius="md" boxShadow="md">
            <Box>
              <Text fontSize="2xl" color="brand.100">
                University of Pennsylvania
              </Text>
              <Box borderTop="1px" borderColor="gray.300" my={2} />
              <Text fontStyle="italic" fontSize="lg" fontWeight="bold">
                MSE, Computer Science • 2022 — 2025
              </Text>
              <Text mt={2}>
                <Text as="span" fontWeight="bold">
                  Notable Coursework:
                </Text>{" "}
                Machine Learning, Operating Systems Design, Machine Learning,
                Database and Information Systems, Web3.0 Security
              </Text>
              <Text mt={2}>
                <Text as="span" fontWeight="bold">
                  GPA:
                </Text>{" "}
                4.00
              </Text>
            </Box>
            <Box mt={4}>
              <Text fontStyle="italic" fontSize="lg" fontWeight="bold" mt={2}>
                BSE, Computer and Information Science • 2021 — 2025
              </Text>
              <Text mt={2}>
                <Text as="span" fontWeight="bold">
                  Notable Coursework:
                </Text>{" "}
                Data Structures and Algorithms, Scalable and Cloud Computing,
                Engineering Probability, Linear Algebra, Stochastic Processes,
                Discrete Mathematics
              </Text>
              <Text mt={2}>
                <Text as="span" fontWeight="bold">
                  GPA:
                </Text>{" "}
                4.00
              </Text>
            </Box>
          </Box>
        </Stack>
      </SimpleGrid>
    </>
  );
};

export default Education;
