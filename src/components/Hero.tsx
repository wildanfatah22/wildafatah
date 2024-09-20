import { HERO_CONTENT } from "../utils";
import profilePic from "../assets/foto_border.png";

const Hero: React.FC = () => {
  return (
    <div className="pb-4 pt-20 lg:mb-35" id="about">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items center lg:items-start">
            <h1 className="pb-2 text-4xl font-thin lg:mt-16 lg:text-6xl">
              Hi!, I'am
            </h1>
            <h1 className="pb-16 text-4xl font-normal tracking-tight lg:text-6xl">
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
