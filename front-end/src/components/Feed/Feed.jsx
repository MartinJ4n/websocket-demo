import React from "react";

import Cell from "../Cell/Cell";

import styles from "./Feed.module.css";

const Feed = ({ feed }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        {feed.length !== 0 &&
          feed.map((el) => {
            return <Cell key={el._id} content={el.content} />;
          })}
      </div>
    </div>
  );
};

export default Feed;
