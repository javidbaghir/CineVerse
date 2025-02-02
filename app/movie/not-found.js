import Link from "next/link";
import React from "react";
import styles from "../movie/page.module.css";


const notFound = () => {
  return (
    <div className={styles.notFoundWrapper}>
      <h1 className={styles.title}>
        We could not find the movie you looking for!
      </h1>
      <Link className={styles.link} href={"/"}>
        Go Home
      </Link>
    </div>
  );
};

export default notFound;
