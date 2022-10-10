import { useEffect } from "react";
import {
  Image,
  useEmblaCarousel,
  Autoplay,
  useRouter,
  Link,
} from "../../lib/external-components";
import { AiFillEye } from "react-icons/ai";

const data = [
  {
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
];

const Recente = () => {
  const router = useRouter();
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, dragFree: true },
    [Autoplay()]
  );

  useEffect(() => {
    if (emblaApi) {
      //
    }
  }, []);

  return (
    <div ref={emblaRef} className="overflow-x-hidden">
      <div className="flex flex-row gap-6 hover:cursor-grab">
        {data.map((d, i) => (
          <div className="flex-[0_0_80%]" key={i}>
            {/* <div className="absolute"> */}
            <Link href={`/recente`} passHref>
              <AiFillEye className="absolute w-[30px] h-[30px] fill-components-800 hover:cursor-pointer" />
            </Link>
            {/* </div> */}
            <Image
              src={d.images[0]}
              alt={d.title}
              width={1920}
              height={1080}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "10px",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recente;
