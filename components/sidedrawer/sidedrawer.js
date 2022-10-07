import { HiMenuAlt2 } from "react-icons/hi";

const Sidedrawer = () => {
  return (
    <div className="md:hidden">
      <HiMenuAlt2 className="w-[40px] h-[40px] fill-components-500 hover:cursor-pointer hover:opacity-[0.7]" />
    </div>
  );
};

export default Sidedrawer;
