import React from "react";
import { SKILLS_CATEGORY, SKILLS_SECTION_DESCRIPTION } from "@/constant/skills";
import SkillsCategoryCard from "@/components/Skills";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {SKILLS_SECTION_DESCRIPTION}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILLS_CATEGORY.map((category) => (
            <SkillsCategoryCard {...category} key={category.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
