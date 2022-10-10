import ContactForm from "../components/contact-form/contact-form";

const Contact = () => {
  return (
    <div className="flex flex-col gap-2 p-2">
      <div>
        <h2 className="p-2 xs:text-5xl sm:text-8xl font-bold mt-10 mb-10 text-textColors-600">
          Contact
        </h2>
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
