import { motion } from "framer-motion";
import javaLogo from "../assets/java.svg";
import kotlinLogo from "../assets/kotlin.svg";
import tfLogo from "../assets/tensorflow.svg";
import githubLogo from "../assets/github.svg";
import asLogo from "../assets/as.svg";
import figmaLogo from "../assets/figma.svg";
import pythonLogo from "../assets/python.svg";
import springLogo from "../assets/spring.svg";
import flutterLogo from "../assets/flutter.svg";

const logos = [
  { src: asLogo, alt: "Android Studio" },
  { src: kotlinLogo, alt: "Kotlin" },
  { src: javaLogo, alt: "Java" },
  { src: springLogo, alt: "Spring" },
  { src: flutterLogo, alt: "Flutter" },
  { src: tfLogo, alt: "TensorFlow" },
  { src: pythonLogo, alt: "Python" },
  { src: figmaLogo, alt: "Figma" },
  { src: githubLogo, alt: "Github" },
];

const Skill: React.FC = () => {
  const scrollingVariants = {
    animate: {
      x: ["0%", "-100%"], // Scroll dari 0% ke -100% dari lebar kontainer
      transition: {
        x: {
          repeat: Infinity, // Loop terus-menerus
          repeatType: "loop",
          duration: 15, // Durasi untuk satu kali scroll penuh
          ease: "linear",
        },
      },
    },
    paused: {
      x: 0, // Berhenti di posisi saat ini
      transition: {
        duration: 0.2, // Durasi ketika berhenti
      },
    },
  };

  return (
    <div id="skill" className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Skills</h1>

      {/* Carousel wrapper */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-8"
          variants={scrollingVariants}
          animate="animate"
          whileHover="paused" // Stop animation
        >
          {/* Repeat logos for the inifinite scrolling */}
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="min-w-[100px] flex justify-center">
              <motion.div
                className="rounded-2xl border-2 p-4 border-neutral-800"
                whileHover={{ scale: 1.1 }} // Zoom effect
              >
                <img
                  src={logo.src}
                  className="w-12 sm:w-16 md:w-20"
                  alt={logo.alt}
                />
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skill;
