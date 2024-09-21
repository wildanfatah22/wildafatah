import { LOGOS } from "../utils";
import { motion } from "framer-motion";

const Skill: React.FC = () => {
  return (
    <div id="skill" className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Skills
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {LOGOS.map((logo, index) => (
          <motion.div
            key={index}
            className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 p-4 flex justify-center"
            whileHover={{
              scale: 1.1,
              transition: {
                duration: 0.5, // Duration of the rocking animation
                repeat: Infinity,
                repeatType: "mirror",
              },
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="rounded-2xl border-2 md:border-4 p-4 md:p-6 lg:p-8 border-neutral-800"
              whileHover={{
                boxShadow: "0 0 10px #B4843E", // Neon glow effect
                borderColor: "#B4843E", // Neon border color
              }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={logo.src}
                className="w-12 sm:w-16 md:w-8 lg:w-10 xl:w-12"
                alt={logo.alt}
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skill;
