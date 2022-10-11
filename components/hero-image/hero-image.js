import { Image, motion, Link } from "../../lib/external-components";

const HeroImage = () => {
  return (
    <>
      <div className="w-full relative">
        <Image
          src="https://res.cloudinary.com/webniac/image/upload/v1660829200/STC/shutterstock_499702849_vybxhy.jpg"
          alt="STC WORLD SYSTEMS hero image"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "auto", opacity: 0.8 }}
          quality={95}
          priority
        />
      </div>
      <motion.div className="absolute right-0 p-3 w-[70%] overflow-x-hidden flex flex-col gap-2 items-end">
        <motion.h1
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", duration: 1, damping: 10, bounce: 20 }}
          className="font-bold text-right text-textColors-700 xs:text-4xl sm:text-6xl lg:text-8xl"
        >
          Securitatea ta conteaza!
        </motion.h1>
        <Link passHref href="/contact">
          <motion.button
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 0.95 }}
            transition={{
              type: "spring",
              duration: 1,
              damping: 10,
              bounce: 20,
            }}
            className="w-[120px] h-[35px] bg-components-800 rounded-lg text-white text-sm shadow-sm shadow-slate-400"
          >
            Solicita oferta
          </motion.button>
        </Link>
      </motion.div>
    </>
  );
};

export default HeroImage;
