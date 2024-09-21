import { motion } from "framer-motion";
import { Project } from "../../types";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => (
  <motion.div
    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClose}
  >
    <motion.div
      className="bg-black p-8 rounded-lg shadow-lg max-w-lg w-full"
      onClick={(e) => e.stopPropagation()} // Prevent click event from closing modal
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0.8 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
      <img
        src={project.image}
        alt={project.title}
        width={500}
        height={500}
        className="mb-4 rounded"
      />
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
      <div className="mt-4 flex gap-4">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2 px-4 bg-[#B4843E] text-white rounded text-center"
        >
          View Project
        </a>
        <button
          className="py-2 px-4 bg-[#E8BC55] text-white rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </motion.div>
  </motion.div>
);

export default ProjectModal;
