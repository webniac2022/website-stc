import CameraAnimation from "../components/camera-animation/camera-animation";
import CineSuntem from "../components/cine-suntem/cine-suntem";
import ContactForm from "../components/contact-form/contact-form";
import Ajutor from "../components/cum-va-putem-ajuta/ajutor";
import Why from "../components/de-ce-sa-ne-alegeti/why";
import DespreServiciiPreview from "../components/despre-servicii-preview/despre";
import HeaderSection from "../components/header-section/header-section";
import HeroImage from "../components/hero-image/hero-image";
import Pareri from "../components/pareri/pareri";
import Recente from "../components/recente/recente";
import { gql } from "@apollo/client";
import client from "../lib/apollo";

const Homepage = ({
  data: { serviciiPreview, cineSuntem, ajutor, pareri, lucrari },
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
      <HeaderSection title="Pareri" />
      <Pareri data={pareri} />
      <HeaderSection title="Recente" />
      <Recente data={lucrari} />
      <HeaderSection title="Contact" />
      <ContactForm />
    </div>
  );
};

export const getStaticProps = async () => {
  const homepageQuery = gql`
    query Homepage {
      posts {
        nodes {
          homepage {
            serviciiPreview {
              item {
                title
                index
                iconSrc {
                  altText
                  sourceUrl
                }
              }
              itemCopy {
                title
                index
                iconSrc {
                  altText
                  sourceUrl
                }
              }
              itemCopy2 {
                title
                index
                iconSrc {
                  altText
                  sourceUrl
                }
              }
              itemCopy3 {
                title
                index
                iconSrc {
                  altText
                  sourceUrl
                }
              }
              itemCopy4 {
                title
                index
                iconSrc {
                  altText
                  sourceUrl
                }
              }
              itemCopy5 {
                title
                index
                iconSrc {
                  altText
                  sourceUrl
                }
              }
              itemCopy6 {
                title
                index
                iconSrc {
                  altText
                  sourceUrl
                }
              }
              itemCopy7 {
                title
                index
                iconSrc {
                  altText
                  sourceUrl
                }
              }
              itemCopy8 {
                title
                index
                iconSrc {
                  altText
                  sourceUrl
                }
              }
              itemCopy9 {
                title
                index
                iconSrc {
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
              itemCopy {
                content
                index
                iconsrc {
                  altText
                  sourceUrl
                }
              }
              itemCopy2 {
                content
                index
                iconsrc {
                  altText
                  sourceUrl
                }
              }
              itemCopy3 {
                content
                index
                iconsrc {
                  altText
                  sourceUrl
                }
              }
              itemCopy4 {
                content
                index
                iconsrc {
                  altText
                  sourceUrl
                }
              }
              itemCopy5 {
                content
                index
                iconsrc {
                  altText
                  sourceUrl
                }
              }
            }
            ajutor {
              item {
                index
                title
                iconsrc {
                  altText
                  sourceUrl
                }
              }
              itemCopy {
                index
                title
                iconsrc {
                  altText
                  sourceUrl
                }
              }
              itemCopy2 {
                title
                index
                iconsrc {
                  altText
                  sourceUrl
                }
              }
            }
            pareri {
              item {
                index
                name
                content
                avatar {
                  altText
                  sourceUrl
                }
              }
              itemCopy {
                name
                index
                content
                avatar {
                  altText
                  sourceUrl
                }
              }
              itemCopy2 {
                index
                name
                content
                avatar {
                  altText
                  sourceUrl
                }
              }
            }
            lucrari {
              item {
                description
                id
                title
                images {
                  img {
                    altText
                    sourceUrl
                  }
                  imgCopy {
                    altText
                    sourceUrl
                  }
                }
              }
              itemCopy {
                description
                id
                title
                images {
                  img {
                    altText
                    sourceUrl
                  }
                  imgCopy {
                    altText
                    sourceUrl
                  }
                  imgCopy2 {
                    altText
                    sourceUrl
                  }
                }
              }
            }
          }
        }
      }
    }
  `;
  const homepageResp = await client.query({ query: homepageQuery });
  const data = homepageResp?.data?.posts?.nodes[0]?.homepage;
  return { props: { data: data } };
};

export default Homepage;
