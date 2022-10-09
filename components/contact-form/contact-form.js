import { motion } from "../../lib/external-components";
import { MdCelebration } from "react-icons/md";
import { useForm } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM);
  return (
    <div className="w-full mb-5 flex flex-col gap-16 items-center">
      {/* form */}
      {state.succeeded ? (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="rounded-md bg-black p-5 flex flex-col justify-center items-center gap-5"
        >
          <h2 className="text-xl font-bold text-white">
            Multumim pentru incredere!
          </h2>
          <MdCelebration className="w-[30px] h-[30px] fill-green-400" />
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, x: -100, y: -50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            bounce: 1,
            damping: 10,
          }}
          className="w-[90vw] sm:w-[60vw] md:w-[60vw] lg:w-[50vw] flex justify-center"
        >
          <form
            onSubmit={handleSubmit}
            className="flex-grow gap-6 flex flex-col items-center"
          >
            <div className="flex flex-col gap-2 w-[80%]">
              <label className="text-textColors-600 text-xl" htmlFor="nume">
                Nume
              </label>
              <motion.input
                whileFocus={() => {
                  return { scale: 0.95, border: "2px solid cyan" };
                }}
                className="p-3 rounded-lg text-dark focus:outline-none bg-thirdGradient text-white"
                id="nume"
                name="nume"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2 w-[80%]">
              <label className="text-textColors-600 text-xl" htmlFor="email">
                Email
              </label>
              <motion.input
                whileFocus={{ scale: 0.95, border: "2px solid cyan" }}
                className="p-3 rounded-lg focus:outline-none bg-thirdGradient text-white"
                id="email"
                name="email"
                type="email"
              />
            </div>
            <div className="flex flex-col gap-2 w-[80%]">
              <label className="text-xl text-textColors-600" htmlFor="mesaj">
                Mesaj
              </label>
              <motion.textarea
                whileFocus={{ scale: 0.95, border: "2px solid cyan" }}
                className="p-3 rounded-lg text-dark focus:outline-none bg-thirdGradient text-white"
                id="mesaj"
                name="mesaj"
                aria-multiline={true}
                rows={4}
              />
            </div>
            <div className="flex flex-col p-3">
              <motion.button
                whileHover={{
                  scale: 0.95,
                  opacity: 0.65,
                }}
                type="submit"
                disabled={state.submitting}
                className="font-bold shadow-sm shadow-textColors-50 text-white bg-black w-28 p-1 rounded-lg text-center hover:cursor-pointer"
              >
                Trimite
              </motion.button>
            </div>
          </form>
        </motion.div>
      )}
    </div>
  );
};

export default ContactForm;
