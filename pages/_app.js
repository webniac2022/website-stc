import "../styles/globals.css";
import { AppWrapper } from "../context/app-context";
import { ApolloProvider } from "@apollo/client/react";
import client from "../lib/apollo";
import Header from "../components/header/header";
import ModalDrawer from "../components/modal-drawer/modal-drawer";
import Drawer from "../components/sidedrawer/drawer";
import Fab from "../components/fab/fab";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <AppWrapper>
        <Fab>
          <Header />
          <Component {...pageProps} />
          <ModalDrawer component={<Drawer />} />
        </Fab>
      </AppWrapper>
    </ApolloProvider>
  );
}

export default MyApp;
