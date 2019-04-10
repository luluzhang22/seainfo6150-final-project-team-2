import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './ViewedProducts.module.css';

const ViewedProducts = ({ categories, products }) => {
  if (!products.length) {
    return null;
  }

  var viewed = products.slice(0, 5).map((product, index) => {
      const category = categories[product.categoryId];
      return (
          <div key={`${product.id}-${index}`} className={styles.viewedPro}>
              <Link to={`/products/${category.id}/${product.id}`}>
                  <img src={category.img.sm} alt='productImage'/>
              </Link>
              <div >
                  &#10095;{product.title}
              </div>
              <Link to={`/products/${category.id}/${product.id}`}>
                  <button>View Detail</button>
              </Link>
          </div>
      );
  });
  return (
      <div className={styles.viewedContainer}>
          <div className={styles.viewedProductsTitle}>
              Last Viewed Vehicles
          </div>
          <div className={styles.viewedProducts}>
              {viewed}
          </div>
      </div>
  )
};

ViewedProducts.propTypes = {
  categories: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired
};

export default ViewedProducts;
