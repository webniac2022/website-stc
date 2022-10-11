import { useRef } from "react";
import {
  Image,
  motion,
  useScroll,
  useRouter,
  useParallax,
} from "../../lib/external-components";

const data = {
  documentatii: {
    title: "Documentatii",
    iconSrc:
      "https://res.cloudinary.com/webniac/image/upload/v1665333607/STC/Asset_3_xy5zfi.svg",
    servicii: [
      "Analize de risc la securitatea fizica prin experti abilitati inscrisi in R.N.E.R.S.F;",
      "Proiectare tehnica de securitate;",
      "Proiectare sisteme de detectie si semnalizare indendiu;",
    ],
  },
  instalare: {
    title: "Instalari",
    iconSrc:
      "https://res.cloudinary.com/webniac/image/upload/v1665333607/STC/Asset_1_flxvks.svg",
    servicii: [
      "Instalare sisteme antiefractie - cablate, wireless, smart;",
      "Instalare sisteme de supraveghere video;",
      "Instalare sisteme de control acces;",
      "Realizare retele structurale, curenti-slabi, date-voce;",
      "Instalare sisteme de detectie si semnalizare incendiu;",
    ],
  },
  mentenanta: {
    title: "Mentenanta",
    iconSrc:
      "https://res.cloudinary.com/webniac/image/upload/v1665333607/STC/Asset_2_uvhgbp.svg",
    servicii: [
      "Mentenanta sisteme antiefractie;",
      "Mentenanta sisteme de supraveghere video;",
      "Mentenanta sisteme de control-acces;",
      "Mentenanta sisteme de detectie si semnalizare incendiu;",
    ],
  },
};

const Ajutor = () => {
  const router = useRouter();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y1 = useParallax(scrollYProgress, 20);
  return (
    <div
      ref={ref}
      className="w-full p-2 flex flex-row gap-2 items-center justify-center"
    >
      {Object.keys(data).map((d, i) => (
        <div key={i} className="flex flex-col gap-6">
          <div className="flex flex-row items-center justify-center">
            <h4 className="text-textColors-600 font-bold xs:text-sm sm:text-2xl">
              {data[d].title}
            </h4>
          </div>
          <motion.div
            whileHover={{ cursor: "pointer", scale: 0.95 }}
            transition={{ type: "spring" }}
            style={{ y: y1 }}
            onClick={() => router.push("/servicii")}
          >
            <Image
              src={data[d].iconSrc}
              alt={data[d].title}
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
