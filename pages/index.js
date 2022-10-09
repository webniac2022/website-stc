import CameraAnimation from "../components/camera-animation/camera-animation";
import CineSuntem from "../components/cine-suntem/cine-suntem";
import ContactForm from "../components/contact-form/contact-form";
import Ajutor from "../components/cum-va-putem-ajuta/ajutor";
import Why from "../components/de-ce-sa-ne-alegeti/why";
import DespreServiciiPreview from "../components/despre-servicii-preview/despre";
import HeaderSection from "../components/header-section/header-section";
import HeroImage from "../components/hero-image/hero-image";
import Pareri from "../components/pareri/pareri";

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
      <Ajutor />
      <HeaderSection title="De ce sa ne alegeti?" />
      <Why />
      <HeaderSection title="Pareri" />
      <Pareri />
      <HeaderSection title="Recente" />
      <HeaderSection title="Contact" />
      <ContactForm />
    </div>
  );
};

export default Homepage;
