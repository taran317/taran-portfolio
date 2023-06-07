import * as fs from "fs";
import path from "path";
import ProjectProps from "../types/ProjectProps";

const projectInfo: { [key: string]: ProjectProps } = {
  exposurepedia: {
    id: "exposurepedia",
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
  },
  mathworks: {
    id: "mathworks",
    title: "MathWorks",
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
  },
  exposurepedia3: {
    id: "exposurepedia3",
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
  },
};

export default projectInfo;
