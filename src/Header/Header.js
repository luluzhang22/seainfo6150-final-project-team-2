import React from 'react';
import Categories from '../Categories/Categories';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = ({categories}) => (
    <div className={styles.header}>
        <div className={styles.navbar}>
            <div className={styles.categoryNav}>
                <div className={styles.title}>
                    <Link to='/'>
                        <img src='/assets/img/icons/logo.png' alt='logo'/>
                    </Link>
                </div>
                <div className={styles.categoryList}>
                    <Categories categories={Object.values(categories)} />
                </div>
            </div>
            <div className={styles.pagesNav}>
                <Link to='/'>Home</Link>
                <Link to='/products'>Products</Link>
                <Link to='/about'>About Us</Link>
                <Link to='/contact'>Contact Us</Link>
            </div>
        </div>
        <div className={styles.search}>
            <input type='search' placeholder='Search'/>
        </div>
        <div className={styles.help}>
            Live Help | Account | Cart
        </div>
    </div>
);

export default Header;
