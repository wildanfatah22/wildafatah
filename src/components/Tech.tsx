import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiKotlin } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { SiFlutter } from "react-icons/si";

const Tech = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiKotlin className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTensorflow className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaJava className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaPython className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiFlutter className="text-7xl text-cyan-400" />
        </div>
      </div>
    </div>
  );
};

export default Tech;
