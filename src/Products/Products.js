import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Products.module.css'

const Products = ({ categories, products }) => {
  return products.map(product => {
    const category = categories[product.categoryId];
    let price;
    if(product.sale>0) {
      price = <div>
                <span className={styles.strike_price}>${product.price} </span>
                <span className={styles.final_price}>${product.sale} </span>
              </div>
    } else {
        price = <div>
                  <span className={styles.final_price}>${product.price} </span>
                </div>
    }
    return (
      <li key={`${product.id}`} className={styles.Product}>
          <Link to={`/products/${category.id}/${product.id}`} class={styles.ProductLink}>
              <img src={category.img.sm} alt='productImage'/>
          <div >
              &#10095;{product.title}
          </div>
          {price}
              <button>View Detail</button>
          </Link>
      </li>
    );
  })
};

Products.propTypes = {
  products: PropTypes.array.isRequired
};

export default Products;
