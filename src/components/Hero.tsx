import { HERO_CONTENT } from "../utils";
import profilePic from "../assets/foto_border.png";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35" id="hero">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items center lg:items-start">
            <h1 className="pb-16 text-4xl font-thin tracking-tight lg:mt-16 lg:text-6xl">
              Wildan Fatahillah Akbar
            </h1>
            <div className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Android Developer
            </div>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img className="w-80 rounded-2xl" src={profilePic} alt="wildan" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
