import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

const AppBar: React.FC = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const { pathname } = router;

  return (
    <nav className="navbar navbar-expand-lg bg-light fixed-top">
      <div className="container">
        <Link href="/">
          <div className="navbar-brand pointer font-weight-bold">
            <img src="/img/logo.svg" className="me-2" height="40" alt="" />
            <small>{t("common:title")}</small>
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/#download">
                <span className="nav-link pointer">{t("download:title")}</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/#faq">
                <span className="nav-link pointer">{t("faq:title")}</span>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="languageSelector"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-globe-europe"></i>&nbsp;
                {t("navbar:language")}
              </a>
              <ul className="dropdown-menu" aria-labelledby="languageSelector">
                <li>
                  <Link href={pathname} locale="cs">
                    <a className="dropdown-item">Čeština</a>
                  </Link>
                </li>
                <li>
                  <Link href={pathname} locale="en">
                    <a className="dropdown-item">English</a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AppBar;
