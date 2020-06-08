import React, { useState, useEffect } from "react";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const [time, setTime] = useState();

  useEffect(() => {
    setInterval(() => {
      let date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let format = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      hours = hours !== 0 ? hours : format === "PM" && 12;
      setTime(`${hours}:${minutes} ${format}`);
    }, 1000);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.leftWrapper}>
        <p className={styles.navText}>Welcome!</p>
      </div>
      <div className={styles.rightWrapper}>
        <p className={styles.navText}>{time}</p>
      </div>
    </div>
  );
};

export default Navbar;
