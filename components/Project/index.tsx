import { Text, Box, Heading, Image } from "@chakra-ui/react";
import React from "react";
import dateFormat from "dateformat";
import ProjectLink from "./ProjectLink";
import Tags from "./Tags";

type ProjectProps = {
  index: number;
  id: string;
  title: string;
  tags: string[];
  imageUrl: string;
  description: string;
  date: string;
};

const Project: React.FC<ProjectProps> = ({
  index,
  id,
  title,
  tags,
  imageUrl,
  description,
  date,
}) => (
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
        flexDirection="column"
        justifyContent="center"
        marginTop={{ base: "3", md: "0" }}
      >
        <Tags tags={tags} />
        <ProjectLink id={id}>
          <Heading marginTop="2">{title}</Heading>
        </ProjectLink>
        <Text fontSize="md" color="gray.400">
          {dateFormat(date, "mmmm d, yyyy")}
        </Text>

        <Text
          as="p"
          marginTop="2"
          marginBottom="2"
          color="gray.200"
          fontSize="md"
        >
          {description}
        </Text>
      </Box>
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
          <Image
            src={imageUrl}
            position="relative"
            zIndex={2}
            fallbackSrc="https://via.placeholder.com/150"
            borderRadius="15px"
            alt="Taran Anantasagar" />
        </Box>
        <Box zIndex="1" width="100%" position="absolute" height="100%">
          <Box
            bgGradient="radial(purple.200 1px, transparent 1px)"
            backgroundSize="20px 20px"
            opacity="0.4"
            height="100%" />
        </Box>
      </Box>
    </Box>
  </>
);

export default Project;
