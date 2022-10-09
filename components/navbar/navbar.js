import { useAppContext } from "../../context/app-context";
import { Link, motion } from "../../lib/external-components";

const Navbar = () => {
  const { tabs } = useAppContext();
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, type: "spring", delayChildren: 0.5 },
      }}
      className="hidden md:flex flex-row gap-2"
    >
      {tabs.map((t, i) => (
        <motion.div
          key={t.id}
          whileHover={{
            opacity: 0.7,
            scale: 0.95,
            transition: { type: "spring" },
            cursor: "pointer",
          }}
        >
          <Link href={t.path} passHref>
            <motion.a className="rounded-lg shadow-sm shadow-gray-400 p-2 text-lg text-textColors-700">
              {t.name}
            </motion.a>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Navbar;
