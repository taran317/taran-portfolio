import {
  Box,
  Button,
  forwardRef,
  Flex,
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
import { motion, isValidMotionProp } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaFile } from "react-icons/fa";
import { useState } from "react";

export const MotionBox = motion(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      // do not pass framer props to DOM element
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    );
    return <Box ref={ref} {...chakraProps} />;
  })
);

const MotionFlex = motion(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      // do not pass framer props to DOM element
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    );
    return <Flex ref={ref} {...chakraProps} />;
  })
);

const emojis = [
  "👋",
  "✌️",
  "🤙",
  "🤘",
  "🖖",
  "👊",
  "🙌",
  "👍",
  "🤛",
  "🖐",
  "👌",
  "👏",
  "🤞",
  "🤟",
  "🤝",
  "🤜",
  "🤚",
  "☝️",
];

function Header() {
  const [isLargerThan800] = useMediaQuery("800");
  const [showEmoji, setShowEmoji] = useState(false);
  const [emojiCounter, setEmojiCounter] = useState(-1);

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
            <MotionFlex
              position="relative"
              ml={["auto", "auto"]}
              m={["auto", "initial"]}
              w={["90%", "85%", "80%"]}
              maxW="800px"
              opacity="0"
              justify="center"
              direction="column"
              initial={{
                opacity: 0,
                translateX: 150,
              }}
              animate={{
                opacity: 1,
                translateX: 0,
                transition: {
                  duration: 0.5,
                },
              }}
            >
              <Box position="relative">
                <Box
                  position="absolute"
                  width="full"
                  fontSize="2xl"
                  textAlign="center"
                >
                  {emojis.map((item, index) => {
                    return (
                      <MotionBox
                        key={index}
                        position="absolute"
                        right="80%"
                        animate={
                          showEmoji && emojiCounter === index ? "show" : "hide"
                        }
                        variants={{
                          hide: { translateY: -80, opacity: 0 },
                          show: {
                            translateY: [0, -40, -60],
                            opacity: [0, 1, 0],
                          },
                        }}
                        initial="hide"
                      >
                        {item}
                      </MotionBox>
                    );
                  })}
                </Box>
                <MotionBox whileHover={{ translateY: -5 }} width="max-content">
                  <Text
                    color="brand.500"
                    fontSize="display2"
                    fontWeight="medium"
                    position="relative"
                    cursor="pointer"
                    onClick={() => {
                      setEmojiCounter(
                        (prevCounter) => (prevCounter + 1) % emojis.length
                      );
                      setShowEmoji(true);
                    }}
                    zIndex={1}
                  >
                    Hey there 👋, I'm-
                  </Text>
                </MotionBox>
              </Box>
            </MotionFlex>
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
            Let's build something extraordinary together.
            But first, a bit about me
            <Box color="displayColor" as="span">
              ...welcome to my portfolio!
            </Box>{" "}
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
            🧑‍💻 Actively seeking Software Engineering internships for Summer
            2024
          </Text>
        </SlideFade>

        {/* <SlideFade
          dir="top"
          in
          transition={{ enter: { duration: 0.4, delay: 1.0 } }}
        >
          <Wrap spacing={4} shouldWrapChildren width="100%">
            <Box>
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
            </Box>
            <Box>
              <Link href={`mailto:tars@seas.upenn.edu`} isExternal>
                {/* <Button
                  leftIcon={<Icon as={FaEnvelope} color="brand.300" />}
                  transition="0.3s"
                  position="static"
                  size={isLargerThan800 ? "md" : "sm"}
                  color="white"
                >
                  Email
                </Button> 
              </Link>
            </Box>
          </Wrap>
        </SlideFade> */}
      </Stack>
    </>
  );
}

export default Header;
