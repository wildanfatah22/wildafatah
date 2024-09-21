import { SiGmail, SiGithub, SiLinkedin } from "react-icons/si";

const Contact: React.FC = () => {
  return (
    <div id="contact" className="border-b border-neutral-900 pb-20">
      <h2 className="my-10 text-center text-4xl">Get in Touch</h2>

      {/* Section for contact message */}
      <div className="flex flex-col items-center justify-center text-center pt-10 lg:pt-16">
        <h3 className="text-2xl">Feel free to reach out!</h3>
        <p className="pb-6 pt-2 text-sm px-4 lg:px-0 max-w-xl">
          Want to discuss an opportunity to create something great? I’m ready
          when you are.
        </p>
      </div>

      {/* Contact links section */}
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Email section */}
          <div className="flex flex-col items-center justify-center text-center">
            <SiGmail size={48} />
            <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">
              Email
            </h2>
            <a
              href="mailto:awildanfatahillah@gmail.com"
              className="mt-2 text-[#E8BC55] border-b border-[#E8BC55] hover:text-white"
            >
              awildanfatahillah@gmail.com
            </a>
          </div>

          {/* Github section */}
          <div className="flex flex-col items-center justify-center text-center">
            <SiGithub size={48} />
            <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">
              Github
            </h2>
            <a
              href="https://github.com/wildanfatah22"
              className="mt-2 text-[#E8BC55] border-b border-[#E8BC55] hover:text-white"
            >
              github.com/wildanfatah22
            </a>
          </div>

          {/* LinkedIn section */}
          <div className="flex flex-col items-center justify-center text-center">
            <SiLinkedin size={48} />
            <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">
              LinkedIn
            </h2>
            <a
              href="https://www.linkedin.com/in/wildanfatahh22/"
              className="mt-2 text-[#E8BC55] border-b border-[#E8BC55] hover:text-white"
            >
              linkedin.com/in/wildanfatahh22
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
