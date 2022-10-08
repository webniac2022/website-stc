import DespreServiciiPreview from "../components/despre-servicii-preview/despre";
import HeroImage from "../components/hero-image/hero-image";

const data = {
  logoSrc:
    "https://res.cloudinary.com/webniac/image/upload/v1659537920/STC/logo_t8yr6g.svg",
  altText: "Logo STC WORLD SYSTEMS",
};

const Homepage = () => {
  return (
    <div className="w-full flex flex-col gap-2">
      <HeroImage />
      <DespreServiciiPreview />
    </div>
  );
};

export default Homepage;
