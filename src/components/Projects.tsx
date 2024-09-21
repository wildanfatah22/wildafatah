import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { PROJECTS } from "../utils";

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
    null
  );

  // Filter projects based on category
  const filteredProjects = PROJECTS.filter(
    (project) =>
      selectedCategory === "all" || project.category === selectedCategory
  );

  // Find selected project details
  const selectedProject = PROJECTS.find(
    (project) => project.projectId === selectedProjectId
  );

  return (
    <div id="projects" className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>

      {/* Category filter buttons */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="relative py-10 flex flex-row text-white justify-center md:gap-32 gap-5 sm:gap-10 sm:text-xl text-md"
      >
        {["all", "mobile", "website", "ml", "ui/ux"].map((category) => (
          <motion.div
            key={category}
            className={`relative cat-item cursor-pointer ${
              selectedCategory === category ? "text-[#E8BC55]" : ""
            } hover:text-[#E8BC55]`}
            onClick={() => setSelectedCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}

            {/* Framer Motion underline */}
            {selectedCategory === category && (
              <motion.div
                layoutId="underline"
                className="absolute bottom-0 left-0 right-0 h-1 bg-[#E8BC55]"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                exit={{ opacity: 0, scaleX: 0 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Project List */}
      <div>
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.projectId || project.id} // Use projectId if available, fallback to id
              layoutId={project.projectId} // Use projectId if available, fallback to id
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="mb-8 flex flex-wrap lg:justify-center cursor-pointer"
              onClick={() => setSelectedProjectId(project.projectId)}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} // Scale effect on hover
            >
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/4"
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={300}
                  className="mb-6 rounded transition-transform duration-300"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
                  }} // Glow effect on hover
                />
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full max-w-xl lg:w-3/4"
              >
                <h6 className="mb-2 font-semibold">{project.title}</h6>
                <p className="mb-4 text-neutral-400">{project.desc}</p>
                <div className="flex flex-wrap mt-2">
                  {project.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-[#E8BC55]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProjectId(null)}
          >
            <motion.div
              className="bg-black p-8 rounded-lg shadow-lg max-w-lg w-full"
              onClick={(e) => e.stopPropagation()} // Prevent click event from closing modal
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-semibold mb-4">
                {selectedProject.title}
              </h2>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                width={500}
                height={500}
                className="mb-4 rounded"
              />
              <p className="mb-4 text-neutral-400">{selectedProject.desc}</p>
              <div className="flex flex-wrap mt-2">
                {selectedProject.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-[#E8BC55]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex gap-4">
                <a
                  href={selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-4 bg-[#B4843E] text-white rounded text-center"
                >
                  View Project
                </a>
                <button
                  className="py-2 px-4 bg-[#E8BC55] text-white rounded"
                  onClick={() => setSelectedProjectId(null)}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
