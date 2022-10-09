import { Image } from "../../lib/external-components";

const data = {
  documentatii: {
    title: "Intocmire documentatii",
    iconSrc:
      "https://res.cloudinary.com/webniac/image/upload/v1660141931/STC/scott-graham-5fNmWej4tAA-unsplash_flmpnk.jpg",
    servicii: [
      "Analize de risc la securitatea fizica prin experti abilitati inscrisi in R.N.E.R.S.F;",
      "Proiectare tehnica de securitate;",
      "Proiectare sisteme de detectie si semnalizare indendiu;",
    ],
  },
  instalare: {
    title: "Instalare sisteme",
    iconSrc:
      "https://res.cloudinary.com/webniac/image/upload/v1660157672/STC/shutterstock_721549570_dpiy07.jpg",
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
      "https://res.cloudinary.com/webniac/image/upload/v1660916114/STC/shutterstock_625953083_s76owd.jpg",
    servicii: [
      "Mentenanta sisteme antiefractie;",
      "Mentenanta sisteme de supraveghere video;",
      "Mentenanta sisteme de control-acces;",
      "Mentenanta sisteme de detectie si semnalizare incendiu;",
    ],
  },
};

const Ajutor = () => {
  return (
    <div className="w-full p-2 flex flex-col gap-2">
      {Object.keys(data).map((d, i) => (
        <div key={i} className="grid grid-rows-2 bg-thirdGradient">
          <div className="row-span-1">
            <div className="grid grid-cols-6">
              <div className="col-span-2">
                <Image
                  src={data[d].iconSrc}
                  alt={data[d].title}
                  width={1920}
                  height={1080}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="col-span-4 flex flex-row items-center justify-center">
                <h2 className="text-2xl text-white font-bold">
                  {data[d].title}
                </h2>
              </div>
            </div>
          </div>
          <div className="row-span-1 flex flex-col gap-2">
            {data[d].servicii.map((dd, i) => (
              <div key={dd}>
                <p className="text-white text-xl">{dd}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Ajutor;
