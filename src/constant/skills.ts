import { Code, Server, Database, Wrench } from "lucide-react";
import React from "react";

import {
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiRedux, 
  SiReduxsaga,
  SiPython,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiFirebase,
  SiMongodb,
  SiGit,
  SiGithub,
  SiFigma,
  SiAwslambda,
  SiAmazons3,
} from "react-icons/si";

interface Skill {
  name: string;
  icon?: React.ReactNode;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

export const SKILLS_CATEGORY: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    icon: React.createElement(Code, { size: 32 }),
    skills: [
      { name: "React", icon: React.createElement(SiReact) },
      { name: "React Native", icon: React.createElement(SiReact) },
      { name: "JavaScript", icon: React.createElement(SiJavascript) },
      { name: "TypeScript", icon: React.createElement(SiTypescript) },
      { name: "Tailwindcss", icon: React.createElement(SiTailwindcss) },
      { name: "Redux", icon: React.createElement(SiRedux) },
      { name: "Redux Saga", icon: React.createElement(SiReduxsaga) },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: React.createElement(Server, { size: 32 }),
    skills: [
      { name: "Python", icon: React.createElement(SiPython) },
      { name: "Django", icon: React.createElement(SiDjango) },
      { name: "Node.js", icon: React.createElement(SiNodedotjs) },
      { name: "Express", icon: React.createElement(SiExpress) },
      { name: "Firebase", icon: React.createElement(SiFirebase) },
      { name: "Lambda", icon: React.createElement(SiAwslambda) },
    ],
  },
  {
    id: "database",
    title: "Database",
    icon: React.createElement(Database, { size: 32 }),
    skills: [
      { name: "MongoDB", icon: React.createElement(SiMongodb) },
      { name: "PostgreSQL", icon: React.createElement(SiPostgresql) },
    ],
  },
  {
    id: "other",
    title: "Other Skills",
    icon: React.createElement(Wrench, { size: 32 }),
    skills: [
      { name: "Git", icon: React.createElement(SiGit) },
      { name: "GitHub", icon: React.createElement(SiGithub) },
      { name: "figma", icon: React.createElement(SiFigma) },
      { name: "AWS S3", icon: React.createElement(SiAmazons3) },
    ],
  },
];

export const SKILLS_SECTION_DESCRIPTION =
  "I've worked with a variety of technologies and frameworks to build responsive and scalable applications.";
