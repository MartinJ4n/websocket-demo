import React from "react";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const getCurrentTime = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let format = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return `${hours}:${minutes} ${format}`;
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.leftWrapper}>
        <p class={styles.navText}>Welcome!</p>
      </div>
      <div className={styles.rightWrapper}>
        <p className={styles.navText}>{getCurrentTime()}</p>
      </div>
    </div>
  );
};

export default Navbar;
