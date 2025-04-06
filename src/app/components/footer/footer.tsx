// components/Footer.tsx
import React from "react";
import styles from "./footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Expenzo. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
