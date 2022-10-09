import { IoMdArrowDropup } from "react-icons/io";
import { useRouter, motion, useScroll } from "../../lib/external-components";
import { useAppContext } from "../../context/app-context";
import { useEffect } from "react";

const Fab = ({ children }) => {
  const { showFab, setShowFab } = useAppContext();
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest > 350) {
        setShowFab(true);
      } else setShowFab(false);
    });
  }, []);

  const router = useRouter();
  return (
    <>
      {children}
      <motion.div
        onClick={() => router.push("/")}
        className={`${
          !showFab
            ? "hidden"
            : "fixed bottom-10 border-1 border-black right-5 z-20 w-14 h-14 rounded-[50%] flex flex-row justify-center items-center bg-black shadow-sm shadow-components-50 hover:cursor-pointer animate-pulse"
        }`}
      >
        <IoMdArrowDropup className="fill-[black] dark:fill-[white]" size={25} />
      </motion.div>
    </>
  );
};

export default Fab;
