import { Link, Stack, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import ProjectProps from "../types/ProjectProps";
import Project from "./Project";

interface ProjectsDisplayProps {
    projects: ProjectProps[];
}

const ProjectsDisplay: React.FC<ProjectsDisplayProps> = ({ projects }) => {
  return (
    <>
      <Stack spacing={8} w="full">
        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={16}>
          <Stack spacing={1}>
            <Stack isInline alignItems="center" justifyContent="space-between">
              <Heading
                fontSize={{ base: "xl", md: "2xl" }}
                color="displayColor"
              >
                All Creative Works.
              </Heading>
              <NextLink href="/projects" passHref>
                <Link>
                  <Text
                    display={{ base: "block", md: "none" }}
                    fontSize={{ base: "sm", md: "xl" }}
                    color="button1"
                    _hover={{ color: "button2" }}
                  >
                    {" "}
                    Explore more &rarr;
                  </Text>
                </Link>
              </NextLink>
            </Stack>
            <Text fontSize={{ base: "md", md: "xl" }} color="textSecondary">
              Here's some of my projects that I have worked on.
            </Text>
            <NextLink href="/projects">
              <Link>
                <Text
                  display={{ base: "none", md: "block" }}
                  fontSize={{ base: "md", md: "xl" }}
                >
                  Explore more &rarr;
                </Text>
              </Link>
            </NextLink>
          </Stack>

          {projects?.map((project, index) => {
            return (
              <Project
                id={project.id}
                title={project.title}
                tags={project.tags}
                imageUrl={project.imageUrl}
                description={project.description}
                date={project.date}
              />
            );
          })}
        </SimpleGrid>

        <NextLink href="/projects">
          <Link>
            <Text textAlign="center" fontSize="2xl">
              Explore more &rarr;
            </Text>
          </Link>
        </NextLink>
      </Stack>
    </>
  );
};

export default ProjectsDisplay;
