import { Image, motion } from "../../lib/external-components";

const CameraAnimation = () => {
  return (
    <div className="w-full grid grid-cols-6 mt-10">
      <div className="col-span-2"></div>
      <div className="col-span-1"></div>
      <motion.div
        initial={{}}
        whileInView={{
          rotateZ: -30,
          transition: { duration: 1, type: "spring" },
        }}
        className="col-span-2"
      >
        <Image
          src="https://res.cloudinary.com/webniac/image/upload/v1660834457/STC/securitycamera-1_pvdbvo.svg"
          alt="camera picture"
          width={385}
          height={192}
          style={{ width: "100%", height: "auto" }}
        />
      </motion.div>
      <div className="col-span-1"></div>
    </div>
  );
};

export default CameraAnimation;
