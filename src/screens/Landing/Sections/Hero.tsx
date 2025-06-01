import React from "react";
import { Mail } from "lucide-react";
import {SiGithub, SiLinkedin} from 'react-icons/si';
import {
  MY_NAME,
  MY_DESCRIPTION,
  LINKEDIN_PROFILE,
  GITHUB_PROFILE,
  EMAIL,
  MY_PHOTO,
  RESUME,
} from "@/constant/info";

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 z-0" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">

            {/* intro */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              <span className="block">Hello, I'm</span>
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {MY_NAME}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {MY_DESCRIPTION}
            </p>

            {/* resume and contact link */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href={RESUME}
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition-colors duration-300 font-medium shadow-md hover:shadow-lg flex items-center justify-center"
              >
                View My Resume
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-gray-900 rounded-full transition-colors duration-300 font-medium"
              >
                Get In Touch
              </a>
            </div>

            {/* social links */}
            <div className="flex space-x-4">
              <a
                href={GITHUB_PROFILE}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <SiGithub size={24} />
              </a>
              <a
                href={LINKEDIN_PROFILE}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <SiLinkedin size={24} />
              </a>
              <a
                href={"mailto:".concat(EMAIL)}
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* photo */}
          <div className="md:w-1/2 w-[80%] mt-12 md:mt-0">
            <div className="relative w-full h-80 md:h-96 lg:h-[500px]">
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl opacity-20 dark:opacity-10 transform rotate-3"></div>
              <div className="absolute top-0 right-4 w-full h-full bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden">
                <img
                  src={MY_PHOTO}
                  alt="Professional portrait"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
