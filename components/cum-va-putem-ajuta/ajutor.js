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
    <div ref={ref} className="grid grid-cols-6">
      {dd.map((el, i) => (
        <div className="col-span-2 flex flex-col gap-10 items-center" key={i}>
          <div>
            <h5 className="text-textColors-600 font-bold xs:text-lg sm:text-5xl">
              {el.title}
            </h5>
          </div>
          <motion.div
            style={{ y: y1 }}
            whileHover={{ scale: 0.95, cursor: "pointer" }}
            transition={{ type: "spring" }}
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
