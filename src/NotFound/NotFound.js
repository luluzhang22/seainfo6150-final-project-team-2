import React from 'react';
import error from './error.png';
import styles from './NotFound.module.css';
import Home from '../Home/Home';
import {Link} from 'react-router-dom';

const NotFound = () => (
  <html>
    <body>
    <div className = {styles.container}>
    <h1 className={styles.products_header}>#404: These aren't the pages you're looking for.</h1>
    <div className = {styles.imageContainer}>
      <img className={styles.img} src={error} alt="404"/>
    </div>
    <div>
    <p className={styles.message}>These aren't the pages you're looking for. You can go about your business. Move along... move along.</p>
    <Link to = {'/'}>
      <button className={styles.button}>Home</button>
    </Link>
    </div>
    </div>
    </body>
  </html> 
);

export default NotFound;
