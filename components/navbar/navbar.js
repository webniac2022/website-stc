import { useAppContext } from "../../context/app-context";
import { Link, motion } from "../../lib/external-components";

const Navbar = () => {
  const { tabs } = useAppContext();
  return (
    <div className="hidden md:flex flex-row gap-2">
      {tabs.map((t, i) => (
        <motion.div whileHover={{ opacity: 0.7 }} key={t.id}>
          <Link href={t.path} passHref>
            <a className="text-lg font-bold text-components-400">{t.name}</a>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default Navbar;
