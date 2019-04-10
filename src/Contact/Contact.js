import React from 'react';
import styles from './Contact.module.css';

const Contact = () => (
  <html>
  <body>
  <h1 className={styles.products_header}>Contact US</h1>
  <div>
    <article className = {styles.physical_Location}>
    <p>Location</p>
    <p>Time</p>
    <p>Map</p>
    </article>
  </div>
  <div>
  <form className={styles.form}>
    Name:<br/>
    <input type="text" name="Name" value="Your Fullname"/><br/>
    E-mail Address:<br/>
    <input type="text" name="email" value="E-mail Address"/><br/>
    Subject:<br/>
    <input type="text" name="subject" value="subject"/><br/>
    Message:<br/>
    <textarea>Some text...</textarea>
    <br/>
  <button type="submit" name="submit" value="Submit">Submit</button>
  </form>
  </div>
  </body>
  </html>
  
);

export default Contact;
