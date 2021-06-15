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
          {t("pp:title")} - {t("common:title")}
        </title>
        <meta name="description" content={t("common:description")} />
      </Head>
      <Layout>
        <div className="container py-5">
          <h1>{t("pp:title")}</h1>
        </div>
      </Layout>
    </div>
  );
};

export default PP;
