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
      <li className = {styles.product_card} key={product.id}>
          <img className = {styles.product_img} src={category.img.sm} />
          <Link className = {styles.product_title} to={`/products/${product.categoryId}/${product.id}`}>
            {product.title}
          </Link>
          {price}
          <button>
          <Link className={styles.detail_button} to={`/products/${product.categoryId}/${product.id}`}>
            Detail
          </Link>
          </button>
          <button className={styles.add_to_cart_button}>Add to Cart</button>

      </li>
    );
  })
};

Products.propTypes = {
  products: PropTypes.array.isRequired
};

export default Products;
