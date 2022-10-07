import "../styles/globals.css";
import { AppWrapper } from "../context/app-context";
import { ApolloProvider } from "@apollo/client/react";
import client from "../lib/apollo";
import Header from "../components/header/header";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <AppWrapper>
        <Header />
        <Component {...pageProps} />;
      </AppWrapper>
    </ApolloProvider>
  );
}

export default MyApp;
