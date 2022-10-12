import { motion, Image } from "../../lib/external-components";
import {
  clearTheArrayOfTypename,
  compareFunction,
} from "../../lib/helper-functions";

const DespreServiciiPreview = ({ data }) => {
  const d = clearTheArrayOfTypename(data);
  const dd = d.map((el) => ({
    title: data[el].title,
    index: data[el].index,
    iconSrc: data[el].iconSrc.sourceUrl,
    iconAlt: data[el].iconSrc.altText,
  }));
  dd.sort(compareFunction);

  return (
    <div className="w-full flex flex-col gap-5 items-center p-1 justify-center">
      {dd.map((s, i) => (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            type: "spring",
            damping: 10,
            bounce: 20,
          }}
          key={s.title}
          className="p-2 w-[95%] grid grid-cols-6 gap-5"
        >
          <div className="col-span-1">
            <Image
              src={s.iconSrc}
              alt={s.iconAlt}
              width={50}
              height={50}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="col-span-5 flex flex-row items-center justify-start">
            <p className="text-xl">{s.title}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default DespreServiciiPreview;
