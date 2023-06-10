import { Link, Stack, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import ProjectProps from "../types/ProjectProps";
import Project from "./Project";

interface ProjectsDisplayProps {
    projects: ProjectProps[];
}

const ProjectsDisplay: React.FC<ProjectsDisplayProps> = ({ projects }) => (
  <>
    <Stack spacing={8} w="full">
      <Heading fontSize="5xl">Projects</Heading>
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={16}>
        {projects?.map((project, index) => (
          <Project
            key={index}
            index={index}
            id={project.id}
            title={project.title}
            tags={project.tags}
            imageUrl={project.imageUrl}
            description={project.description}
            date={project.date} />
        ))}
      </SimpleGrid>
    </Stack>
  </>
);

export default ProjectsDisplay;
