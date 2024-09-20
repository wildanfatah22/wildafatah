import javaLogo from "../assets/java.svg";
import kotlinLogo from "../assets/kotlin.svg";
import tfLogo from "../assets/tensorflow.svg";
import githubLogo from "../assets/github.svg";
import asLogo from "../assets/as.svg";
import figmaLogo from "../assets/figma.svg";
import pythonLogo from "../assets/python.svg";
import springLogo from "../assets/spring.svg";
import flutterLogo from "../assets/flutter.svg";

const Tech = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={kotlinLogo} className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={javaLogo} className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={tfLogo} className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={springLogo} className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={flutterLogo} className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={figmaLogo} className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={githubLogo} className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={asLogo} className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={pythonLogo} className="text-7xl text-cyan-400" />
        </div>
      </div>
    </div>
  );
};

export default Tech;
