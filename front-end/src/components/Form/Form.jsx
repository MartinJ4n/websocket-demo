import React from "react";

import styles from "./Form.module.css";

const Form = () => {
  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        <div className={styles.inputWrapper}>
          <input
            placeholder="Type your message here..."
            required
            type="text"
            className={styles.input}
          />
        </div>
        <div className={styles.submitWrapper}>
          <input type="submit" value="Submit" className={styles.submit} />
        </div>
      </form>
    </div>
  );
};

export default Form;
