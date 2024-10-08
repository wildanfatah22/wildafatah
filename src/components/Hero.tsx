import { HERO_CONTENT } from "../utils";
import profilePic from "../assets/foto_border.png";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const container = (delay: number) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: delay,
    },
  },
});

const Hero: React.FC = () => {
  return (
    <div className="pb-4 pt-20 lg:mb-35" id="about">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-2 text-4xl font-thin lg:mt-16 lg:text-6xl"
            >
              Hi!, I'am
            </motion.h1>
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-4xl font-normal tracking-tight lg:text-6xl"
            >
              <TypeAnimation
                sequence={[
                  "Wildan Fatahillah Akbar",
                  2000,
                  "",
                  1000,
                  "Wildan Fatahillah Akbar",
                  2000,
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                speed={50}
              />
            </motion.h1>
            <motion.div
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-[#F6E392] via-[#C89B41] to-[#B4843E] bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Android Developer & Machine Learning Engineer
            </motion.div>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl pt-6 pb-2 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>

            {/* Tombol Download CV */}
            <motion.a
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              href="https://drive.google.com/file/d/1n2kXADdhF56f90tn54l_5o6RlktxVlR1/view?usp=sharing"
              download
              className="my-4 inline-block rounded-lg bg-[#E8BC55] px-6 py-3 text-sm font-semibold text-white hover:bg-[#c99a42] transition-colors"
            >
              Download CV
            </motion.a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="w-80 rounded-2xl"
              src={profilePic}
              alt="wildan"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
