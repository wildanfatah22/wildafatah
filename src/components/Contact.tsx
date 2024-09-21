import { CONTACT } from "../utils";
import { SiGmail } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";

const Contact: React.FC = () => {
  return (
    <div id="contact" className="border-b border-neutral-900 pb-20">
      <h2 className="my-10 text-center text-4xl">Get in Touch</h2>
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center justify-center text-center">
            <SiGmail size={48} />
            <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">
              Email
            </h2>
            <p className="mt-2 text-[#E8BC55]">awildanfatahillah@gmail.com</p>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <SiGithub size={48} />
            <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">
              Github
            </h2>
            <a
              href="https://github.com/wildanfatah22"
              className="mt-2 text-[#E8BC55] border-b border-[#E8BC55]"
            >
              wildanfatah22
            </a>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <SiLinkedin size={48} />
            <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">
              LinkedIn
            </h2>
            <a
              href="https://www.linkedin.com/in/wildanfatahh22/"
              className="mt-2 text-[#E8BC55] border-b border-[#E8BC55]"
            >
              in/wildanfatahh22
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
