import { motion } from ".././lib/external-components";
import client from "../lib/apollo";
import { gql } from "@apollo/client";
import { clearTheArrayOfTypename } from "../lib/helper-functions";
import Head from "next/head";
import Seo from "../components/custom-seo/seo";
const DesprePage = ({
  data: { title, autorizatii, certificari, paragraphs },
}) => {
  const p = clearTheArrayOfTypename(paragraphs).map((p) => paragraphs[p]);
  const aut = clearTheArrayOfTypename(autorizatii).map((aa) => autorizatii[aa]);
  const cert = clearTheArrayOfTypename(certificari).map(
    (cert) => certificari[cert]
  );

  return (
    <>
      <Head>
        <Seo
          title="STC WORLD SYSTEMS Servicii Proiectare | Instalare | Mentenanta"
          description="Proiectare, Instalare, Mentenanta sisteme securitate smart, sisteme video, detectie incendiu, control-acces, interfonie/videointerfonie, date-voce."
        />
      </Head>
      <div className="w-full flex flex-col gap-2 overflow-x-hidden">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            type: "spring",
            damping: 10,
            bounce: 20,
          }}
        >
          <h2 className="p-2 xs:text-5xl sm:text-8xl font-bold mt-10 mb-10 text-textColors-600">
            {title}
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            type: "spring",
            damping: 10,
            bounce: 20,
          }}
          className="flex flex-col gap-2"
        >
          {p.map((d, i) => (
            <div key={i}>
              <p className="text-textColors-600 p-2">{d}</p>
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            type: "spring",
            damping: 10,
            bounce: 20,
          }}
        >
          <h3 className="mt-10 mb-10 p-2 xs:text-4xl sm:text-7xl font-bold text-textColors-600">
            Certificari
          </h3>
        </motion.div>
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 gap-4 p-2">
          {cert.map((d, i) => (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                type: "spring",
                damping: 10,
                bounce: 20,
              }}
              key={i}
              className="col-span-1 rounded-lg shadow-sm shadow-black flex flex-row justify-center items-center p-2"
            >
              <h5 className="text-center font-bold xs:text-sm sm:text-xl text-textColors-700">
                {d}
              </h5>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            type: "spring",
            damping: 10,
            bounce: 20,
          }}
        >
          <h3 className="mt-10 mb-10 p-2 xs:text-4xl sm:text-7xl font-bold text-textColors-600">
            Autorizatii
          </h3>
        </motion.div>
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 gap-4 p-2">
          {aut.map((d, i) => (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                type: "spring",
                damping: 10,
                bounce: 20,
              }}
              key={i}
              className="col-span-1 rounded-lg shadow-sm shadow-black flex flex-row justify-center items-center p-2"
            >
              <h5 className="text-center font-bold xs:text-sm sm:text-xl text-textColors-700">
                {d}
              </h5>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const despreQuery = gql`
    query Despre {
      allDespre {
        nodes {
          despre {
            desprePage {
              title
              autorizatii {
                item
                itemCopy
              }
              certificari {
                item
                itemCopy
                itemCopy2
                itemCopy3
                itemCopy4
                itemCopy5
                itemCopy6
              }
              paragraphs {
                item
                itemCopy
              }
            }
          }
        }
      }
    }
  `;
  const despreResp = await client.query({ query: despreQuery });
  const data = despreResp?.data?.allDespre?.nodes[0]?.despre?.desprePage;
  return { props: { data: data } };
}

export default DesprePage;
