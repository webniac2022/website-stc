import { gql } from "@apollo/client";
import client from "../lib/apollo";
import { Image, motion, useRouter } from "../lib/external-components";
import {
  clearTheArrayOfTypename,
  compareFunction,
} from "../lib/helper-functions";

const ServiciiPage = ({ data }) => {
  const router = useRouter();
  const {
    title,
    subtitle,
    heroimage: { altText: altTextHeroImg, sourceUrl: sourceUrlHeroImage },
    iconsrcdocumentatii: {
      altText: altTextIconDocumentatii,
      sourceUrl: sourceUrlIconDocumentatii,
    },
    iconsrcinstalari: {
      altText: altTextIconInstalari,
      sourceUrl: sourceUrlIconSrcInstalari,
    },
    iconsrcmentenanta: {
      altText: altTextIconSrcMentenanta,
      sourceUrl: sourceUrlIconSrcMentenanta,
    },
  } = data;
  const { title: analizeTitle, paragraphs: analizeParagraph } = data?.analize;
  const analizeParagraphs = clearTheArrayOfTypename(analizeParagraph).map(
    (item) => analizeParagraph[item]
  );

  const {
    title: proiecteSecuritateTitle,
    paragraphs: proiecteSecuritateParagraph,
  } = data?.proiectesecuritate;

  const proiecteSecuritateParagraphs = clearTheArrayOfTypename(
    proiecteSecuritateParagraph
  ).map((item) => proiecteSecuritateParagraph[item]);

  const {
    title: proiecteIncendiuTitle,
    paragraphs: proiecteIncendiuParagraph,
  } = data?.proiecteincendiu;

  const proiecteIncendiuParagraphs = clearTheArrayOfTypename(
    proiecteIncendiuParagraph
  ).map((item) => proiecteIncendiuParagraph[item]);

  const { title: instalareAccestTitle, paragraphs: instalareAccesParagraph } =
    data?.instalareacces;

  const instalareAccesParagraphs = clearTheArrayOfTypename(
    instalareAccesParagraph
  ).map((item) => instalareAccesParagraph[item]);

  const { title: antiefractieTitle, paragraphs: antiefractieParagraph } =
    data?.instalareantiefractie;

  const antiefractieParagraphs = clearTheArrayOfTypename(
    antiefractieParagraph
  ).map((item) => antiefractieParagraph[item]);

  const {
    title: instalareIncendiuTitle,
    paragraphs: instalareIncendiuParagraph,
  } = data?.instalareincendiu;

  const instalareIncendiuParagraphs = clearTheArrayOfTypename(
    instalareAccesParagraph
  ).map((item) => instalareIncendiuParagraph[item]);

  const {
    title: instalareInterfonieTitle,
    paragraphs: instalareinterfonieParagraph,
  } = data?.instalareinterfonie;

  const instalareInterfonieParagraphs = clearTheArrayOfTypename(
    instalareinterfonieParagraph
  ).map((item) => instalareinterfonieParagraph[item]);

  const { title: instalareVideoTitle, paragraphs: instalareVideoParagraph } =
    data?.instalarevideo;

  const instalareVideoParagraphs = clearTheArrayOfTypename(
    instalareVideoParagraph
  ).map((item) => instalareVideoParagraph[item]);

  const { title: mentenantaTitle, paragraphs: mentenantaParagraph } =
    data?.mentenanta;

  const mentenantaParagraphs = clearTheArrayOfTypename(mentenantaParagraph).map(
    (item) => mentenantaParagraph[item]
  );

  const { title: reteleTitle, paragraphs: reteleParagraph } = data?.retele;

  const reteleParagraphs = clearTheArrayOfTypename(reteleParagraph).map(
    (item) => reteleParagraph[item]
  );

  const {
    title: sistemeAnalogiceTitle,
    paragraphs: sistemeAnalogiceParagraph,
  } = data?.sistemeanalogice;

  const sistemeAnalogiceParagraphs = clearTheArrayOfTypename(
    sistemeAnalogiceParagraph
  ).map((item) => sistemeAnalogiceParagraph[item]);

  const { title: sistemeCablateTitle, paragraph: sistemeCablateParagraph } =
    data?.sistemecablate;

  const sistemeCablateParagraphs = clearTheArrayOfTypename(
    sistemeCablateParagraph
  ).map((item) => sistemeCablateParagraph[item]);

  const { title: sistemeIpTitle, paragraphs: sistemeIpParagraph } =
    data?.sistemeip;

  const sistemeIpParagraphs = clearTheArrayOfTypename(sistemeIpParagraph).map(
    (item) => sistemeIpParagraph[item]
  );

  const { title: sistemeSmartTitle, paragraphs: sistemeSmartParagraph } =
    data?.sistemesmart;

  const sistemeSmartParagraphs = clearTheArrayOfTypename(
    sistemeSmartParagraph
  ).map((item) => sistemeSmartParagraph[item]);

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
              {title}
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
              {subtitle}
            </motion.h6>
            <div className="grid grid-cols-3 p-2">
              <motion.div
                whileHover={{ scale: 0.95, cursor: "pointer" }}
                onClick={() => router.push("#documentatii")}
                transition={{ type: "spring" }}
                className="col-span-1"
              >
                <Image
                  src={sourceUrlIconDocumentatii}
                  alt={altTextIconDocumentatii}
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
                  src={sourceUrlIconSrcInstalari}
                  alt={altTextIconInstalari}
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
                  src={sourceUrlIconSrcMentenanta}
                  alt={altTextIconSrcMentenanta}
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
              src={sourceUrlHeroImage}
              alt={altTextHeroImg}
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
            {analizeTitle}
          </h3>
        </div>
        <div className="flex flex-col gap-4">
          {analizeParagraphs.map((p, i) => (
            <div key={i}>
              <p className="text-textColors-900 text-sm">{p}</p>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-white font-bold xs:text-2xl sm:text-5xl">
            {proiecteSecuritateTitle}
          </h3>
        </div>
        <div className="flex flex-col gap-4">
          {proiecteSecuritateParagraphs.map((p, i) => (
            <div key={i}>
              <p className="text-textColors-900 text-sm">{p}</p>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-white font-bold xs:text-2xl sm:text-5xl">
            {proiecteIncendiuTitle}
          </h3>
        </div>
        <div className="flex flex-col gap-4">
          {proiecteIncendiuParagraphs.map((p, i) => (
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
            {antiefractieTitle}
          </h3>
        </div>
        <div className="flex flex-col gap-4">
          {antiefractieParagraphs.map((p, i) => (
            <div key={i}>
              <p className="text-textColors-900 text-sm">{p}</p>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-white font-bold xs:text-xl sm:text-4xl">
            {sistemeCablateTitle}
          </h3>
        </div>
        <div className="flex flex-col gap-4">
          {sistemeCablateParagraphs.map((pp, i) => (
            <div key={i}>
              <p className="text-textColors-900 text-sm">{pp}</p>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-white font-bold xs:text-xl sm:text-4xl">
            {sistemeSmartTitle}
          </h3>
        </div>
        <div className="flex flex-col gap-4">
          {sistemeSmartParagraphs.map((pp, i) => (
            <div key={i}>
              <p className="text-textColors-900 text-sm">{pp}</p>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-white font-bold xs:text-2xl sm:text-5xl">
            {instalareVideoTitle}
          </h3>
        </div>
        <div className="flex flex-col gap-4">
          {instalareVideoParagraphs.map((p, i) => (
            <div key={i}>
              <p className="text-textColors-900 text-sm">{p}</p>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-white font-bold xs:text-xl sm:text-4xl">
            {sistemeIpTitle}
          </h3>
        </div>
        <div className="flex flex-col gap-4">
          {sistemeIpParagraphs.map((pp, i) => (
            <div key={i}>
              <p className="text-textColors-900 text-sm">{pp}</p>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-white font-bold xs:text-xl sm:text-4xl">
            {sistemeAnalogiceTitle}
          </h3>
        </div>
        <div className="flex flex-col gap-4">
          {sistemeAnalogiceParagraphs.map((pp, i) => (
            <div key={i}>
              <p className="text-textColors-900 text-sm">{pp}</p>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-white font-bold xs:text-2xl sm:text-5xl">
            {instalareIncendiuTitle}
          </h3>
        </div>
        <div className="flex flex-col gap-4">
          {instalareIncendiuParagraphs.map((pp, i) => (
            <div key={i}>
              <p className="text-textColors-900 text-sm">{pp}</p>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-white font-bold xs:text-2xl sm:text-5xl">
            {instalareAccestTitle}
          </h3>
        </div>
        <div className="flex flex-col gap-4">
          {instalareAccesParagraphs.map((pp, i) => (
            <div key={i}>
              <p className="text-textColors-900 text-sm">{pp}</p>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-white font-bold xs:text-2xl sm:text-5xl">
            {instalareInterfonieTitle}
          </h3>
        </div>
        <div className="flex flex-col gap-4">
          {instalareInterfonieParagraphs.map((pp, i) => (
            <div key={i}>
              <p className="text-textColors-900 text-sm">{pp}</p>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-white font-bold xs:text-2xl sm:text-5xl">
            {reteleTitle}
          </h3>
        </div>
        <div className="flex flex-col gap-4">
          {reteleParagraphs.map((pp, i) => (
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
            {mentenantaTitle}
          </h3>
        </div>
        <div className="flex flex-col gap-4">
          {mentenantaParagraphs.map((p, i) => (
            <div key={i}>
              <p className="text-white text-sm">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const serviciiQuery = gql`
    query Servicii {
      allServiciiPage {
        nodes {
          servicii {
            servicii {
              title
              subtitle
              analize {
                title
                paragraphs {
                  item
                  itemCopy
                  itemCopy10
                  itemCopy11
                  itemCopy12
                  itemCopy2
                  itemCopy3
                  itemCopy4
                  itemCopy5
                  itemCopy6
                  itemCopy7
                  itemCopy8
                  itemCopy9
                }
              }
              heroimage {
                altText
                sourceUrl
              }
              iconsrcdocumentatii {
                altText
                sourceUrl
              }
              iconsrcinstalari {
                altText
                sourceUrl
              }
              iconsrcmentenanta {
                altText
                sourceUrl
              }
              instalareacces {
                title
                paragraphs {
                  item
                  itemCopy
                  itemCopy2
                  itemCopy3
                  itemCopy4
                }
              }
              instalareantiefractie {
                title
                paragraphs {
                  item
                  itemCopy
                  itemCopy2
                  itemCopy3
                  itemCopy4
                }
              }
              instalareincendiu {
                title
                paragraphs {
                  item
                  itemCopy
                  itemCopy2
                  itemCopy3
                  itemCopy4
                }
              }
              instalareinterfonie {
                title
                paragraphs {
                  item
                  itemCopy
                  itemCopy2
                  itemCopy3
                }
              }
              instalarevideo {
                title
                paragraphs {
                  item
                  itemCopy
                  itemCopy2
                  itemCopy3
                  itemCopy4
                }
              }
              mentenanta {
                title
                paragraphs {
                  item
                  itemCopy
                }
              }
              proiecteincendiu {
                title
                paragraphs {
                  item
                  itemCopy
                }
              }
              proiectesecuritate {
                title
                paragraphs {
                  item
                  itemCopy
                  itemCopy10
                  itemCopy11
                  itemCopy12
                  itemCopy2
                  itemCopy3
                  itemCopy4
                  itemCopy5
                  itemCopy6
                  itemCopy7
                  itemCopy8
                  itemCopy9
                }
              }
              retele {
                title
                paragraphs {
                  item
                  itemCopy
                }
              }
              sistemeanalogice {
                title
                paragraphs {
                  item
                  itemCopy
                  itemCopy2
                  itemCopy3
                  itemCopy4
                  itemCopy5
                  itemCopy6
                }
              }
              sistemecablate {
                title
                paragraph {
                  item
                  itemCopy
                  itemCopy2
                  itemCopy3
                }
              }
              sistemeip {
                title
                paragraphs {
                  item
                  itemCopy
                  itemCopy2
                  itemCopy3
                  itemCopy4
                  itemCopy5
                  itemCopy6
                  itemCopy7
                  itemCopy8
                  itemCopy9
                }
              }
              sistemesmart {
                title
                paragraphs {
                  item
                  itemCopy
                  itemCopy2
                  itemCopy3
                  itemCopy4
                  itemCopy5
                  itemCopy6
                  itemCopy7
                }
              }
            }
          }
        }
      }
    }
  `;
  const serviciiResp = await client.query({ query: serviciiQuery });
  const data =
    serviciiResp?.data?.allServiciiPage?.nodes[0]?.servicii?.servicii;
  return { props: { data: data } };
};

export default ServiciiPage;
