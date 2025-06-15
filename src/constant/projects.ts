export interface ProjectType {
  id: number;
  title: string;
  description: string;
  image: string;
  demoLink: string;
  githubLink: string;
  tags: string[];
}

export const PROJECT_SECTION_DESCRIPTION = "A collection of my recent work showcasing my skills and experience in building digital products."

export const PROJECTS : ProjectType[] = [
  {
    id: 1,
    title: "Sem-5 website",
    description:
      "A simple website that consists of all the acedemic books, syllabus, pyqs, youtube video playlist for covering up syllabus for semester 5",
    image:
      require("@/assets/images/projects/sem-5.png"),
    tags: ["React", "Tailwindcss", "Vite"],
    demoLink: "https://sem-5.onrender.com",
    githubLink: "https://github.com/himank670429/sem5-website",
  },
  {
    id: 2,
    title: "Sem-6 website",
    description:
      "A simple website that consists of all the acedemic books, syllabus, pyqs and embedded youtube playlist for covering up syllabus for semester 6",
    image:
      require("@/assets/images/projects/sem-6.png"),
    tags: ["React", "Tailwindcss", "Vite", 'firebase'],
    demoLink: "https://sem-6.onrender.com",
    githubLink: "https://github.com/himank670429/sem-6",
  },
  {
    id: 3,
    title: "Tetris",
    description:
      "Enjoy a faithful remake of the iconic 1980s arcade puzzle game. Rotate, slide, and drop classic tetrominoes with smooth controls and retro visuals. Built with Python and Pygame for a nostalgic but modern experience.",
    image:
      require("@/assets/images/projects/tetris.png"),
    tags: ["python", "pygame"],
    demoLink: "https://himank670429.itch.io/tetris",
    githubLink: "https://github.com/himank670429/tetris",
  },
];
