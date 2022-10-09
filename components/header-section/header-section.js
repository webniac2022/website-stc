import { motion } from "../../lib/external-components";

const HeaderSection = ({ title }) => {
  return (
    <div className="mt-10 mb-10 p-3">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 2,
            type: "spring",
          },
          scale: [0.95, 0.9, 1],
        }}
        className="font-bold text-textColors-600 xs:text-5xl sm:text-8xl"
      >
        {title}
      </motion.h2>
    </div>
  );
};

export default HeaderSection;
