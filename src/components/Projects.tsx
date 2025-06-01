import { ProjectType } from "@/constant/projects";
import { ExternalLink, Github} from "lucide-react";

export function ProjectCard(project: Readonly<ProjectType>) {
  return (
    <div
      key={project.id}
      className="bg-white flex flex-col dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2"
    >
      <div className="h-60 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        {/* title */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>

        {/* description */}
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>

        {/* skills  */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* links */}
        <div className="flex mt-auto gap-5">
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400"
          >
            <ExternalLink size={20} />
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400"
          >
            <Github size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
