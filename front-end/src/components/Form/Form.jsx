import React, { useState } from "react";

import styles from "./Form.module.css";

const Form = ({ onNewMessage }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onNewMessage(value);
  };

  const onChange = ({ currentTarget: input }) => {
    setValue(input.value);
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputWrapper}>
          <textarea
            placeholder="Type your message here..."
            required
            type="text"
            className={styles.input}
            name="content"
            value={value}
            onChange={onChange}
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
