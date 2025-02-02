import Link from "next/link";
import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import styles from "../header/styles.module.css";

const Header = () => {
  return (
    <header className={`${styles.header} container fluit`}>
      <div className={styles.headerWrapper}>
        <Link href={"/"} className={styles.logo}>
          <FaPlayCircle /> CineVerse
        </Link>
        <nav className={styles.navigationMenu}>
          <Link href={"/movies"}>Movies</Link>
          <Link href={"/series"}>Series</Link>
          <Link href={"/kids"}>Kids</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
