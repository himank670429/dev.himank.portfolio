import React from "react";
import { Mail, MapPin } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import {
  WEBSITE_NAME,
  GITHUB_PROFILE,
  LINKEDIN_PROFILE,
  EMAIL,
  LOCATION,
  FOOTER_DESCRIPTION,
  RESUME,
} from "@/constant/info";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <a
              href="#home"
              className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent"
            >
              {WEBSITE_NAME}
            </a>
            <p className="mt-2 text-gray-400 md:max-w-md mr-2">{FOOTER_DESCRIPTION}</p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
            <div>
              <h3 className="font-semibold text-white mb-2">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    Skills
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-2">More Info</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href={RESUME}
                    className="text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-2">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400">
                  <Mail size={14} className="mr-2 flex-shrink-0" />
                  <a
                    href="mailto:contact@example.com"
                    className="hover:text-indigo-400 transition-colors"
                  >
                    {EMAIL}
                  </a>
                </li>
                <li className="flex items-center text-gray-400">
                  <MapPin size={14} className="mr-2 flex-shrink-0" />
                  {LOCATION}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © {currentYear} {WEBSITE_NAME}. All rights reserved.
          </div>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href={GITHUB_PROFILE}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <SiGithub size={20} />
            </a>
            <a
              href={LINKEDIN_PROFILE}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <SiLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
