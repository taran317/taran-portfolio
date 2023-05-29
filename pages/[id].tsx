import fs from "fs";
import path from "path";
import Markdown from "markdown-to-jsx";
import { GetStaticPaths, GetStaticProps } from "next";
import { Stack } from "@chakra-ui/react";
import PostStyle from "../styles/PostStyle";
import MarkdownOptions from "../components/MarkdownOptions";

interface ProjectPostProps {
  content: string;
}

const getProjectPost = (id: string): string => {
  const filePath = path.join(process.cwd(), "posts", `${id}.md`);
  const content: string = fs.readFileSync(filePath, "utf8");
  return content;
};

const ProjectPost: React.FC<ProjectPostProps> = ({ content }) => {
  return (
    <Stack my="15vh" justifyContent="center" alignItems="center">
        <Stack w={["100vw", "95vw"]} maxW="800px" p={["20px", "20px", "24px", "24px"]}>
            <PostStyle>
                <Markdown options={MarkdownOptions}>{content}</Markdown>
            </PostStyle>
        </Stack>
    </Stack>
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
  const content = getProjectPost(id as string);

  return {
    props: {
      content,
    },
  };
};

export default ProjectPost;
