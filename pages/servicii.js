import { Image, motion } from "../lib/external-components";

const data = {
  title: "Servicii",
  subtitle: "Venim in sprijinul clientilor cu urmatoarele servicii...",
  heroImg:
    "https://res.cloudinary.com/webniac/image/upload/v1661801466/STC/businessman-logging-his-tablet_esffai.jpg",
};

const ServiciiPage = () => {
  return (
    <div className="flex flex-col gap-2 p-2 overflow-x-hidden">
      <div className="flex flex-col gap-1">
        <h2 className="pl-2 xs:text-5xl sm:text-8xl font-bold mt-10 text-textColors-600">
          {data.title}
        </h2>
        <h6 className="pl-2 xs:text-sm sm:text-sm font-bold text-components-400">
          {data.subtitle}
        </h6>
      </div>
      <div className="grid grid-cols-6">
        <div className="col-span-3"></div>
        <div className="col-span-3">
          <motion.div
            initial={{ x: 200, rotate: 180 }}
            animate={{ x: 0, rotate: 0 }}
            transition={{ type: "spring" }}
            className="[mask:url(https://res.cloudinary.com/webniac/image/upload/v1659537920/STC/logo_t8yr6g.svg)]"
          >
            <Image
              src={data.heroImg}
              alt="hero image"
              width={1920}
              height={1080}
              style={{ width: "100%", height: "auto" }}
              priority
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServiciiPage;
