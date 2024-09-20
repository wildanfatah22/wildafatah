import { CONTACT } from "../utils";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h2 className="my-10 text-center text-4xl">Get in Touch</h2>
      <div className="text-center tracking-tighter">
        <a href="#" className="border-b">
          {CONTACT.email}
        </a>
        <a href="#" className="border-b">
          {CONTACT.linkedIn}
        </a>
      </div>
    </div>
  );
};

export default Contact;
