import { Image, motion } from "../../lib/external-components";
import { useState } from "react";
const data = [
  {
    currentImgIndex: 0,
    id: "prima",
    title: "Sistem supraveghere video",
    description:
      "Sistem de supraveghere video wifi HIKVISION, casa particulara.",
    images: [
      "https://res.cloudinary.com/webniac/image/upload/v1662042015/STC/9db057f7-535d-4130-9975-8ceee67c2903_eoeltl.jpg",
      "https://res.cloudinary.com/webniac/image/upload/v1662042015/STC/12c2afcb-d429-4ac8-ad04-3fc92ad7e16a_atnnng.jpg",
    ],
  },
  {
    currentImgIndex: 0,
    id: "second",
    title: "Sistem supraveghere video",
    description:
      "Sistem de supraveghere video wifi HIKVISION, casa particulara.",
    images: [
      "https://res.cloudinary.com/webniac/image/upload/v1662042015/STC/e0f0cf66-e520-4adf-94f7-62eb619a76eb_xpcgqt.jpg",
      "https://res.cloudinary.com/webniac/image/upload/v1662042015/STC/ad5d0b7d-0e35-4f46-9503-e5accfc990e2_cwtaqn.jpg",
      "https://res.cloudinary.com/webniac/image/upload/v1662042015/STC/7eaad2d4-95b3-4aad-8d0b-f8d34c2d518f_hgmiq8.jpg",
    ],
  },
  {
    currentImgIndex: 0,
    id: "third",
    title: "Sistem supraveghere video",
    description:
      "Sistem de supraveghere video wifi HIKVISION, casa particulara.",
    images: [
      "https://res.cloudinary.com/webniac/image/upload/v1662042015/STC/e0f0cf66-e520-4adf-94f7-62eb619a76eb_xpcgqt.jpg",
      "https://res.cloudinary.com/webniac/image/upload/v1662042015/STC/ad5d0b7d-0e35-4f46-9503-e5accfc990e2_cwtaqn.jpg",
      "https://res.cloudinary.com/webniac/image/upload/v1662042015/STC/7eaad2d4-95b3-4aad-8d0b-f8d34c2d518f_hgmiq8.jpg",
    ],
  },
];

const Recente = ({}) => {
  const [myData, setMyData] = useState(data);

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
            <div>
              <Image
                src={d.images[d.currentImgIndex]}
                alt="photo"
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
                    src={dd}
                    alt={dd}
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

export const getStaticProps = async () => {
  // Get data from cms
  return { props: { data: [] } };
};

export default Recente;
