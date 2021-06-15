import Head from "next/head";
import React from "react";
import { useTranslation } from "react-i18next";
import { Layout } from "../components/layout";

const PP: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Head>
        <title>
          {t("devTeam:title")} - {t("common:title")}
        </title>
        <meta name="description" content={t("common:description")} />
      </Head>
      <Layout>
        <div className="container py-5">
          <h1>{t("devTeam:title")}</h1>
          <div className="row my-5">
            <div className="col-12 col-md-4 p-3">
              <div className="card text-center">
                <div className="card-body py-4">
                  <h4 className="card-title">Karel Koudelka</h4>
                  <h5>{t("devTeam:kk")}</h5>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 p-3">
              <div className="card text-center">
                <div className="card-body py-4">
                  <h4 className="card-title">Adam Absolon</h4>
                  <h5>{t("devTeam:aa")}</h5>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 p-3">
              <div className="card text-center">
                <div className="card-body py-4">
                  <h4 className="card-title">Michal Špitálský</h4>
                  <h5>{t("devTeam:ms")}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default PP;
