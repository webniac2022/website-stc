import "../styles/globals.css";
import { AppWrapper } from "../context/app-context";
import { ApolloProvider } from "@apollo/client/react";
import client from "../lib/apollo";
import Header from "../components/header/header";
import ModalDrawer from "../components/modal-drawer/modal-drawer";
import Drawer from "../components/sidedrawer/drawer";
import Fab from "../components/fab/fab";
import PageTransition from "../components/page-transition/page-transition";
import Footer from "../components/footer/footer";
import { CookieWrapper } from "../context/cookie-context";
import Layout from "../components/layout/layout";
import Seo from "../components/custom-seo/seo";
import Head from "next/head";

function MyApp({ Component, pageProps, canonical }) {
  return (
    <div>
      <Head>
        <title>STC WORLD SYSTEMS - Solutii de securitate smart</title>
        <meta
          property="og:title"
          content="STC WORLD SYSTEMS - Solutii de securitate smart"
        />
        <meta
          name="description"
          content="STC WORLD SYSTEMS - Securitate - Proiectare, instalare, mentenanta sisteme de securitate smart, sisteme de surpaveghere video, control acces, interfonie/videointerfonie, date-voce"
        />
        <meta
          content="https://res.cloudinary.com/webniac/image/upload/v1659537920/STC/logo_t8yr6g.svg"
          property="og:image"
        />
        <meta
          name="description"
          content="STC WORLD SYSTEMS - Solutiile optime de securitate pentru locuintele si afacerile dumneavoastra."
        />
      </Head>
      <ApolloProvider client={client}>
        <CookieWrapper>
          <AppWrapper>
            <Fab>
              <Header />
              <PageTransition>
                <Layout>
                  <Seo canonical={canonical} />
                  <Component {...pageProps} />
                </Layout>
              </PageTransition>
              <Footer />
              <ModalDrawer component={<Drawer />} />
            </Fab>
          </AppWrapper>
        </CookieWrapper>
      </ApolloProvider>
    </div>
  );
}

export default MyApp;
