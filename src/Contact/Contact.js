import React from 'react';
import styles from './Contact.module.css';

const Contact = () => (
  <div>
  <div className={styles.title}>
  <text className={styles.title}>Contact Us</text>
  </div>
  <div className={styles.container}>
    <div className={styles.row}>
      <img src='/assets/img/icons/dealer.png' alt='logo' />
      <div className = {styles.contactInfo}>
      Our Location: 1234 2nd Ave, Seattle, WA, 98109<br/>
      Operation Hours: 9am to 5pm<br/>
      Phone Number: (206)123-4567<br/>
      </div>
    </div>
    <div class={styles.row}>
      <form className={styles.form}>
        <div className={styles.subtitle}>Contact Us</div>
        <div>
          <input type="text" placeholder='Full Name' />
        </div>
        <div>
          <input type="text" placeholder='E-Mail Address' />
        </div>
        <div>
          <input type="text" placeholder='Phone Number' />
        </div>
        <div>
          <textarea type="text" placeholder='...' />
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
