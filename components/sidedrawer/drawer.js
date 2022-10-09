import { useAppContext } from "../../context/app-context";
import { motion, Link } from "../../lib/external-components";
import { AiOutlineClose } from "react-icons/ai";

const Drawer = () => {
  const { showSideDrawer, toggleSideDrawer, tabs } = useAppContext();

  return (
    <motion.div
      initial={{ opacity: 0, width: "0%", height: "0%" }}
      animate={{ opacity: 1, width: "100%", height: "100%" }}
      transition={{
        duration: 0.5,
        type: "spring",
        bounce: 1,
        stiffness: 100,
      }}
      layout
      className={
        showSideDrawer
          ? "top-0 left-0 fixed w-0 h-0 bg-white z-30 overflow-hidden"
          : "hidden"
      }
    >
      <div className="w-full flex flex-col gap-5">
        <div className="flex flex-row justify-end p-10">
          <AiOutlineClose
            onClick={toggleSideDrawer}
            className="w-[30px] h-[30px] fill-components-900 hover:opacity-[0.8] hover:cursor-pointer"
          />
        </div>
        <div>
          <ul className="flex flex-col items-center justify-center mt-[15vh] gap-5">
            {tabs.map((t, i) => (
              <li key={t.id} onClick={toggleSideDrawer}>
                <Link href={t.path} passHref>
                  <a className="text-lg font-bold text-textColors-900">
                    {t.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Drawer;
