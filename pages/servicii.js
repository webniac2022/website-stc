import { gql } from "@apollo/client";
import client from "../lib/apollo";
import { Image, motion, useRouter } from "../lib/external-components";
import {
  clearTheArrayOfTypename,
  compareFunction,
} from "../lib/helper-functions";

const ServiciiPage = ({ data: { heroImage, title, subtitle, servicii } }) => {
  console.log(servicii);
  const analizeParagraphs = clearTheArrayOfTypename(
    servicii.documentatii.analize.paragraphs
  ).map((aa) => servicii.documentatii.analize.paragraphs[aa]);
  const proiecteParagraphs = clearTheArrayOfTypename(
    servicii.documentatii.securitate.paragraphs
  ).map((aa) => servicii.documentatii.securitate.paragraphs[aa]);
  const proiecteIncendiuParagraphs = clearTheArrayOfTypename(
    servicii.documentatii.incendiu.paragraphs
  ).map((aa) => servicii.documentatii.incendiu.paragraphs[aa]);
  const instalareAntiefractieParagraphs = clearTheArrayOfTypename(
    servicii.instalare.antiefractie.paragraphs
  ).map((aa) => servicii.instalare.antiefractie.paragraphs[aa]);
  const instalareAntiefractieCablateP = clearTheArrayOfTypename(
    servicii.instalare.antiefractie.cablate.paragraphs
  ).map((aa) => servicii.instalare.antiefractie.cablate.paragraphs[aa]);
  const instalareAntiefractieSmartP = clearTheArrayOfTypename(
    servicii.instalare.antiefractie.smart.paragraphs
  ).map((aa) => servicii.instalare.antiefractie.smart.paragraphs[aa]);
  const instalareVideoParagraphs = clearTheArrayOfTypename(
    servicii.instalare.video.paragraphs
  ).map((aa) => servicii.instalare.video.paragraphs[aa]);
  const instalareVideoIpParagraphs = clearTheArrayOfTypename(
    servicii.instalare.video.ip.p
  ).map((aa) => servicii.instalare.video.ip.p[aa]);
  const instalareVideoAnalogicaParagraphs = clearTheArrayOfTypename(
    servicii.instalare.video.analogice.p
  ).map((aa) => servicii.instalare.video.analogice.p[aa]);
  const instalareIncendiuParagraphs = clearTheArrayOfTypename(
    servicii.instalare.video.paragraphs
  ).map((aa) => servicii.instalare.incendiu.paragraphs[aa]);
  const instalareAccesParagraphs = clearTheArrayOfTypename(
    servicii.instalare.acces.paragraphs
  ).map((aa) => servicii.instalare.video.paragraphs[aa]);
  const interfonieParagraphs = clearTheArrayOfTypename(
    servicii.instalare.interfonie.paragraphs
  ).map((aa) => servicii.instalare.interfonie.paragraphs[aa]);
  const reteleParagraphs = clearTheArrayOfTypename(
    servicii.instalare.retele.paragraphs
  ).map((aa) => servicii.instalare.retele.paragraphs[aa]);
  const mentenantaParagraphs = clearTheArrayOfTypename(
    servicii.instalare.mentenanta.paragraphs
  ).map((aa) => servicii.instalare.mentenanta.paragraphs[aa]);
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
                  src={servicii.documentatii.iconsrc.sourceUrl}
                  alt={servicii.documentatii.iconsrc.altText}
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
                  src={servicii.instalare.iconSrc.sourceUrl}
                  alt={servicii.instalare.iconSrc.altText}
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
                  src={servicii.instalare.mentenanta.iconSrc.sourceUrl}
                  alt={servicii.instalare.mentenanta.iconSrc.altText}
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
              src={heroImage.sourceUrl}
              alt={heroImage.altText}
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
            {servicii.documentatii.analize.title}
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
            {servicii.documentatii.securitate.title}
          </h3>
        </div>
        <div className="flex flex-col gap-4">
          {proiecteParagraphs.map((p, i) => (
            <div key={i}>
              <p className="text-textColors-900 text-sm">{p}</p>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-white font-bold xs:text-2xl sm:text-5xl">
            {servicii.documentatii.incendiu.title}
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
            {servicii.instalare.antiefractie.title}
          </h3>
        </div>
        <div className="flex flex-col gap-4">
          {instalareAntiefractieParagraphs.map((p, i) => (
            <div key={i}>
              <p className="text-textColors-900 text-sm">{p}</p>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-white font-bold xs:text-xl sm:text-4xl">
            {servicii.instalare.antiefractie.cablate.title}
          </h3>
        </div>
        <div className="flex flex-col gap-4">
          {instalareAntiefractieCablateP.map((pp, i) => (
            <div key={i}>
              <p className="text-textColors-900 text-sm">{pp}</p>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-white font-bold xs:text-xl sm:text-4xl">
            {servicii.instalare.antiefractie.smart.title}
          </h3>
        </div>
        <div className="flex flex-col gap-4">
          {instalareAntiefractieSmartP.map((pp, i) => (
            <div key={i}>
              <p className="text-textColors-900 text-sm">{pp}</p>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-white font-bold xs:text-2xl sm:text-5xl">
            {servicii.instalare.video.title}
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
            {servicii.instalare.video.ip.title}
          </h3>
        </div>
        <div className="flex flex-col gap-4">
          {instalareVideoIpParagraphs.map((pp, i) => (
            <div key={i}>
              <p className="text-textColors-900 text-sm">{pp}</p>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-white font-bold xs:text-xl sm:text-4xl">
            {servicii.instalare.video.analogice.title}
          </h3>
        </div>
        <div className="flex flex-col gap-4">
          {instalareVideoAnalogicaParagraphs.map((pp, i) => (
            <div key={i}>
              <p className="text-textColors-900 text-sm">{pp}</p>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-white font-bold xs:text-2xl sm:text-5xl">
            {servicii.instalare.incendiu.title}
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
            {servicii.instalare.acces.title}
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
            {servicii.instalare.interfonie.title}
          </h3>
        </div>
        <div className="flex flex-col gap-4">
          {interfonieParagraphs.map((pp, i) => (
            <div key={i}>
              <p className="text-textColors-900 text-sm">{pp}</p>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-white font-bold xs:text-2xl sm:text-5xl">
            {servicii.instalare.retele.title}
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
            {servicii.instalare.mentenanta.title}
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
    query ServiciiPage {
      posts {
        nodes {
          servicii {
            serviciiPage {
              title
              subtitle
              heroImage {
                altText
                sourceUrl
              }
              servicii {
                documentatii {
                  analize {
                    title
                    paragraphs {
                      item
                      itemCopy9
                      itemCopy8
                      itemCopy7
                      itemCopy6
                      itemCopy5
                      itemCopy4
                      itemCopy
                      itemCopy10
                      itemCopy11
                      itemCopy12
                      itemCopy2
                      itemCopy3
                    }
                  }
                  iconsrc {
                    altText
                    sourceUrl
                  }
                  incendiu {
                    title
                    paragraphs {
                      item
                      itemCopy
                    }
                  }
                  securitate {
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
                }
                instalare {
                  acces {
                    title
                    paragraphs {
                      item
                      itemCopy
                      itemCopy2
                      itemCopy3
                      itemCopy4
                      itemCopy5
                    }
                  }
                  antiefractie {
                    title
                    cablate {
                      title
                      paragraphs {
                        copy
                        copy2
                        copy3
                        copy4
                      }
                    }
                    paragraphs {
                      item
                      itemCopy
                      itemCopy2
                      itemCopy3
                      itemCopy4
                    }
                    smart {
                      title
                      paragraphs {
                        copy
                        copy2
                        copy3
                        copy4
                        copy5
                        copy6
                        copy7
                        copy8
                      }
                    }
                  }
                  iconSrc {
                    altText
                    sourceUrl
                  }
                  incendiu {
                    title
                    paragraphs {
                      item
                      itemCopy
                      itemCopy10
                      itemCopy11
                      itemCopy12
                      itemCopy13
                      itemCopy14
                      itemCopy15
                      itemCopy16
                      itemCopy17
                      itemCopy18
                      itemCopy19
                      itemCopy2
                      itemCopy20
                      itemCopy21
                      itemCopy22
                      itemCopy23
                      itemCopy24
                      itemCopy25
                      itemCopy26
                      itemCopy27
                      itemCopy3
                      itemCopy4
                      itemCopy5
                      itemCopy6
                      itemCopy7
                      itemCopy8
                      itemCopy9
                    }
                  }
                  interfonie {
                    title
                    paragraphs {
                      item
                      itemCopy
                      itemCopy2
                      itemCopy3
                    }
                  }
                  mentenanta {
                    title
                    iconSrc {
                      altText
                      sourceUrl
                    }
                    paragraphs {
                      item
                      itemCopy
                    }
                  }
                  retele {
                    title
                    paragraphs {
                      item
                      itemCopy
                    }
                  }
                  video {
                    title
                    analogice {
                      title
                      p {
                        item
                        itemCopy
                        itemCopy2
                        itemCopy3
                        itemCopy4
                        itemCopy5
                        itemCopy6
                      }
                    }
                    ip {
                      title
                      p {
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
                    paragraphs {
                      item
                      itemCopy
                      itemCopy2
                      itemCopy3
                      itemCopy4
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;
  const serviciiResp = await client.query({ query: serviciiQuery });
  console.log(serviciiResp?.data?.posts?.nodes[0]?.servicii?.serviciiPage);
  const data = serviciiResp?.data?.posts?.nodes[0]?.servicii?.serviciiPage;
  return { props: { data: data } };
};

export default ServiciiPage;
