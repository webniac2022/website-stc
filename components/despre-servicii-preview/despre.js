import { motion, Image } from "../../lib/external-components";

const serviciiPreview = [
  {
    title: "Evaluare de risc la securitatea fizica",
    iconSrc:
      "https://res.cloudinary.com/webniac/image/upload/v1665214381/STC/evaluare_de_risc_ybsvo2.svg",
    iconAlt: "Evaluare de risc",
  },
  {
    title: "Proiectare tehnica de securitate",
    iconSrc:
      "https://res.cloudinary.com/webniac/image/upload/v1665214630/STC/proiectare_detectie_dzwyf5.svg",
    iconAlt: "Proiectare tehnica de securitate",
  },
  {
    title: "Proiectare tehnica detectie si semnalizare incendiu",
    iconSrc:
      "https://res.cloudinary.com/webniac/image/upload/v1665214813/STC/proiectare_detectie_vrhrql.svg",
    iconAlt: "Proiectare detectie si semnalizare incendiu",
  },
  {
    title: "Instalare sisteme antiefractie",
    iconSrc:
      "https://res.cloudinary.com/webniac/image/upload/v1665214382/STC/instalare_antiefractie_zywdou.svg",
    iconAlt: "Instalare sisteme antiefractie",
  },
  {
    title: "Instalare sisteme de supraveghere video",
    iconSrc:
      "https://res.cloudinary.com/webniac/image/upload/v1665151920/STC/Asset_1_b7vtv9.svg",
    iconAlt: "Instalare sisteme de supraveghere video",
  },
  {
    title: "Instalare sisteme de detectie si semnalizare incendiu",
    iconSrc:
      "https://res.cloudinary.com/webniac/image/upload/v1665215033/STC/detectie_incendiu_unadpb.svg",
    iconAlt: "Instalare sisteme de detectie si semnalizare incendiu",
  },
  {
    title: "Instalare sisteme de control acces",
    iconSrc:
      "https://res.cloudinary.com/webniac/image/upload/v1665214379/STC/control_acces_ima1ss.svg",
    iconAlt: "Instalare sisteme de control acces",
  },
  {
    title: "Instalare sisteme de interfonie/videointerfonie",
    iconSrc:
      "https://res.cloudinary.com/webniac/image/upload/v1665214382/STC/interfonie_ceicmr.svg",
    iconAlt: "Instalare sisteme de interfonie/videointerfonie",
  },
  {
    title: "Retele structurale date/voce",
    iconSrc:
      "https://res.cloudinary.com/webniac/image/upload/v1665214379/STC/retele_structurale_zh1tgd.svg",
    iconAlt: "Retele structurale date/voce",
  },
  {
    title:
      "Servicii de mentenanta antiefractie, supraveghere video, control acces, detectie si semnalizare incendiu",
    iconSrc:
      "https://res.cloudinary.com/webniac/image/upload/v1665214379/STC/mentenanta_securitate_phpx9b.svg",
    iconAlt:
      "Servicii de mentenanta antiefractie, supraveghere video, control acces, detectie si semnalizare incendiu",
  },
];
const DespreServiciiPreview = () => {
  return (
    <div className="w-full flex flex-col gap-5 items-center p-1 justify-center">
      {serviciiPreview.map((s, i) => (
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
