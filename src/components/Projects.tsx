import { AnimatePresence, motion } from "framer-motion";
import { useState, FC } from "react";
import { PROJECTS } from "../utils";
import CategoryButton from "./atom/CategoryButton";
import ProjectItem from "./atom/ProjectItem";
import ProjectModal from "./atom/ProjectModal";

const Projects: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
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
          <CategoryButton
            key={category}
            category={category}
            selectedCategory={selectedCategory}
            onClick={() => setSelectedCategory(category)}
          />
        ))}
      </motion.div>

      {/* Project List */}
      <div>
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <ProjectItem
              key={project.projectId}
              project={project}
              onClick={() => setSelectedProjectId(project.projectId)}
              isSelected={selectedProjectId === project.projectId}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProjectId(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
