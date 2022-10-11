import {
  AnimatePresence,
  motion,
  useRouter,
} from "../../lib/external-components";

const variants = {
  out: {
    opacity: 0,
    x: -40,
    transition: {
      type: "spring",
    },
  },
  in: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
    },
  },
};

const PageTransition = ({ children }) => {
  const { asPath } = useRouter();
  return (
    <div className="overflow-hidden">
      <AnimatePresence initial="false" mode="wait">
        <motion.div
          key={asPath}
          initial="out"
          animate="in"
          exit="out"
          variants={variants}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PageTransition;
