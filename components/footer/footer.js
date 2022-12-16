import { Image, Link } from "../../lib/external-components";
import { FaFacebookSquare } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { useCookieContext } from "../../context/cookie-context";

const Footer = () => {
  const { dispatch } = useCookieContext();
  return (
    <div className="w-full flex-col mt-16 p-2">
      <div className="grid grid-cols-12">
        <div className="xs:col-span-5 sm:col-span-3 flex flex-col gap-2">
          <div className="flex flex-row justify-center items-center">
            <Image
              src="https://res.cloudinary.com/webniac/image/upload/v1659537920/STC/logo_t8yr6g.svg"
              alt="Logo STC WORLD SYSTEMS SRL"
              width={675}
              height={517}
            />
          </div>
          <div className="flex flex-row justify-center items-center">
            <h6 className="text-center font-bold text-textColors-700 text-xl">
              STC WORLD SYSTEMS
            </h6>
          </div>
        </div>
        <div className="xs:col-span-7 sm:col-span-9 flex flex-col gap-2 justify-center items-start">
          <div className="flex flex-row justify-start">
            <button
              onClick={() =>
                dispatch({ type: "cookieSettingsScreen", payload: true })
              }
            >
              Politica de confidentialitate
            </button>
          </div>
          <div className="flex flex-row items-center justify-center gap-2">
            <Link href="https://www.facebook.com" passHref>
              <a target="_blank">
                <FaFacebookSquare className="w-[20px] h-[20px] fill-textColors-900" />
              </a>
            </Link>
            STC SYSTEMS
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2 items-center">
              <div>
                <MdEmail className="w-[20px] h-[20px] fill-textColors-900" />
              </div>
              <div>
                <h6>office@stcsystems.ro</h6>
              </div>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <div>
                <MdPhone className="w-[20px] h-[20px] fill-textColors-900" />
              </div>
              <div>
                <h6 className="text-textColors-900">0742.409.403</h6>
                <h6 className="text-textColors-900">0749.046.366</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-10">
        <h6 className="text-textColors-900 text-sm text-center">
          &copy; STC WORLD SYSTEMS - All rights reserved
        </h6>
        <h6 className="text-textColors-900 text-sm text-center">
          {new Date().getFullYear()}
        </h6>
        <h6 className="text-textColors-900 text-sm text-center">
          Website realizat de{" "}
          <Link href="https://www.webniac.ro">
            <a target="_blank">
              <span className="font-bold">WEBNIAC.</span>
            </a>
          </Link>
        </h6>
      </div>
    </div>
  );
};

export default Footer;
