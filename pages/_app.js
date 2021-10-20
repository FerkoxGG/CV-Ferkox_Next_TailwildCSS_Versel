import "../styles/index.css";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title key="title">
          Soy Ferkox, contáctame para desarrollar tu web!
        </title>
        <meta key="description" name="description" content="Contactame" />
      </Head>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
