import Head from "next/head";
import React from "react";
import { useTranslation } from "react-i18next";

interface IProps {
  description: string;
  title: string;
  image: string;
}

const MetaHead: React.FC<IProps> = ({ description, title, image }) => {
  const { t, i18n } = useTranslation();

  const baseDomain = "https://dev.mujcovidpass.cz/";

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="image" content={`${baseDomain}${image}`} />
      {/* <!-- Schema.org for Google --> */}
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={`${baseDomain}${image}`} />
      {/* <!-- Open Graph general (Facebook, Pinterest & Google+) --> */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${baseDomain}${image}`} />
      <meta property="og:url" content="https://mujcovidpass.cz/" />
      <meta property="og:site_name" content={t("common:title")} />
      <meta property="og:locale" content={i18n.language} />
      <meta property="og:type" content="website" />
      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image:src" content={`${baseDomain}${image}`} />
    </Head>
  );
};

export default MetaHead;
