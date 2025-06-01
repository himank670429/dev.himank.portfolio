import React from "react";
import { Briefcase } from "lucide-react";
import { experienceTimeline } from "@/constant/Experience";
import { ExperienceCard } from "@/components/ExperienceCard";

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* heading part */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A timeline of my professional experience in software development and
            leadership.
          </p>
        </div>

        <div className="mx-auto">
          {/* work time line text */}
          <div className="flex items-center mb-6">
            <Briefcase
              size={28}
              className="text-indigo-600 dark:text-indigo-400 mr-3"
            />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Work Timeline
            </h3>
          </div>

          <div className="flex flex-col gap-4">

          {experienceTimeline.map((item) => (
            <ExperienceCard key={item.id} {...item} />
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
