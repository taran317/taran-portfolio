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
    imageUrl:
      "https://post.healthline.com/wp-content/uploads/2021/03/therapist-and-patient-exposure-therapy-technique-1200x628-facebook.jpg",
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
    title: "MathWorks (in progress)",
    date: "2021-01-01",
    description:
      "A web app that allows users to search for and learn about the effects of various chemicals on the human body.",
    imageUrl: "https://i.ibb.co/GTxHdt7/membrane.png",
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
  ripple: {
    id: "ripple",
    title: "Ripple Interactive",
    date: "2021-01-01",
    description:
      "A web app that allows users to search for and learn about the effects of various chemicals on the human body.",
    imageUrl:
      "https://i.ibb.co/M8sFWxS/Screen-Shot-2023-06-07-at-3-24-02-PM.png",
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
  "sports-betting": {
    id: "sports-betting",
    title: "Sports Betting",
    date: "2021-01-01",
    description:
      "A web app that allows users to search for and learn about the effects of various chemicals on the human body.",
    imageUrl: "https://www.gaming.net/wp-content/uploads/2022/02/nba-bet.jpg",
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
  pennos: {
    id: "pennos",
    title: "PennOS",
    date: "2021-01-01",
    description:
      "A web app that allows users to search for and learn about the effects of various chemicals on the human body.",
    imageUrl: "https://i.ibb.co/HK9zWfM/pennos.png",
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
