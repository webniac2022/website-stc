import CameraAnimation from "../components/camera-animation/camera-animation";
import CineSuntem from "../components/cine-suntem/cine-suntem";
import ContactForm from "../components/contact-form/contact-form";
import Ajutor from "../components/cum-va-putem-ajuta/ajutor";
import Why from "../components/de-ce-sa-ne-alegeti/why";
import DespreServiciiPreview from "../components/despre-servicii-preview/despre";
import HeaderSection from "../components/header-section/header-section";
import HeroImage from "../components/hero-image/hero-image";
import { gql } from "@apollo/client";
import client from "../lib/apollo";

const Homepage = ({
  data: {
    homepage: { serviciiPreview, cineSuntem, ajutor },
  },
}) => {
  return (
    <div className="w-full flex flex-col gap-5">
      <HeroImage />
      <DespreServiciiPreview data={serviciiPreview} />
      <CameraAnimation />
      <HeaderSection title="Cine suntem?" />
      <CineSuntem data={cineSuntem} />
      <HeaderSection title="Cum va putem ajuta?" />
      <Ajutor data={ajutor} />
      <HeaderSection title="De ce sa ne alegeti?" />
      <Why />
      <HeaderSection title="Contact" />
      <ContactForm />
    </div>
  );
};

export async function getStaticProps() {
  const homepageQuery = gql`
    query Homepage {
      allHomepage {
        nodes {
          homepage {
            ajutor {
              item {
                title
                index
                iconsrc {
                  altText
                  sourceUrl
                }
              }
              item2 {
                title
                index
                iconsrc {
                  altText
                  sourceUrl
                }
              }
              item3 {
                title
                index
                iconsrc {
                  altText
                  sourceUrl
                }
              }
            }
            cineSuntem {
              item {
                content
                index
                iconsrc {
                  altText
                  sourceUrl
                }
              }
              item2 {
                content
                index
                iconsrc {
                  altText
                  sourceUrl
                }
              }
              item3 {
                content
                index
                iconsrc {
                  altText
                  sourceUrl
                }
              }
              item4 {
                content
                index
                iconsrc {
                  altText
                  sourceUrl
                }
              }
              item5 {
                content
                index
                iconsrc {
                  altText
                  sourceUrl
                }
              }
              item6 {
                content
                index
                iconsrc {
                  altText
                  sourceUrl
                }
              }
            }
            serviciiPreview {
              iconsrc
              index
              title
              item {
                index
                title
                iconsrc {
                  altText
                  sourceUrl
                }
              }
              item10 {
                title
                index
                iconsrc {
                  altText
                  sourceUrl
                }
              }
              item2 {
                title
                index
                iconsrc {
                  altText
                  sourceUrl
                }
              }
              item3 {
                title
                index
                iconsrc {
                  altText
                  sourceUrl
                }
              }
              item4 {
                title
                index
                iconsrc {
                  altText
                  sourceUrl
                }
              }
              item5 {
                title
                index
                iconsrc {
                  altText
                  sourceUrl
                }
              }
              item6 {
                title
                index
                iconsrc {
                  altText
                  sourceUrl
                }
              }
              item7 {
                title
                index
                iconsrc {
                  altText
                  sourceUrl
                }
              }
              item8 {
                index
                title
                iconsrc {
                  altText
                  sourceUrl
                }
              }
              item9 {
                title
                index
                iconsrc {
                  altText
                  sourceUrl
                }
              }
            }
          }
        }
      }
    }
  `;
  const homepageResp = await client.query({ query: homepageQuery });
  const homepage = homepageResp?.data?.allHomepage?.nodes[0]?.homepage;
  return { props: { data: { homepage, lucrari } } };
}

export default Homepage;
