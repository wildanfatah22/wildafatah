import { EXPERIENCES } from "../utils";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div id="experience" className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center"
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }} // Scale effect on hover
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <motion.p
                className="mb-2 text-sm text-neutral-400"
                whileHover={{
                  color: "#E8BC55",
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }} // Hover effect for text
              >
                {experience.year}
              </motion.p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <motion.h6
                className="mb-2 font-semibold"
                whileHover={{
                  color: "#E8BC55",
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }} // Hover effect for text
              >
                {experience.role} -{" "}
                <span className="text-sm text-purple-100">
                  {experience.company}
                </span>
              </motion.h6>
              {experience.description.map((desc, index) => (
                <motion.p
                  key={index}
                  className="text-neutral-400"
                  whileHover={{
                    color: "#E8BC55",
                    scale: 1.05,
                    transition: { duration: 0.3 },
                  }} // Hover effect for text
                >
                  {desc}
                </motion.p>
              ))}
              <div className="mb-4" />
              {experience.technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-[#E8BC55]"
                  whileHover={{ scale: 1.1, transition: { duration: 0.3 } }} // Scale effect on hover
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
