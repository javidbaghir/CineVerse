import Link from "next/link";
import React from "react";
import styles from "../footer/styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Made by JavidBaghir
      <Link href={"https://www.linkedin.com/in/javid-baghir/"} target="_blank">
        Linkedin
      </Link>
    </footer>
  );
};

export default Footer;
