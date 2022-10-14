import { Image, motion } from "../../lib/external-components";
import { useState } from "react";
import client from "../../lib/apollo";
import { gql } from "@apollo/client";
import { clearTheArrayOfTypename } from "../../lib/helper-functions";

const Recente = ({ data }) => {
  console.log(data);
  const d = clearTheArrayOfTypename(data).map((dd) => ({
    currentImgIndex: 0,
    description: data[dd].description,
    id: data[dd].id,
    title: data[dd].title,
    images: clearTheArrayOfTypename(data[dd].images).map((s) => ({
      imgSrc: data[dd].images[s].sourceUrl,
      altText: data[dd].images[s].altText,
    })),
  }));
  const [myData, setMyData] = useState(d);

  const changePic = (id, picIndex) => {
    const modifiedArr = myData.map((d) =>
      d.id === id ? { ...d, currentImgIndex: picIndex } : d
    );
    setMyData(modifiedArr);
  };

  return (
    <div
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-2 overflow-x-hidden"
    >
      <div>
        <h2 className="p-2 xs:text-5xl sm:text-8xl font-bold mt-10 mb-10 text-textColors-600">
          Lucrari recente
        </h2>
      </div>
      <div className="grid xs:grid-cols-1 sm:grid-cols-3 gap-2 p-2">
        {myData.map((d, i) => (
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{
              scale: 1,
              transition: {
                duration: 0.5,
                type: "spring",
                damping: 10,
                bounce: 10,
              },
            }}
            key={i}
            className="col-span-1 p-2 rounded-lg bg-black flex flex-col gap-2"
          >
            <div className="flex flex-row justify-center items-center">
              <h2 className="text-white font-bold text-2xl p-2">{d.title}</h2>
            </div>
            <div className="flex flex-row justify-center items-center">
              <h2 className="text-white font-bold text-sm p-2 text-left">
                {d.description}
              </h2>
            </div>
            <div>
              <Image
                src={d.images[d.currentImgIndex].imgSrc}
                alt={d.images[d.currentImgIndex].altText}
                width={1920}
                height={1080}
                style={{ width: "100%", height: "auto", borderRadius: "10px" }}
              />
            </div>
            <div className="grid grid-cols-6 gap-2">
              {d.images.map((dd, ii) => (
                <div
                  className="col-span-2 hover:cursor-pointer"
                  key={ii}
                  onClick={() => changePic(d.id, ii)}
                >
                  <Image
                    src={dd.imgSrc}
                    alt={dd.altText}
                    width={1920}
                    height={1080}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "10px",
                      opacity: d.currentImgIndex === ii ? 0.4 : 1,
                    }}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const lucrariQuery = gql`
    query Lucrari {
      allLucrari {
        nodes {
          lucrari {
            item {
              description
              id
              title
              images {
                img {
                  altText
                  sourceUrl
                }
              }
            }
            itemCopy {
              title
              images {
                img {
                  altText
                  sourceUrl
                }
                imgCopy {
                  altText
                  sourceUrl
                }
                imgCopy2 {
                  altText
                  sourceUrl
                }
              }
              description
              id
            }
          }
        }
      }
    }
  `;
  const lucrariResp = await client.query({ query: lucrariQuery });
  const data = lucrariResp?.data?.allLucrari?.nodes[0]?.lucrari;
  return { props: { data: data } };
}

export default Recente;
