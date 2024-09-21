import { motion } from "framer-motion";
import { Project } from "../../types/iproject";

interface ProjectItemProps {
  project: Project;
  onClick: () => void;
  isSelected: boolean;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  project,
  onClick,
  isSelected,
}) => {
  return (
    <motion.div
      className={`mb-8 flex flex-wrap lg:justify-center cursor-pointer ${
        isSelected ? "" : ""
      }`}
      onClick={onClick}
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} // Scale effect on hover
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
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
  );
};

export default ProjectItem;
