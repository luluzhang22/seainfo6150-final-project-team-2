import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Categories.module.css';

const Categories = ({ categories }) => (
  <ul className={styles.categories}>
    {
      categories.map(category => {
        return (
          <li key={category.id}>
            <Link to={`/products/${category.id}`}>
              <span><img className={styles.img} src={category.img.sm} alt="404"/>{category.name}</span>
                <span>&#10095;</span>
            </Link>
          </li>
        );
      })
    }
  </ul>
);

Categories.propTypes = {
  categories: PropTypes.array.isRequired
};

export default Categories;
