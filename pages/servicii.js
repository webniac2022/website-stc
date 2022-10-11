import { Image, motion, useRouter } from "../lib/external-components";

const data = {
  title: "Servicii",
  subtitle: "Venim in sprijinul clientilor cu urmatoarele servicii...",
  heroImg:
    "https://res.cloudinary.com/webniac/image/upload/v1661801466/STC/businessman-logging-his-tablet_esffai.jpg",
  servicii: {
    documentatii: {
      iconSrc:
        "https://res.cloudinary.com/webniac/image/upload/v1665333607/STC/Asset_3_xy5zfi.svg",
      analize: {
        title: "1. Analize de risc la securitatea fizica",
        paragraphs: [
          "Atentie! Analiza de risc la securitatea fizica este obligatorie conform Legii, neefectuarea acesteia rezulta in amenzi usturatoare!",
          "Ce este analiza de risc?",
          "Analiza de risc la securitatea fizica este documentatia realizata de catre experti abilitati, inscrisi in R.N.E.R.S.F(Registrul National al Evaluatorilor de Risc la Securitatea Fizica). Aceasta reprezinta fundamentul adoptarii masurilor de securitate in orice unitate;",
          "Adoptarea masurilor de securitate se realizeaza in conformitate cu analiza de risc efectuata de unitate, prin structuri de specialitate sau prin experti abilitati;",
          "Cine este obligat sa efectueze analiza de risc la securitatea fizica?",
          "Conform Legii 333/2003 urmatoarele unitati sunt obligate sa asigure paza acestora si sa adopte masuri de securitate in formele prevazute de Lege:",
          "- Ministerele si celelalte organe de specialitate ale administratiei publice centrale si locale;",
          "- Regiile autonome;",
          "- Companiile si societatile nationale;",
          "- Institutele nationale de cercetare-dezvoltare;",
          "- Societatile comerciale, indiferent de natura capitalului social;",
          "- Alte organizatii care detin bunuri ori valori cu orice titlu;",
          "Va stam la dispozitie prin personal abilitat si calificat in realizarea analizelor de risc la securitatea fizica! Expertii nostri sunt inscrisi in R.N.E.R.S.F si au la activ peste 300 de analize efectuate!",
        ],
      },
      securitate: {
        title: "2. Proiecte tehnice de securitate",
        paragraphs: [
          "Proiectul tehnic de securitate se intocmeste de catre personalul avizat al societatilor autorizate IGPR. Proiectul se intocmeste inaintea instalarii sistemelor de securitate, in orice unitate. Acesta contine toate caracteristicile tehnice cu privire la sistemele ce urmeaza a fi instalate in unitate;",
          "Conform Legii, sunt supuse avizarii politiei proiectele sistemelor de alarmare destinate urmatoarelor categorii de obiective:",
          "- Unitati de interes strategic;",
          "- Unitati sau institutii de interes public;",
          "- Institutii de creditare, unitati postale, puncte de schimb valutar, case de amanet, unitati profilate pe activitati cu bijuterii din metale sau pietre pretioase;",
          "- Magazine de arme si munitii;",
          "- Statii de comercializare a carburantilor/combustibililor;",
          "- Sali de exploatare a jocurilor de noroc;",
          "- Centre de procesare;",
          "- Casierii furnizori si servicii de utilitati;",
          "- Puncte de colectare ori de depozitare numerar cu plafon de peste 10.000 euro sau echivalent;",
          "- Depozite in care se afla bunuri cu o valoare mai mare de 10.000 euro sau echivalent;",
          "Venim in sprijinul dumneavoastra cu personal calificat si avizat in vederea realizarii proiectelor tehnice de securitate. Expertii nostri au la activ peste 400 de proiecte realizate;",
        ],
      },
      incendiu: {
        title: "3. Proiecte tehnice detectie si semnalizare incendiu",
        paragraphs: [
          "Proiectul sistemului de detectie si semnalizare incendiu se intocmeste de catre personalul avizat al firmelor autorizate IGSU. Acesta se intocmeste inaintea instalarii sistemelor de detectie si semnalizare si contine toate caracteristicile tehnice cu respectarea Legislatiei si a Normelor in vigoare;",
          "Va stam la dispozitie cu personal calificat si avizat in realizarea proiectelor tehnice de detectie si semnalizare incendiu;",
        ],
      },
    },
    instalare: {
      iconSrc:
        "https://res.cloudinary.com/webniac/image/upload/v1665333607/STC/Asset_1_flxvks.svg",
      antiefractie: {
        title: "1. Instalare sisteme antiefractie",
        paragraphs: [
          "Sistemele antiefractie sunt solutia ideala in protejarea bunurilor detinute de unitati sau a locuintelor proprii;",
          "Niciodata nu a fost mai usor sa iti securizezi bunurile si valorile ca si in prezent, datorita solutiilor eficiente care au fost dezvoltate recent;",
          "Cand discutam despre configurarea unui sistem antiefractie trebuie sa luam in considerare mai multi factori precum: topografia spatiului, valorile care trebuiesc protejate, trasee de cablu (daca este cazul) si bineinteles utilitatea acestuia. Un sistem antiefractie trebuie sa isi faca treaba ireprosabil, NU trebuie instalat doar 'de design';",
          "Datorita avantului tehnologic recent, acum exista variante multiple pentru toate tipurile de situatii;",
          "Pentru locatiile unde traseele de cablu nu reprezinta o problema alegerea unui sistem antiefractie CABLAT este justificata, in caz contrar recomandarea noastra sunt sistemele wireless SMART;",
        ],
        smart: {
          title: "SISTEME SMART",
          p: [
            "Sunt ultimul trend in materie de tehnologie;",
            "Sunt wireless - nu necesita nici un traseu de cablu si nu implica nici un deranj din partea Beneficiarului;",
            "Au la baza o tehnologie dezvoltata recent, sunt fiabile, componentele au un design minimalist placut (se potrivesc de minune in orice ambianta), avem posibilitatea de a alege culoarea echipamentelor (ALB sau NEGRU), in functie de preferinte;",
            "Control absolut de la distanta al sistemului prin aplicatie mobila dedicata cu meniu intuitiv (armari/dezarmari, status alarme, istoric incidente etc);",
            "Sistemul incorporeaza standarde de securitate premiate la nivel global;",
            "Pot fi conectate in dispeceratele firmelor de monitorizare si interventie, fara probleme;",
            "Componentele sistemului au o autonomie ridicata datorita acumulatorilor din interior - Notificari push in aplicatie in cazul caderilor de 2.20V sau a epuizarii acumulatorilor;",
            "Putem incorpora o multitudine de componente precum: senzori de prezenta, senzori de fum, detectori de soc, detectori de geam spart, telecomenzi/butoane de panica, detectori de inundatii, detectori cu camera foto incorporata etc;",
            "In opinia noastra sunt solutia ideala, in momentul de fata, deoarece le testam de ceva vreme si ruleaza fara probleme;",
          ],
        },
        cablate: {
          title: "SISTEME CABLATE",
          p: [
            "Sunt sistemele antiefractie traditionale. Reprezinta in continuare o alternativa sigura in protectia spatiilor;",
            "Putem incorpora o multitudine de componente precum: senzori de prezenta, senzori de soc, senzori de fum, senzori de geam spart, butoane si telecomenzi de panica etc;",
            "Prin adaugarea anumitor module, sistemul poate fi controlat si de la distanta din aplicatie mobila sau are posibilitatea transmiterii de mesaje text pe un dispozitiv mobil;",
            "Inconvenientul sistemelor cablate este reprezentat de traseele de cablu necesarea pentru conectarea centralei de alarma cu restul componentelor;",
            "Va stam la dispozitie si va consiliem pe tot parcursul procesului astfel ca dumneavoastra sa luati cea mai buna decizie in privinta alegerii celui mai potrivit sistem pentru dumneavoastra;",
          ],
        },
      },
      video: {
        title: "2. Instalare sisteme de supraveghere video",
        paragraphs: [
          "Sistemele de supraveghere video au devenit rapid o necesitate, in ziua de astazi. Sistemul de supraveghere ne usureaza viata si ne ofera privilejul de a lua parte la evenimente, chiar daca, fizic, nu suntem prezenti. Beneficiile unui sistem de supraveghere sunt multiple - au rol de protectie, de descurajare a eventualelor acte cu tenta ilicita si de supraveghere a activitatilor (Activitati, care, in trecut, erau foarte greu de realizat chiar imposibil, in anumite situatii);",
          "In alegerea unui sistem de supraveghere video trebuie sa se tina cont de mai multi factori precum: topografia spatiului care necesita supraveghere, distantele, luminozitatea existenta in zona respectiva, zona de acoperire, numarul de zile de stocare a imaginilor preluate de camere si multe altele;",
          "Configurarea unui sistem de supraveghere care sa fie optim si tehnic functional pe o perioada indelungata de timp, necesita experienta si o buna cunoastere a acestor parametri extrem de subtili si importanti;",
          "Inaintea instalarii unui sistem de supraveghere video este primordial sa ne intrebam care este rolul specific al acestuia (dorim o supraveghere panoramica a unei zone, dorim citirea numerelor de masini, dorim supravegherea traficului monetar a unei zone de tranzactionare, sunt multe astfel de intrebari si situatii concrete la care un profesionist va poate oferi solutiile pertinente);",
          "Cand discutam de sisteme de supraveghere, acestea pot fi divizate in doua categorii: Sisteme CCTV ANALOGICE (sistemele clasice) si sisteme IP;",
        ],
        ip: {
          title: "SISTEME IP",
          p: [
            "Sistemele IP reprezinta noul trend si foarte posibil viitorul standard in materie de sisteme de supraveghere;",
            "Sistemele IP sunt net superioare celor clasice(ANALOGICE);",
            "Vizualizarea imaginilor preluate de camere se realizeaza usor din aplicatii dedicate de oriunde te-ai afla;",
            "Camerele IP sunt camere digitale care primesc si transmit inregistrari prin intermediul unei retele IP;",
            "Camerele IP pot inregistra imagini in high definition la o rezolutie de pana la 16MP, bineinteles, in functie de specificatiile camerei si de model;",
            "Sistemele IP sunt mult mai elegant de instalat si nu presupun un cablaj atat de complex ca si varianta analogica;",
            "Unele modele prevazute cu POE(Power Over Ethernet) permit alimentarea camerelor direct prin cablul de retea nefiind necesare surse de alimentare distincte precum la sistemele analogice;",
            "Datorita soft-urilor dezvoltate recent si a inteligentei artificale, camerele IP sunt utilizate cu succes in aplicatii precum citirea placutelor de inmatriculare, recunoasterea persoanelor, etc;",
            "La prima vedere camerele IP sunt mai scumpe decat camerele ANALOGICE dar daca este sa comparam",
            "anumite aspecte precum eliminarea surselor de alimentare, reducerea timpului de instalare direct proportional cu reducerea pretului manoperei vom constata ca diferenta intre un sistem IP si unul ANALOGIC devine destul de redusa;",
          ],
        },
        analogice: {
          title: "SISTEME ANALOGICE",
          p: [
            "Un sistem de supraveghere ANALOGIC este un sistem video care functioneaza CCTV(Closed Circuit Television)",
            "Sistemele analogice raman o varianta destul de pertinenta si utila;",
            "Un mare procent din sistemele de supraveghere functionale, la nivel global, in momentul de fata, sunt sisteme analogice;",
            "Pentru sisteme restranse sau simpliste, instalarea unui sistem ANALOGIC ramane o varianta pertinenta;",
            "Multe, dintre camerele analogice existente pe piata, in momentul de fata, au o rezolutie de inregistrare destul de buna si o calitate a imaginii mai mult decat satisfacatoare;",
            "Pentru aplicatii mai simple, raman o varianta foarte buna si din prisma pretului;",
            "Venim in sprijinul dumneavoastra si va oferim consilierea necesara in alegerea celor mai bune solutii!",
          ],
        },
      },
      incendiu: {
        title: "3. Instalare sisteme de detectie si semnalizare incendiu",
        p: [
          "Sistemele de detectie si semnalizare incendiu sunt absolut necesare si utile deoarece efectele izbucnirii unui incediu pot deveni rapid catastrofale si pot rezulta in pierderi de vieti omenesti;",
          "Sistemele de detectie si semnalizare incendiu sunt divizate in doua categorii si anume CONVENTIONALE sau ADRESABILE. Cele CONVENTIONALE sunt utilizate in aplicatii mai restranse iar varianta ADRESABILA este utilizata in cazul spatiilor mai mari si a aplicatiilor mai complexe;",
          "Conform Legislatiei in vigoare echiparea cu instalatii de detectie si semnalizare incendiu este obligatorie pentru urmatoarele compartimente de incendiu, constructii si incaperi:",
          "- toate categoriile de constructii (compartimente de incendiu, incaperi) prevazute, conform reglementarilor specifice cu instalatii automate",
          "- de stingere cu apa, tip sprinklere deschise (drencere) sau pulverizatoare, cu ceata de apa si substante special, in conditii in care actionarea acestora se face prin astfel de instalatii;",
          "- constructii inchise de importanta exceptionala si deosebita (A, B), incadrate conform legislatiei specifice, neechipate cu instalatii automate de stingere a incendiilor, precum si cele echipate",
          "- la care este necesara semnalizarea incendiilor inainte de intrarea in functiune a instalatiilor automate de stingere;",
          "- cladiri civile avand destinatia:",
          "- cladiri administrative cu aria construita mai mare de 600m2 sau mai mult de patru niveluri supraterane sau cu peste 300 persoane;",
          "- cladiri de cultura cu mai mult de trei niveluri supraterane sau cu aria construita mai mare de 600 m2 cu peste 300 persoane;",
          "- cladiri, compartimente de incendiu si incaperile pentru comert cu mai mult de doua niveluri sau cu aria construita mai mare de 600m2;",
          "- cladiri de sport inchise cu capacitatea mai mare de 300 de persoane;",
          "- cladiri de cult cu mai mult de trei niveluri supraterane si aria construita mai mare de 600m2 sau cu peste 300 de persoane;",
          "- cladiri inalte, cu exceptia locuintelor, si foarte inalte indiferent de destinatie;",
          "- cladiri cu sali aglomerate;",
          "- cladiri/constructii avand destinatia de invatamant cu mai mult de 200 persoane sau cu aria construita mai mare de 600m2 si mai mult de doua niveluri;",
          "- cladiri cu destinatia de cazare a elevilor, studentilor, sportivilor cu mai mult de 100 persoane sau cu aria construita mai mare de 600m2 si mai mult de trei niveluri;",
          "- cladiri montane cu capacitati maxime simultane mai mari de 100 paturi si trei niveluri supraterane;",
          "- structuri de primire turistica cu functiuni de cazare cu mai mult de 10 camere sau 50 de paturi (la cladirile cu mai putin de 10 camere sau 50 de paturi se prevad detectoare autonome de alarmare la fum)",
          "- cladiri de ingrijire a sanatatii cu paturi stationare, supravegherea, ingrijirea sau cazarea/adapostirea copiilor prescolari, batrani, persoane cu dizabilitati sau lipsite de adapost, indiferent de numarul persoanelor",
          "- cladiri de sport inchise cu capacitatea de primire mai mare de 300 de persoane;",
          "- cladiri civile subterane cu aria desfasurata mai mare de 600m2 si doua sau mai multe niveluri subterane;",
          "- parcaje subterane potrivit reglementarilor specifice si parcaje supraterane inchise cu mai mult de trei niveluri si aria construita mai mare de 600m2;",
          "- cladiri de productie si/sau depozitare (inclusiv incaperi sau spatii de productie si depozitare amplasate in cladiri) cu risc de incendiu foarte mare si mare, cu aria desfasurata",
          "- mai mare de 500m2 , precum si cele cu risc mijlociu cu aria desfasurata mai mare de 800m2;",
          "- depozite cu stive avand inaltimea mai mare de 4m;",
          "- cladiri de productie si/sau depozitare monobloc sau blindate, indiferent de riscul de incendiu;",
          "Venim in sprijinul dumneavoastra si la acest capitol, pentru detalii suplimentare si consiliere, nu ezitati sa ne contactati!",
        ],
      },
      acces: {
        title: "4. Instalare sisteme de control-acces",
        p: [
          "Sistemele de control-acces sunt utile in situatiile cand se doreste restrictionarea accesului pe anumite zone sau permiterea accesului doar anumitor persoane prin intermediul cititoarelor pe baza de cartela/tag, cod de acces sau a cititoarelor biometrice;",
          "Sistemele de control acces pot fi proiectate sa fie de mici dimensiuni cu cititoare stand-alone sau cu cititoare conectate la o centrala de control-acces si controlate dintr-un soft dedicat in vederea generarii de rapoarte detaliate cu privire la activitatea pe anumite zone de interes;",
          "Sistemele de control acces sunt extrem de utile in spatii de birouri, depozite, hale, incaperi cu valori sau documente importante etc;",
          "Utilizate in paralel cu alte solutii de securitate precum sisteme antiefractie, sisteme video, riscul unor brese de securitate scade exponential;",
          "Solutiile existente in acest moment pe piata ne permit sa configuram un sistem de control-acces SMART, foarte bine gandit de la inceput si va pot ajuta sa economisiti resurse importante si in acelasi timp sa eficientizati procesele din cadrul companiei dumneavoastra;",
          "Va stam la dispozitie in vederea implementarii solutiilor optime care sa corespunda nevoilor dumneavoastra!",
        ],
      },
      interfonie: {
        title: "5. Instalare sisteme de interfonie/videointerfonie",
        p: [
          "Sistemele de interfonie/videointerfonie sunt absolut necesare la blocurile de locuinte, case indivduale sau sedii de birouri;",
          "Solutiile deja existente pe piata si-au facut si continua sa isi faca treaba foarte bine;",
          "In ultimul timp, interfoanele sunt mai putin utilizate in detrimentul videointerfoanelor care au cunoscut o scadere a preturilor si au crescut in randul preferintelor utilizatorilor;",
          "Va stam la dispozitie in alegerea celor mai bune echipamente, potrivite nevoilor dumneavoastra;",
        ],
      },
      retele: {
        title: "6. Retele structurale date-voce",
        p: [
          "Cablarea structurata reprezinta garantia functionarii impecabile a sistemului informatic din locatia dumneavoastra;",
          "Pentru o buna functionare a activitatilor demarate intr-o firma este nevoie de o infrastructura puternica! Venim in sprijinul dumneavoastra cu servicii de cablari structurate si retele de date-voce astfel incat dumneavoastra si firma dumnevoastra sa puteti prospera in continuare!",
        ],
      },
    },
    mentenanta: {
      iconSrc:
        "https://res.cloudinary.com/webniac/image/upload/v1665333607/STC/Asset_2_uvhgbp.svg",
      title: "Servicii de mentenanta",
      paragraphs: [
        "Oferim servicii de mentenanta a sistemelor antiefractie, supraveghere video, control-acces, semnalizare si detectie incendiu;",
        "Serviciile de mentenanta lunara si detaliile aferente se discuta concret in functie de sistemele dumneavoastra;",
      ],
    },
  },
};

const ServiciiPage = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-2 p-2 overflow-x-hidden">
      <div className="grid grid-cols-6">
        <div className="col-span-3">
          <div className="flex flex-col gap-1">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                type: "spring",
                damping: 10,
                bounce: 20,
              }}
              className="pl-2 xs:text-5xl sm:text-8xl font-bold mt-10 text-textColors-600"
            >
              {data.title}
            </motion.h2>
            <motion.h6
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                type: "spring",
                damping: 10,
                bounce: 20,
              }}
              className="pl-2 xs:text-sm sm:text-sm font-bold text-components-400"
            >
              {data.subtitle}
            </motion.h6>
            <div className="grid grid-cols-3 p-2">
              <motion.div
                whileHover={{ scale: 0.95, cursor: "pointer" }}
                onClick={() => router.push("#documentatii")}
                transition={{ type: "spring" }}
                className="col-span-1"
              >
                <Image
                  src={data.servicii.documentatii.iconSrc}
                  alt={data.servicii.documentatii.analize.title}
                  width={1920}
                  height={1080}
                  style={{ width: "100%", height: "auto" }}
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 0.95, cursor: "pointer" }}
                onClick={() => router.push("#instalare")}
                transition={{ type: "spring" }}
                className="col-span-1"
              >
                <Image
                  src={data.servicii.instalare.iconSrc}
                  alt={data.servicii.instalare.antiefractie.title}
                  width={1920}
                  height={1080}
                  style={{ width: "100%", height: "auto" }}
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 0.95, cursor: "pointer" }}
                transition={{ type: "spring" }}
                className="col-span-1"
                onClick={() => router.push("#mentenanta")}
              >
                <Image
                  src={data.servicii.mentenanta.iconSrc}
                  alt={data.servicii.mentenanta.title}
                  width={1920}
                  height={1080}
                  style={{ width: "100%", height: "auto" }}
                />
              </motion.div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden col-span-3 p-2 flex flex-row items-center justify-center">
          <motion.div
            initial={{ x: 200, rotate: 180 }}
            animate={{ x: 0, rotate: 0 }}
            transition={{ type: "spring", stiffness: 65 }}
            className="[mask:url(https://res.cloudinary.com/webniac/image/upload/v1659537920/STC/logo_t8yr6g.svg)] w-[80%] h-[80%]"
          >
            <Image
              src={data.heroImg}
              alt="hero image"
              width={1920}
              height={1080}
              style={{ width: "100%", height: "auto" }}
              priority
            />
          </motion.div>
        </div>
      </div>
      <div className="p-2 bg-firstGradient rounded-lg flex flex-col gap-5">
        <div id="documentatii">
          <h2 className="text-white font-bold xs:text-4xl sm:text-7xl underline underline-offset-8">
            Intocmire documentatii
          </h2>
        </div>
        <div>
          <h3 className="text-white font-bold xs:text-2xl sm:text-5xl">
            {data.servicii.documentatii.analize.title}
          </h3>
        </div>
        <div className="flex flex-col gap-4">
          {data.servicii.documentatii.analize.paragraphs.map((p, i) => (
            <div key={i}>
              <p className="text-textColors-900 text-sm">{p}</p>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-white font-bold xs:text-2xl sm:text-5xl">
            {data.servicii.documentatii.securitate.title}
          </h3>
        </div>
        <div className="flex flex-col gap-4">
          {data.servicii.documentatii.securitate.paragraphs.map((p, i) => (
            <div key={i}>
              <p className="text-textColors-900 text-sm">{p}</p>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-white font-bold xs:text-2xl sm:text-5xl">
            {data.servicii.documentatii.incendiu.title}
          </h3>
        </div>
        <div className="flex flex-col gap-4">
          {data.servicii.documentatii.incendiu.paragraphs.map((p, i) => (
            <div key={i}>
              <p className="text-textColors-900 text-sm">{p}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="p-2 bg-secondGradient rounded-lg flex flex-col gap-5">
        <div id="instalare">
          <h2 className="text-white font-bold xs:text-4xl sm:text-7xl underline underline-offset-8">
            Instalare sisteme
          </h2>
        </div>
        <div>
          <h3 className="text-white font-bold xs:text-2xl sm:text-5xl">
            {data.servicii.instalare.antiefractie.title}
          </h3>
        </div>
        <div className="flex flex-col gap-4">
          {data.servicii.instalare.antiefractie.paragraphs.map((p, i) => (
            <div key={i}>
              <p className="text-textColors-900 text-sm">{p}</p>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-white font-bold xs:text-xl sm:text-4xl">
            {data.servicii.instalare.antiefractie.cablate.title}
          </h3>
        </div>
        <div className="flex flex-col gap-4">
          {data.servicii.instalare.antiefractie.cablate.p.map((pp, i) => (
            <div key={i}>
              <p className="text-textColors-900 text-sm">{pp}</p>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-white font-bold xs:text-xl sm:text-4xl">
            {data.servicii.instalare.antiefractie.smart.title}
          </h3>
        </div>
        <div className="flex flex-col gap-4">
          {data.servicii.instalare.antiefractie.smart.p.map((pp, i) => (
            <div key={i}>
              <p className="text-textColors-900 text-sm">{pp}</p>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-white font-bold xs:text-2xl sm:text-5xl">
            {data.servicii.instalare.video.title}
          </h3>
        </div>
        <div className="flex flex-col gap-4">
          {data.servicii.instalare.video.paragraphs.map((p, i) => (
            <div key={i}>
              <p className="text-textColors-900 text-sm">{p}</p>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-white font-bold xs:text-xl sm:text-4xl">
            {data.servicii.instalare.video.ip.title}
          </h3>
        </div>
        <div className="flex flex-col gap-4">
          {data.servicii.instalare.video.ip.p.map((pp, i) => (
            <div key={i}>
              <p className="text-textColors-900 text-sm">{pp}</p>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-white font-bold xs:text-xl sm:text-4xl">
            {data.servicii.instalare.video.analogice.title}
          </h3>
        </div>
        <div className="flex flex-col gap-4">
          {data.servicii.instalare.video.analogice.p.map((pp, i) => (
            <div key={i}>
              <p className="text-textColors-900 text-sm">{pp}</p>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-white font-bold xs:text-2xl sm:text-5xl">
            {data.servicii.instalare.incendiu.title}
          </h3>
        </div>
        <div className="flex flex-col gap-4">
          {data.servicii.instalare.incendiu.p.map((pp, i) => (
            <div key={i}>
              <p className="text-textColors-900 text-sm">{pp}</p>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-white font-bold xs:text-2xl sm:text-5xl">
            {data.servicii.instalare.acces.title}
          </h3>
        </div>
        <div className="flex flex-col gap-4">
          {data.servicii.instalare.acces.p.map((pp, i) => (
            <div key={i}>
              <p className="text-textColors-900 text-sm">{pp}</p>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-white font-bold xs:text-2xl sm:text-5xl">
            {data.servicii.instalare.interfonie.title}
          </h3>
        </div>
        <div className="flex flex-col gap-4">
          {data.servicii.instalare.interfonie.p.map((pp, i) => (
            <div key={i}>
              <p className="text-textColors-900 text-sm">{pp}</p>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-white font-bold xs:text-2xl sm:text-5xl">
            {data.servicii.instalare.retele.title}
          </h3>
        </div>
        <div className="flex flex-col gap-4">
          {data.servicii.instalare.retele.p.map((pp, i) => (
            <div key={i}>
              <p className="text-textColors-900 text-sm">{pp}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="p-2 bg-thirdGradient rounded-lg flex flex-col gap-5">
        <div id="mentenanta">
          <h2 className="text-white font-bold xs:text-4xl sm:text-7xl underline underline-offset-8">
            Mentenanta sisteme
          </h2>
        </div>
        <div>
          <h3 className="text-white font-bold xs:text-2xl sm:text-5xl">
            {data.servicii.mentenanta.title}
          </h3>
        </div>
        <div className="flex flex-col gap-4">
          {data.servicii.mentenanta.paragraphs.map((p, i) => (
            <div key={i}>
              <p className="text-white text-sm">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiciiPage;
