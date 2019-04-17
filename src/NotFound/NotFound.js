import React from 'react';
import error from './error.png';
import styles from './NotFound.module.css';
import {Link} from 'react-router-dom';

const NotFound = () => (
<div>
    <div className={styles.container}>
        <div>
            <h1 className={styles.products_header}>#404: These aren't the pages you're looking for.</h1>
        </div>
        <div className={styles.imageContainer}>
            <img className={styles.img} src={error} alt="404"/>
        </div>
        <div>
            <p className={styles.message}>These aren't the pages you're looking for. You can go about your business.
                Move along... move along.</p>
            <Link to={'/'}>
                <span className={styles.button}>Home</span>
            </Link>
        </div>
    </div>
</div>
);

export default NotFound;
