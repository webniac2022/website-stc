import { Image } from "../../lib/external-components";
import Navbar from "../navbar/navbar";
import Sidedrawer from "../sidedrawer/sidedrawer";

const Header = () => {
  return (
    <div className="grid grid-cols-6">
      <div className="col-span-2 sm:col-span-1 flex flex-col gap-1">
        <div>
          <Image
            src="https://res.cloudinary.com/webniac/image/upload/v1659537920/STC/logo_t8yr6g.svg"
            alt="Logo STC WORLD SYSTEMS SRL"
            width={675}
            height={517}
          />
        </div>
        <div className="flex flex-row justify-center items-center">
          <h2 className="text-sm sm:text-lg font-bold text-gray-700 text-center">
            STC WORLD SYSTEMS
          </h2>
        </div>
      </div>
      <div className="col-span-4 sm:col-span-5 flex flex-row items-center justify-end pr-5">
        <Navbar />
        <Sidedrawer />
      </div>
    </div>
  );
};

export default Header;
