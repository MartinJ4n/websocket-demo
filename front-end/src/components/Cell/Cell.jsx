import React from "react";
import styles from "./Cell.module.css";

const Cell = ({ content }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.content}>{content}</p>
    </div>
  );
};

export default Cell;
