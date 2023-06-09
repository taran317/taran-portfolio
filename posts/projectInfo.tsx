import ProjectProps from "../types/ProjectProps";

const projectInfo: { [key: string]: ProjectProps } = {
  exposurepedia: {
    id: "exposurepedia",
    title: "Exposurepedia",
    date: "2023-05-29",
    description:
      "A web app that allows users to search for and learn about the effects of various chemicals on the human body.",
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
      "A web app that allows users to search for and learn about the effects of various chemicals on the human body.",
    imageUrl: "https://i.ibb.co/GTxHdt7/membrane.png",
    tags: ["C++", "MATLAB", "Javascript"],
    github: "https://github.com/hack4impact-upenn/exposurepedia",
  },
  ripple: {
    id: "ripple",
    title: "Ripple Interactive",
    date: "2022-09-16",
    description:
      "A web app that allows users to search for and learn about the effects of various chemicals on the human body.",
    imageUrl:
      "https://i.ibb.co/M8sFWxS/Screen-Shot-2023-06-07-at-3-24-02-PM.png",
    tags: ["Swift", "Combine", "SwiftUI", "Django", "PostgreSQL"],
    github: "https://github.com/hack4impact-upenn/exposurepedia",
  },
  "sports-betting": {
    id: "sports-betting",
    title: "Sports Betting",
    date: "2023-05-11",
    description:
      "A web app that allows users to search for and learn about the effects of various chemicals on the human body.",
    imageUrl: "https://images2.imgbox.com/1c/cb/MXbDvsAc_o.png",
    tags: ["MySQL (AWS RDS)", "Node.js", "Express", "React", "Chakra UI"],
    github: "https://github.com/hack4impact-upenn/exposurepedia",
  },
  pennos: {
    id: "pennos",
    title: "PennOS",
    date: "2023-05-18",
    description:
      "A web app that allows users to search for and learn about the effects of various chemicals on the human body.",
    imageUrl: "https://images2.imgbox.com/e4/75/aieXmTkD_o.png",
    tags: ["C"],
    github: "https://github.com/hack4impact-upenn/exposurepedia",
  },
};

export default projectInfo;
