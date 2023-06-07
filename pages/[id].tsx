import fs from "fs";
import path from "path";
import Markdown from "markdown-to-jsx";
import { GetStaticPaths, GetStaticProps } from "next";
import dateFormat from "dateformat";
import { Avatar, Heading, Stack, Text } from "@chakra-ui/react";
import PostStyle from "../styles/PostStyle";
import MarkdownOptions from "../components/MarkdownOptions";
import Credit from "../components/Credit";
import Navbar from "../components/Navbar";
import ChakraImage from "../components/ChakraImage";
import readingTime from "reading-time";

interface ProjectInfo {
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  tags: string[];
  github: string;
  content: string;
}

interface ProjectPostProps {
    post: ProjectInfo;
}

const projectInfo: { [key: string]: ProjectInfo } = {
  exposurepedia: {
    title: "Exposurepedia",
    date: "2021-01-01",
    description:
      "A web app that allows users to search for and learn about the effects of various chemicals on the human body.",
    imageUrl: "/images/exposurepedia.png",
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Docker",
      "AWS",
    ],
    github: "https://github.com/hack4impact-upenn/exposurepedia",
    content: fs.readFileSync(
      path.join(process.cwd(), "posts", "exposurepedia.md"),
      "utf8"
    ),
  },
};

const ProjectPost: React.FC<ProjectPostProps> = ({ post }) => {
  const { title, date, description, imageUrl, tags, github, content } = post;
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
            <ChakraImage
              src={imageUrl}
              borderRadius="10px"
              w="100%"
              h="400px"
              mx="auto"
              objectFit="cover"
              alt=""
            />
          </Stack>
          <PostStyle>
            <Markdown options={MarkdownOptions}>{content}</Markdown>
          </PostStyle>
        </Stack>
      </Stack>
      <Credit />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch the IDs of the available posts
  const postsDirectory = path.join(process.cwd(), "posts");
  const postFilenames = fs.readdirSync(postsDirectory);
  const paths = postFilenames.map((filename) => ({
    params: { id: filename.replace(/\.md$/, "") },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ProjectPostProps> = async ({
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
      post,
    },
  };
};

export default ProjectPost;
