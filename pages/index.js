import HeroImage from "../components/hero-image/hero-image";

const data = {
  logoSrc:
    "https://res.cloudinary.com/webniac/image/upload/v1659537920/STC/logo_t8yr6g.svg",
  altText: "Logo STC WORLD SYSTEMS",
};

const Homepage = () => {
  return (
    <div className="w-full flex flex-row border-2 border-white">
      <HeroImage />
    </div>
  );
};

export default Homepage;
