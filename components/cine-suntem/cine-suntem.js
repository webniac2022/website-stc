import { motion, Image } from "../../lib/external-components";
import {
  clearTheArrayOfTypename,
  compareFunction,
} from "../../lib/helper-functions";

const CineSuntem = ({ data }) => {
  const d = clearTheArrayOfTypename(data);
  const dd = d.map((el) => ({
    content: data[el].content,
    index: data[el].index,
    iconSrc: data[el].iconsrc.sourceUrl,
    iconAlt: data[el].iconsrc.altText,
  }));
  dd.sort(compareFunction);
  return (
    <div className="w-full p-2 flex flex-col gap-5">
      {dd.map((d, i) => (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            type: "spring",
            damping: 10,
            bounce: 20,
          }}
          key={i}
          className="grid grid-cols-6 gap-2 rounded-lg shadow-sm shadow-slate-600 p-2"
        >
          <div className="col-span-1 flex flex-row justify-center items-center">
            <Image
              src={d.iconSrc}
              alt={d.iconAlt}
              width={72}
              height={78}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="col-span-5 flex flex-row items-center justify-start">
            <p className="xs:text-sm sm:text-2xl">{d.content}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CineSuntem;
