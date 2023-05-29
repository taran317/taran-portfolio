import { Text, Box } from "@chakra-ui/react";
import React from "react";

import dateFormat from "dateformat";
import { ProjectOverviewItem } from "../../api/types";
import ChakraNextImage from "../ChakraImage";

type ProjectProps = ProjectOverviewItem & {
  imageUrl: string;
  index?: number | undefined;
};

const Project: React.FC<ProjectProps> = ({
  imageUrl,
  shortDescription,
  created,
  index = 0,
}) => {

  return (
    <>
      <Box
        width="full"
        marginTop={{ base: "1", md: "3" }}
        display="flex"
        flexDirection={{
          base: "column",
          md: index % 2 === 0 ? "row" : "row-reverse",
        }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Box
            width={{ base: "100%", md: "85%" }}
            zIndex="2"
            marginLeft={{ base: "0", md: "5%" }}
            marginTop="5%"
          >
            <ChakraNextImage
              src={imageUrl}
              alt="Abstract image interpretation of the project title"
              objectFit="cover"
              w="100%"
              h="200px"
              layout="fill"
            />
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient="radial(purple.200 1px, transparent 1px)"
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: "3", md: "0" }}
        >

          <Text fontSize="md" color="gray.400">
            {dateFormat(created, "mmmm d, yyyy")}
          </Text>

          <Text
            as="p"
            marginTop="2"
            marginBottom="2"
            color="gray.200"
            fontSize="md"
          >
            {shortDescription}
          </Text>

        </Box>
      </Box>
    </>
  );
};

export default Project;