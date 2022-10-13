import {
  Image,
  useEmblaCarousel,
  Autoplay,
  Link,
} from "../../lib/external-components";
import { AiFillEye } from "react-icons/ai";
import { clearTheArrayOfTypename } from "../../lib/helper-functions";

const Recente = ({ data }) => {
  const d = clearTheArrayOfTypename(data);
  const dd = d.map((el) => ({
    id: data[el].id,
    title: data[el].title,
    images: clearTheArrayOfTypename(data[el].images).map((elem) => ({
      imageSrc: data[el].images[elem].sourceUrl,
      altText: data[el].images[elem].altText,
    })),
    description: data[el].description,
  }));
  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true }, [
    Autoplay(),
  ]);

  return (
    <div ref={emblaRef} className="overflow-x-hidden">
      <div className="flex flex-row gap-6 hover:cursor-grab">
        {dd.map((d, i) => (
          <div className="flex-[0_0_80%]" key={i}>
            <Link href={`/recente`} passHref>
              <a>
                <AiFillEye className="absolute w-[30px] h-[30px] fill-components-800 hover:cursor-pointer" />
              </a>
            </Link>
            <Image
              src={d.images[0].imageSrc}
              alt={d.images[0].altText}
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
