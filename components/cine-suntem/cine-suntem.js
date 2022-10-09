import {
  useParallax,
  useScroll,
  motion,
  Image,
} from "../../lib/external-components";
import { useRef } from "react";

const data = [
  {
    content:
      "Suntem partenerul dumneavoastra de incredere in domeniul securitatii!",
    iconSrc:
      "https://res.cloudinary.com/webniac/image/upload/v1665301011/STC/Asset_2_suford.svg",
  },
  {
    content:
      "Suntem profesionisti, seriosi si dedicati nevoilor dumneavoastra!",
    iconSrc:
      "https://res.cloudinary.com/webniac/image/upload/v1665302167/STC/Asset_1_txz57l.svg",
  },
  {
    content:
      "Detinem licenta IGPR cu nr. 5067/T din 04.07.2019 sa efectuam urmatoarele activitati - proiectare, instalare, modificare si intretinere a componentelor sau sistemelor de alarmare impotriva efractiei;",
    iconSrc:
      "https://res.cloudinary.com/webniac/image/upload/v1665301011/STC/Asset_3_ypjwub.svg",
  },
  {
    content:
      "Detinem autorizatia Seria A Nr. 9987 din 16.07.2020 pentru efectuarea urmatoarelor activitati - Proiectare a sistemelor si instalatiilor de semnalizare , alarmare si alertare in caz de incendiu;",
    iconSrc:
      "https://res.cloudinary.com/webniac/image/upload/v1665301011/STC/Asset_4_k4mg7v.svg",
  },
  {
    content:
      "Detinem autorizatia Seria A Nr. 9986 din 16.07.2020 pentru efectuarea urmatoarelor activitati - Instalare și intretinere a sistemelor si instalatiilor de semnalizare, alarmare si alertare in caz de incendiu;",
    iconSrc:
      "https://res.cloudinary.com/webniac/image/upload/v1665301011/STC/Asset_5_yzim6l.svg",
  },
  {
    content:
      "Detinem majoritatea certificarilor din domeniul securitatii precum - Manager de securitate, Evaluator de risc la securitatea fizica, Proiectant sisteme de securitate, Inginer sisteme de securitate, Tehnician sisteme de securitate, Responsabil cu protectia datelor cu caracter personal;",
    iconSrc:
      "https://res.cloudinary.com/webniac/image/upload/v1665301011/STC/Asset_6_kiqxv5.svg",
  },
];

const variants = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

const CineSuntem = () => {
  return (
    <div className="w-full p-2 flex flex-col gap-5">
      {data.map((d, i) => (
        <div
          key={i}
          className="grid grid-cols-6 gap-2 rounded-lg shadow-sm shadow-slate-600 p-2"
        >
          <div className="col-span-1 flex flex-row justify-center items-center">
            <Image
              src={d.iconSrc}
              alt={d.content}
              width={72}
              height={78}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="col-span-5 flex flex-row items-center justify-start">
            <p className="xs:text-sm sm:text-2xl">{d.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CineSuntem;
