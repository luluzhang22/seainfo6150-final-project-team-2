import React from 'react';
import PropTypes from 'prop-types';

import Products from '../Products/Products';
import styles from '../ProductsList.module.css'

const AllProducts = ({ categories, products }) => (
  <div className={styles.products_module} >
  <h2 className={styles.products_header}>What's in our inventory</h2>
  <ul className={styles.products}>
  <Products className={styles.products_list} categories={categories} products={products} />
  </ul>
  </div>
);

AllProducts.propTypes = {
  products: PropTypes.array.isRequired
};

export default AllProducts;
