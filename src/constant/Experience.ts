export interface ExperienceRole {
  title: string;
  period: string;
  location?: string;
  description: string;
}
export interface WorkExperience {
  id: string;
  organization: string;
  location?: string;
  roles: ExperienceRole[];
  image: any;
}

export const experienceTimeline: WorkExperience[] = [
  {
    id: "exp4",
    organization: "0101 Digit All",
    location: "Remote",
    image: require("@/assets/images/organization/0101digitall.jpeg"),
    roles: [
      {
        title: "Junior Full Stack Developer",
        period: "Mar 2025 - Present",
        description:
          "Developing 1IPD - The internal development platform for team of developer/organizations where they can work together will all the tools required to collaborate on real-time projects/industry scale produtcs.",
      },
      {
        title: "Full Stack Developer Intern",
        period: "Dec 2024 - Mar 2025",
        description:
          "Developing 1IPD - The internal development platform for team of developer/organizations where they can work together will all the tools required to collaborate on real-time projects/industry scale produtcs.",
      },
    ],
  },
  {
    id: "exp3",
    organization: "Zingroll",
    location: "Delhi, India",
    image: require("@/assets/images/organization/zingroll.jpeg"),
    roles: [
      {
        title: "Software Developer",
        period: "Sep 2024 - Dec 2024",
        description:
          "Working on internal software and managing the department.",
      },
      {
        title: "Web Developer",
        period: "Jul 2024 - Aug 2024",
        description:
          `Worked on a Pookie Admin Panel for an AI-powered meme creation platform, where I:\n\n
            - Built and optimized features for managing user feeds and AI meme templates.\n
            - Developed responsive and user-friendly interfaces using React and TailwindCSS.\n
            - Integrated AWS S3 for web hosting and SNS for user notifications and other micro servives`,

      },
    ],
  },
  {
    id: "exp2",
    organization: "Sanganika - DDUC",
    location: "Remote",
    image: require("@/assets/images/organization/sanganika.jpeg"),
    roles: [
      {
        title: "Frontend Web Developer",
        period: "Dec 2023 - May 2024",
        description: "",
      },
    ],
  },
  {
    id: "exp1",
    organization: "Axe Consultancy services LLC",
    location: "Remote",
    image: require("@/assets/images/organization/axe-consultancy.jpeg"),
    roles: [
      {
        title: "Python Developer intern",
        period: "Oct 2023 - Nov 2023",
        description: "",
      },
    ],
  },
];
