import Markdown from "markdown-to-jsx";
import { GetStaticPaths, GetStaticProps } from "next";
import dateFormat from "dateformat";
import {
  Avatar,
  Heading,
  Stack,
  Text,
  Image,
  Spacer,
  Box,
} from "@chakra-ui/react";
import PostStyle from "../styles/PostStyle";
import MarkdownOptions from "../components/MarkdownOptions";
import Credit from "../components/Credit";
import Navbar from "../components/Navbar";
import ProjectProps from "../types/ProjectProps";
import projectInfo from "../posts/projectInfo";
import readingTime from "reading-time";
import { useEffect, useState } from "react";

const fetchContent = async (id: string) => {
  const response = await fetch(
    `https://raw.githubusercontent.com/taran317/posts/main/${id}.md`
  );
  if (response.ok) {
    const text = await response.text();
    return text;
  } else {
    console.error("Failed to fetch content");
    return "";
  }
};

const ProjectPost: React.FC<ProjectProps> = ({
  id,
  title,
  date,
  imageUrl,
  github,
}) => {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    fetchContent(id).then((text) => {
      setContent(text);
    });
  }, [id]);

  return (
    <>
      <Navbar />
      <Stack my="15vh" mb="-10vh" justifyContent="center" alignItems="center">
        <Stack
          w={["100vw", "95vw"]}
          maxW="800px"
          p={["20px", "20px", "24px", "24px"]}
        >
          <Heading fontSize={["3xl", "3xl", "5xl", "5xl"]} color="displayColor">
            {title}
          </Heading>

          <Stack
            py={4}
            direction={{ base: "column", md: "row" }}
            alignItems="baseline"
            justifyContent="space-between"
          >
            <Stack isInline alignItems="center">
              <Avatar
                size="xs"
                src={"https://i.ibb.co/qdk0kqM/linkd.jpg"}
                border="1px solid textPrimary"
              />
              <Text fontSize={["xs", "xs", "sm", "sm"]} color="textPrimary">
                Taran Anantasagar &bull; {dateFormat(date, "mmmm d, yyyy")}
              </Text>
            </Stack>
            <Stack>
              <Text fontSize={["xs", "xs", "sm", "sm"]} color="textSecondary">
                {readingTime(content).text}
              </Text>
            </Stack>
          </Stack>

          <Stack borderRadius="10px" minH="200px">
            <Image
              src={imageUrl}
              borderRadius="50px"
              w="100%"
              h="400px"
              mx="auto"
              objectFit="contain"
              alt=""
            />
          </Stack>
          <PostStyle>
            <Markdown options={MarkdownOptions}>{content}</Markdown>
          </PostStyle>
        </Stack>
      </Stack>
      <Box height="125px" />
      <Credit />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch the IDs of the available posts
  const paths = Object.keys(projectInfo).map((id) => ({
    params: { id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ProjectProps> = async ({
  params,
}) => {
  if (!params || !params.id) {
    return {
      notFound: true,
    };
  }

  const { id } = params;

  if (!projectInfo[id as string]) {
    return {
      notFound: true,
    };
  }

  const post = projectInfo[id as string];

  return {
    props: {
      ...post,
    },
  };
};

export default ProjectPost;
