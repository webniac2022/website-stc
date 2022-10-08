import CameraAnimation from "../components/camera-animation/camera-animation";
import CineSuntem from "../components/cine-suntem/cine-suntem";
import DespreServiciiPreview from "../components/despre-servicii-preview/despre";
import HeaderSection from "../components/header-section/header-section";
import HeroImage from "../components/hero-image/hero-image";

const data = {
  logoSrc:
    "https://res.cloudinary.com/webniac/image/upload/v1659537920/STC/logo_t8yr6g.svg",
  altText: "Logo STC WORLD SYSTEMS",
};

const Homepage = () => {
  return (
    <div className="w-full flex flex-col gap-5">
      <HeroImage />
      <DespreServiciiPreview />
      <CameraAnimation />
      <HeaderSection title="Cine suntem?" />
      <CineSuntem />
      <HeaderSection title="Cum va putem ajuta?" />
      <HeaderSection title="De ce sa ne alegeti?" />
    </div>
  );
};

export default Homepage;
