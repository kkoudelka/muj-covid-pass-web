import React from "react";
import { AppBar } from "../appbar";
import styles from "../../styles/Layout.module.scss";
import { Footer } from "../footer";

const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.main}>
      <AppBar />
      <main>
        <div className={styles.toolbar} />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
