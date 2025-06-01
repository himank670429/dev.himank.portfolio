import React from "react";
import {
  PROJECTS,
  PROJECT_SECTION_DESCRIPTION,
} from "@/constant/projects";
import { ProjectCard } from "@/components/Projects";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {PROJECT_SECTION_DESCRIPTION}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard {...project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;