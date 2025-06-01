import { SkillCategory } from "@/constant/skills";

export default function SkillsCategoryCard(category: Readonly<SkillCategory>) {
  return (
     <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex items-center mb-4">
        <div className="p-2 rounded-md bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 mr-3">
          {category.icon}
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {category.title}
        </h3>
      </div>

      <ul className="flex flex-wrap gap-2 text-sm text-gray-800 dark:text-gray-200">
        {category.skills.map((skill) => (
          <li
            key={skill.name}
            className="flex gap-2 items-center bg-indigo-100 dark:bg-indigo-700/30 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded-full"
          >
            {skill.icon ? skill.icon : null}
            {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
