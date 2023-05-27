import {
  Box,
  Button,
  Link,
  Image,
  Text,
  Stack,
  Heading,
  SlideFade,
  useMediaQuery,
  Icon,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { FaEnvelope, FaGithub, FaLinkedin, FaFile } from "react-icons/fa";
import React from "react";
import ToggleColorMode from "./ToggleColorMode";

function Header() {
  const [isLargerThan800] = useMediaQuery("800");

  return (
    <>
      <Stack
        spacing={10}
        justifyContent="flex-start"
        alignItems="flex-start"
        width="100%"
      >
        <SlideFade
          dir="top"
          in
          transition={{ enter: { duration: 0.4, delay: 0.7 } }}
        >
          <Box position="relative">
            <Image
              src="https://svgsilh.com/svg/26432.svg"
              filter="invert(0.2)"
              w={{ base: "70px", md: "150px" }}
              position="absolute"
              top={{ base: "0", md: "-15" }}
              left={{ base: "-5", md: "-10" }}
              zIndex={0}
              alt=""
            />
            <Text
              color="brand.500"
              fontSize="display2"
              fontWeight="medium"
              position="relative"
              zIndex={1}
            >
              Hey there 👋, I'm-
            </Text>
          </Box>

          <Heading
            mt={0}
            fontSize="display"
            lineHeight="95%"
            letterSpacing={{ sm: "-1.2px", md: "-1.8px" }}
            position="relative"
            zIndex={1}
          >
            Taran Anantasagar
          </Heading>
        </SlideFade>

        <SlideFade
          dir="top"
          in
          transition={{ enter: { duration: 0.4, delay: 0.8 } }}
        >
          <Heading
            color="textSecondary"
            fontSize="display2"
            fontWeight="medium"
            whiteSpace="pre-wrap"
            letterSpacing="-1.6px"
            maxWidth={{ base: "100%", md: "800px" }}
          >
            {" "}
          </Heading>
        </SlideFade>

        <SlideFade
          dir="top"
          in
          transition={{ enter: { duration: 0.4, delay: 0.9 } }}
        >
          <Text fontSize="display3" color="textSecondary">
            📘 Studying{" "}
            <Text as="span" color="brand.500">
              Computer Science
            </Text>{" "}
            at the{" "}
            <Text as="span" color="brand.500">
              University of Pennsylvania
            </Text>
            <Text as="span" color="textSecondary">
              {" "}
              & graduating in May 2025
            </Text>
            <br />
            🏀 Following favorite teams and players across sports leagues +
            engaging in fiery debates with friends
            <br />
            🧑‍💻 Actively seeking SWE and Quant Trading internships for Summer
            2024
          </Text>
        </SlideFade>

        <SlideFade
          dir="top"
          in
          transition={{ enter: { duration: 0.4, delay: 1.0 } }}
        >
          <Wrap spacing={4} shouldWrapChildren width="100%">
            <WrapItem>
              <Link
                href={"https://www.linkedin.com/in/taran-anantasagar/"}
                isExternal
              >
                <Button
                  leftIcon={<Icon as={FaLinkedin} color="brand.300" />}
                  position="static"
                  size={isLargerThan800 ? "md" : "sm"}
                  color="white"
                >
                  LinkedIn
                </Button>
              </Link>
            </WrapItem>
            <WrapItem>
              <Link href={`mailto:tars@seas.upenn.edu`} isExternal>
                <Button
                  leftIcon={<Icon as={FaEnvelope} color="brand.300" />}
                  transition="0.3s"
                  position="static"
                  size={isLargerThan800 ? "md" : "sm"}
                  color="white"
                >
                  Email
                </Button>
              </Link>
            </WrapItem>
          </Wrap>
        </SlideFade>
        <ToggleColorMode />
      </Stack>
    </>
  );
}

export default Header;
