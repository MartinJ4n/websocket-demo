import React from "react";

import Cell from "../Cell/Cell";

import styles from "./Feed.module.css";

const Feed = () => {
  let content = [
    {
      id: 1,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, officiis?",
    },
    {
      id: 2,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, officiis?",
    },
    {
      id: 3,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, officiis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, officiis? ",
    },
    {
      id: 4,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, officiis?",
    },
    {
      id: 5,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, officiis?",
    },
    {
      id: 6,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, officiis?",
    },
    {
      id: 7,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, officiis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, officiis?",
    },
    {
      id: 8,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, officiis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, officiis?",
    },
    {
      id: 9,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, officiis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, officiis?",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        {content.map((el) => {
          return <Cell key={el.id} content={el.content} />;
        })}
      </div>
    </div>
  );
};

export default Feed;
