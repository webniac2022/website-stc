import { Image } from "../../lib/external-components";

const HeroImage = () => {
  return (
    <div className="w-full">
      <Image
        src="https://res.cloudinary.com/webniac/image/upload/v1660829200/STC/shutterstock_499702849_vybxhy.jpg"
        alt="STC WORLD SYSTEMS hero image"
        width={1920}
        height={1080}
        style={{ width: "100%", height: "auto" }}
        quality={95}
        priority
        // sizes=""
      />
    </div>
  );
};

export default HeroImage;
