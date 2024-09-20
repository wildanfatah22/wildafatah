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
  return (
    <div id="skill" className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Skills</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 p-4 flex justify-center"
          >
            <div className="rounded-2xl border-2 md:border-4 p-4 md:p-6 lg:p-8 border-neutral-800">
              {/* Menyesuaikan padding dan border berdasarkan ukuran layar */}
              <img
                src={logo.src}
                className="w-12 sm:w-6 md:w-8 lg:w-10 xl:w-12"
                alt={logo.alt}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
