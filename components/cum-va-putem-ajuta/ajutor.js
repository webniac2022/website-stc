import { useRef } from "react";
import {
  Image,
  motion,
  useScroll,
  useRouter,
  useParallax,
} from "../../lib/external-components";
import {
  clearTheArrayOfTypename,
  compareFunction,
} from "../../lib/helper-functions";

const Ajutor = ({ data }) => {
  const d = clearTheArrayOfTypename(data);
  const dd = d.map((el) => ({
    title: data[el].title,
    index: data[el].index,
    iconSrc: data[el].iconsrc.sourceUrl,
    iconAlt: data[el].iconsrc.altText,
  }));
  dd.sort(compareFunction);

  const router = useRouter();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y1 = useParallax(scrollYProgress, 20);
  return (
    <div
      ref={ref}
      className="w-full p-2 flex flex-row gap-2 items-center justify-center"
    >
      {dd.map((el, i) => (
        <div key={i} className="flex flex-col gap-6">
          <div className="flex flex-row items-center justify-center">
            <h4 className="text-textColors-600 font-bold xs:text-sm sm:text-2xl">
              {el.title}
            </h4>
          </div>
          <motion.div
            whileHover={{ cursor: "pointer", scale: 0.95 }}
            transition={{ type: "spring" }}
            style={{ y: y1 }}
            onClick={() => router.push("/servicii")}
          >
            <Image
              src={el.iconSrc}
              alt={el.iconAlt}
              width={72}
              height={78}
              style={{ width: "100%", height: "auto" }}
            />
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Ajutor;
