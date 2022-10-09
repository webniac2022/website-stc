import { HiMenuAlt2 } from "react-icons/hi";
import { useAppContext } from "../../context/app-context";

const SidedrawerTrigger = () => {
  const { toggleSideDrawer } = useAppContext();
  return (
    <div className="md:hidden">
      <HiMenuAlt2
        onClick={toggleSideDrawer}
        className="w-[40px] h-[40px] fill-components-900 hover:cursor-pointer hover:opacity-[0.7]"
      />
    </div>
  );
};

export default SidedrawerTrigger;
