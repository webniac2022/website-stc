import { useRef } from "react";
import {
  Image,
  motion,
  useScroll,
  useParallax,
} from "../../lib/external-components";

const data = {
  documentatii: {
    title: "Intocmire documentatii",
    iconSrc:
      "https://res.cloudinary.com/webniac/image/upload/v1665333607/STC/Asset_3_xy5zfi.svg",
    servicii: [
      "Analize de risc la securitatea fizica prin experti abilitati inscrisi in R.N.E.R.S.F;",
      "Proiectare tehnica de securitate;",
      "Proiectare sisteme de detectie si semnalizare indendiu;",
    ],
  },
  instalare: {
    title: "Instalare sisteme",
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
    title: "Servicii de mentenanta",
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
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y1 = useParallax(scrollYProgress, 20);
  return (
    <div
      ref={ref}
      className="w-full p-2 flex flex-row gap-2 items-center justify-center"
    >
      {Object.keys(data).map((d, i) => (
        <motion.div
          whileHover={{ cursor: "pointer", scale: 0.95 }}
          transition={{ type: "spring" }}
          key={i}
          style={{ y: y1 }}
        >
          <Image
            src={data[d].iconSrc}
            alt={data[d].title}
            width={72}
            height={78}
            style={{ width: "100%", height: "auto" }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Ajutor;
