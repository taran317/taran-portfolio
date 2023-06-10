import ProjectProps from "../types/ProjectProps";

const projectInfo: { [key: string]: ProjectProps } = {
  exposurepedia: {
    id: "exposurepedia",
    title: "Exposurepedia",
    date: "2023-05-29",
    description:
      "An encyclopedia of exposure therapies that streamlines the process of researching and sharing exposure therapies.",
    imageUrl: "https://images2.imgbox.com/d8/ce/JUuAq44r_o.png",
    tags: [
      "MongoDB",
      "Node.js",
      "Express",
      "React",
      "Material-UI",
      "Typescript",
    ],
    github: "https://github.com/hack4impact-upenn/exposurepedia",
  },
  mathworks: {
    id: "mathworks",
    title: "MathWorks (current)",
    date: "2023-06-07",
    description:
      "Summer 2023 Internship; developing new features on MATLAB/Simulink's Core Assessments team.",
    imageUrl: "https://i.ibb.co/GTxHdt7/membrane.png",
    tags: ["C++", "MATLAB", "Javascript"],
    github: "",
  },
  ripple: {
    id: "ripple",
    title: "Ripple Interactive",
    date: "2022-09-16",
    description:
      "An iOS social media app that aims to foster meaningful connections between college students through spontaneous communication.",
    imageUrl:
      "https://i.ibb.co/M8sFWxS/Screen-Shot-2023-06-07-at-3-24-02-PM.png",
    tags: ["Swift", "Combine", "SwiftUI", "Django", "PostgreSQL"],
    github: "",
  },
  "sports-betting": {
    id: "sports-betting",
    title: "Sports Betting",
    date: "2023-05-11",
    description:
      "A resource that aims to provide users with access to comprehensive NBA statistics for teams, players, and games, enabling them to gain valuable insights and make informed decisions for sports betting.",
    imageUrl: "https://images2.imgbox.com/1c/cb/MXbDvsAc_o.png",
    tags: ["MySQL (AWS RDS)", "Node.js", "Express", "React", "Chakra UI"],
    github: "https://github.com/taran317/sports-betting",
  },
  pennos: {
    id: "pennos",
    title: "PennOS",
    date: "2023-05-18",
    description:
      "A UNIX-like operating system which involved developing a kernel (including a priority scheduler), FAT filesystem, and shell.",
    imageUrl: "https://images2.imgbox.com/e4/75/aieXmTkD_o.png",
    tags: ["C"],
    github: "",
  },
};

export default projectInfo;
