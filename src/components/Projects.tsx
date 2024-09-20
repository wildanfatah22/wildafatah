import { AnimatePresence, motion } from "framer-motion";
import { PROJECTS } from "../utils";
import { useState } from "react";

const Projects: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter projects based on category
  const filteredProjects = PROJECTS.filter(
    (project) =>
      selectedCategory === "all" || project.category === selectedCategory
  );

  return (
    <div id="projects" className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Projects</h2>

      {/* Category filter buttons */}
      <div className="py-10 flex flex-row text-white justify-center md:gap-32 gap-5 sm:gap-10 sm:text-xl text-md">
        {["all", "mobile", "website", "ml", `ui/ux`].map((category) => (
          <div
            key={category}
            className={`cat-item ${
              selectedCategory === category ? "text-[#E8BC55]" : ""
            } cursor-pointer hover:text-[#E8BC55]`}
            onClick={() => setSelectedCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </div>
        ))}
      </div>

      {/* Project List */}
      <div>
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layoutId={project.projectId}
              layout
              initial={{ opacity: 0, y: 50 }} // Initial state for animation
              animate={{ opacity: 1, y: 0 }} // Animation when entering
              exit={{ opacity: 0, y: -50 }} // Animation when exiting
              transition={{ duration: 0.5 }} // Duration for smooth transition
              className="mb-8 flex flex-wrap lg:justify-center"
            >
              <div className="w-full lg:w-1/4">
                <img
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={300}
                  className="mb-6 rounded"
                />
              </div>
              <div className="w-full max-w-xl lg:w-3/4">
                <h6 className="mb-2 font-semibold">{project.title}</h6>
                <p className="mb-4 text-neutral-400">{project.desc}</p>
                {project.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;
