import React from "react";
import Skeleton from "@/components/skeleton";
import styles from "../categories/style.module.css";

function CategoriesLoading() {
  return (
    <div className={styles.categories}>
      {Array(5)
        .fill(null)
        .map((_, index) => (
          <Skeleton key={index} height={72} />
        ))}
    </div>
  );
}

export default CategoriesLoading;
