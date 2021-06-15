import classNames from "classnames";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import { Layout } from "../components/layout";
import styles from "../styles/Home.module.scss";
import { useUserAgent } from "next-useragent";
import React from "react";
import { MetaHead } from "../components/meta-head";

interface IProps {
  uaString: string;
}

const Home: React.FC<IProps> = ({ uaString }) => {
  const { t, i18n } = useTranslation();
  const { language } = i18n;

  const ua = useUserAgent(uaString);

  const isAppleSystem =
    ua.isIos || ua.isMac || ua.isIphone || ua.isSafari || ua.isIpad;

  const landingImg = isAppleSystem
    ? `${language}_ios_homepage.webp`
    : `${language}_android_homepage.webp`;

  return (
    <div>
      <Head>
        <meta name="keywords" content={t("meta:keywords")} />
      </Head>
      <MetaHead
        title={t("common:title")}
        description={t("common:description")}
        image={`${language}_thumbnail.png`}
      />

      <Layout>
        <div className="bg-primary py-5">
          <div className="container">
            <section>
              <div className="row">
                <div className="col-lg-5 mb-4 mb-lg-0 text-center order-2 order-md-1">
                  <img
                    src={`/img/mockup/${landingImg}`}
                    className={classNames(
                      "img-fluid mx-auto",
                      styles.imageHeader
                    )}
                    alt={t("alt:landing")}
                  />
                </div>
                <div className="col-lg-7 mb-4 mb-lg-0 align-self-center text-center text-lg-start order-1 order-md-2">
                  <h1 className="mb-3">{t("common:title")}</h1>
                  <p className={classNames("mb-4", styles.descriptionText)}>
                    {t("common:description")}
                  </p>
                  {/* <a
                    href="https://apps.apple.com/us/app/m%C5%AFj-covid-pass/id1571587116"
                    target="_blank"
                    className="btn btn-outline-dark mb-1 me-md-3"
                  >
                    <i className="fab fa-apple fa-lg pe-1"></i>&nbsp;App Store
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=dev.koudelka.covidcertifikat"
                    target="_blank"
                    className="btn btn-outline-dark mb-1"
                  >
                    <i className="fab fa-google-play fa-lg pe-1"></i>
                    &nbsp;Google Play
                  </a> */}
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="container pt-5" id="download">
          <section className="my-5 py-5 px-2 px-md-5 shadow-5">
            <h3 className="mb-5 text-center">{t("download:title")}</h3>
            <div className="row">
              <div
                className={classNames("col-12 col-md-6", {
                  "order-2": isAppleSystem,
                })}
              >
                <div className="card text-center">
                  <div className="card-body">
                    <h3 className="card-title">Android</h3>
                    <div className="d-flex flex-column">
                      <img
                        src={`/img/mockup/${language}_android_homepage.webp`}
                        className={classNames(
                          "mx-auto my-4",
                          styles.imgScreenshot
                        )}
                        alt={t("alt:homepageAndroid")}
                      />
                      {/* <a
                        href="https://play.google.com/store/apps/details?id=dev.koudelka.covidcertifikat"
                        target="_blank"
                        className="btn btn-outline-primary mb-1"
                      >
                        <i className="fab fa-google-play fa-lg pe-1"></i>
                        &nbsp;Google Play
                      </a> */}
                      <button
                        className="btn btn-outline-primary mb-1 me-md-3 "
                        disabled
                      >
                        <i className="fab fa-google-play fa-lg pe-1"></i>&nbsp;
                        {t("download:soon")}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={classNames("col-12 col-md-6", {
                  "order-1": isAppleSystem,
                })}
              >
                <div className="card text-center">
                  <div className="card-body">
                    <h3 className="card-title">iOS</h3>
                    <div className="d-flex flex-column">
                      <img
                        src={`/img/mockup/${language}_ios_homepage.webp`}
                        className={classNames(
                          "mx-auto my-4",
                          styles.imgScreenshot
                        )}
                        alt={t("alt:homepageIOS")}
                      />
                      {/* <a
                        href="https://apps.apple.com/us/app/m%C5%AFj-covid-pass/id1571587116"
                        target="_blank"
                        className="btn btn-outline-primary mb-1 me-md-3"
                      >
                        <i className="fab fa-apple fa-lg pe-1"></i>&nbsp;App
                        Store
                      </a> */}
                      <button
                        className="btn btn-outline-primary mb-1 me-md-3 "
                        disabled
                      >
                        <i className="fab fa-apple fa-lg pe-1"></i>&nbsp;
                        {t("download:soon")}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="my-5 py-5 px-3 px-md-5 shadow-5" id="faq">
            <h3 className="mb-5 text-center">{t("faq:title")}</h3>
            <div className="row text-center text-md-start">
              <div className="col-md-6 mb-4">
                <h5 className="mb-3">{t("faq:q1")}</h5>
                <p className="justified-txt">{t("faq:q1Answer")}</p>
              </div>
              <div className="col-md-6 mb-4">
                <h5 className="mb-3">{t("faq:q2")}</h5>
                <p className="justified-txt">{t("faq:q2Answer")}</p>
              </div>
              <div className="col-md-6 mb-4">
                <h5 className="mb-3">{t("faq:q3")}</h5>
                <p className="justified-txt">{t("faq:q3Answer")}</p>
              </div>
              <div className="col-md-6 mb-4">
                <h5 className="mb-3">{t("faq:q4")}</h5>
                <p className="justified-txt">{t("faq:q4Answer")}</p>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<IProps> = async (
  context
) => {
  return {
    props: {
      uaString: context.req.headers["user-agent"],
    },
  };
};
