import Head from "next/head";
import React, { useEffect } from "react";
import "../styles/globals.scss";
import "../styles/app-theme.scss";
import "../src/i18n/i18n";
import { initTranslations } from "../src/i18n/i18n";
import { useRouter } from "next/router";
import TagManager from "react-gtm-module";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  initTranslations(router.locale);

  const initTagManager = () => {
    const tagManagerArgs = {
      gtmId: "GTM-WN7Z57Z",
    };

    try {
      TagManager.initialize(tagManagerArgs);
    } catch (error) {
      console.log("GTM error", error);
    }
  };

  useEffect(() => {
    initTagManager();
  }, []);

  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.2/css/all.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/img/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/img/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/img/icons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/img/icons/safari-pinned-tab.svg"
          color="#2362a2"
        />
        <link rel="shortcut icon" href="/img/icons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#2362a2" />
        <meta
          name="msapplication-config"
          content="/img/icons/browserconfig.xml"
        />
        <meta name="theme-color" content="#2362a2" />

        {/* JS */}
        <script type="text/javascript" src="/js/mdb.min.js" defer></script>
      </Head>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
