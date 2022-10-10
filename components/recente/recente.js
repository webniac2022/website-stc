import { useState } from "react";
import { Image } from "../../lib/external-components";
const data = [
  {
    title: "Sistem supraveghere video",
    description:
      "Sistem de supraveghere video wifi HIKVISION, casa particulara.",
    images: [
      "https://res.cloudinary.com/webniac/image/upload/v1662042015/STC/9db057f7-535d-4130-9975-8ceee67c2903_eoeltl.jpg",
      "https://res.cloudinary.com/webniac/image/upload/v1662042015/STC/12c2afcb-d429-4ac8-ad04-3fc92ad7e16a_atnnng.jpg",
    ],
  },
];

const Recente = () => {
  const [currentIndex, setCurrentIndex] = useState({
    elementIndex: 0,
    imgIndex: 0,
  });

  return (
    <div className="w-full p-2">
      <div className="flex flex-col gap-2 p-2 shadow-sm shadow-black rounded-lg">
        <div className="grid grid-cols-6 gap-2">
          <div className="col-span-3">
            <Image
              src={
                data[currentIndex.elementIndex].images[currentIndex.imgIndex]
              }
              alt={data[currentIndex.elementIndex].title}
              width={1920}
              height={1080}
              style={{ width: "100%", height: "auto", borderRadius: "5px" }}
            />
          </div>
          <div className="col-span-3 flex flex-wrap">
            <div className="grid grid-cols-3 gap-2">
              {data[currentIndex.elementIndex].images.map((d, i) => (
                <div key={i} className="col-span-1">
                  <Image
                    src={d}
                    alt="image preview"
                    width={1920}
                    height={1080}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "5px",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <p className="text-black text-sm">
            {data[currentIndex.elementIndex].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recente;
