import React from 'react';
import PropTypes from 'prop-types';

import Products from '../Products/Products';
import styles from '../ProductsList.module.css'

const CategoryProducts = ({ category, categories, products }) => (
  <div className={styles.products_module} >
  <h2 className={styles.products_header}>You're looking at our {category.name}s</h2>
  <ul className={styles.products}>
  <Products className={styles.products_list} categories={categories} products={products} />
  </ul>
  </div>
);

CategoryProducts.propTypes = {
  category: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired
};

export default CategoryProducts;
