import React from "react";

import styles from "./Form.module.css";

const Form = ({ inputValue, onChange, onSubmit, onKeyPress }) => {
  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.inputWrapper}>
          <textarea
            placeholder="Type your message here..."
            required
            type="text"
            className={styles.input}
            name="content"
            value={inputValue}
            onChange={onChange}
            onKeyPress={onKeyPress}
          />
        </div>
        <div className={styles.submitWrapper}>
          <button type="submit" value="Submit" className={styles.submit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
