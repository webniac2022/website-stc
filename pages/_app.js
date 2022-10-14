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
function MyApp({ Component, pageProps, canonical }) {
  return (
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
  );
}

export default MyApp;
