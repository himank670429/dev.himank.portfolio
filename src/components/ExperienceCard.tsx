import { WorkExperience } from "@/constant/Experience";
import { v4 as uuid } from "uuid";
export const ExperienceCard: React.FC<WorkExperience> = ({
  organization,
  location,
  roles,

  image
}) => {
  return (
    <div className="flex gap-4 bg-white dark:bg-gray-700 p-5 rounded-lg shadow-md w-full transition-transform duration-300">
      <div className="w-10 h-10 flex-shrink-0">
        <img src={image} className="object-cover rounded-lg size-full" alt={`${organization}-logo`}/>
      </div>
      <div className="flex flex-col">
        <div className="font-bold text-gray-900 dark:text-white text-lg">
          {organization}
        </div>
        {location && (
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">
            {location}
          </div>
        )}

        <div className="space-y-4">
          {roles.map((role) => (
            <div key={uuid()} className="">

              <div className="font-medium text-purple-600 dark:text-purple-400">
                {role.title}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                {role.period}
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                {role.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
