import React from 'react';
import styles from './Contact.module.css';

const Contact = () => (
  <div>
  <div className={styles.title}>
  <text className={styles.title}>Contact Us</text>
  </div>
  <div className={styles.container}>
    <div className={styles.row}>
      <img src='/assets/img/icons/logo.png' alt='logo' />
    </div>
    <div class={styles.row}>
      <form className={styles.form}>
        <div>
          <label>Full name: </label>
          <input type="text" placeholder='Full Name' />
        </div>
        <div>
          <label>Shipment address:</label>
          <input type="text" placeholder='Street' />
        </div>
        <div>
          <label>E-Mail:</label>
          <input type="text" placeholder='E-Mail Address' />
        </div>
        <div>
          <label>Phone number:</label>
          <input type="text" placeholder='Phone Number' />
        </div>
        <div>
          <label>Cell number:</label>
          <input type="text" placeholder='Cell Number' />
        </div>
        <div>
          <button className={styles.button} type="button">Submit</button>
        </div>
      </form>
    </div>
  </div>
  </div>
);

export default Contact;
