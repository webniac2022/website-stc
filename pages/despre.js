const data = {
  title: "Despre noi",
  paragraphs: [
    "Am pornit la drum in anul 2019, decisi sa oferim clientilor nostri servicii de securitate la standarde cat mai inalte. Valorile dupa care ne ghidam sunt seriozitate, profesionalism si dedicare. Dorim sa gasim solutii acolo unde altii inceteaza sa caute!",
    "Venim in sprijinul dumneavoastra cu o experienta de peste 10 ani in domeniul securitatii, timp in care am evoluat si am reusit sa ne conturam o viziune clara asupra domeniului si a strategiilor pe care dorim sa le implementam si sa le urmam.",
  ],
  certificari: [
    "Evaluator de risc la securitatea fizica",
    "Manager de securitate",
    "Inginer in securitate",
    "Proiectant de securitate",
    "Proiectant sisteme de detectie si semnalizare incendiu",
    "Tehnician sisteme de securitate",
    "Responsabil cu protectia datelor cu caracter personal",
  ],
  autorizatii: [
    "Detinem licenta IGPR cu nr. 5067/T din 04.07.2019 sa efectuam urmatoarele activitati - proiectare, instalare, modificare si intretinere a componentelor sau sistemelor de alarmare impotriva efractiei;",
    "Detinem autorizatia Seria A Nr. 9987 din 16.07.2020 pentru efectuarea urmatoarelor activitati - Proiectare a sistemelor si instalatiilor de semnalizare , alarmare si alertare in caz de incendiu;",
    "Detinem autorizatia Seria A Nr. 9986 din 16.07.2020 pentru efectuarea urmatoarelor activitati - Instalare si intretinere a sistemelor si instalatiilor de semnalizare, alarmare si alertare in caz de incendiu;",
  ],
};

const DesprePage = () => {
  return (
    <div className="w-full flex flex-col gap-2">
      <div>
        <h2 className="p-2 xs:text-5xl sm:text-8xl font-bold mt-10 mb-10 text-textColors-600">
          {data.title}
        </h2>
      </div>
      <div className="flex flex-col gap-2">
        {data.paragraphs.map((d, i) => (
          <div key={i}>
            <p className="text-textColors-600 p-2">{d}</p>
          </div>
        ))}
      </div>
      <div>
        <h3 className="mt-10 mb-10 p-2 xs:text-4xl sm:text-7xl font-bold text-textColors-600">
          Certificari
        </h3>
      </div>
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 gap-4 p-2">
        {data.certificari.map((d, i) => (
          <div
            key={i}
            className="col-span-1 rounded-lg shadow-sm shadow-black flex flex-row justify-center items-center p-2"
          >
            <h5 className="text-center font-bold xs:text-sm sm:text-xl text-textColors-700">
              {d}
            </h5>
          </div>
        ))}
      </div>
      <div>
        <h3 className="mt-10 mb-10 p-2 xs:text-4xl sm:text-7xl font-bold text-textColors-600">
          Autorizatii
        </h3>
      </div>
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 gap-4 p-2">
        {data.autorizatii.map((d, i) => (
          <div
            key={i}
            className="col-span-1 rounded-lg shadow-sm shadow-black flex flex-row justify-center items-center p-2"
          >
            <h5 className="text-center font-bold xs:text-sm sm:text-xl text-textColors-700">
              {d}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesprePage;
