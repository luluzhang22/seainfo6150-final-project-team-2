import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductDetail.module.css';

class ProductDetail extends PureComponent {
  componentDidMount() {
    this.props.viewProduct(this.props.product.id);
  }

  render() {
    const {
      categories,
      product,
      selectProductId
    } = this.props;

    let button;
    let price;
    if(product.sale>0) {
      price = <span>
                <span className={styles.strike_price}>${product.price} </span>
                <span className={styles.final_price}>${product.sale} </span>
              </span>
    } else {
        price = <span>
                  <span className={styles.final_price}>${product.price} </span>
                </span>
    }

    if(product.available) {
        button = <div>
                    {/* start order button */}
                    <Link to="/order/1" onClick={selectProductId.bind(null, product.id)}>
                      <button className={styles.Button}>Customize Yours Today</button>
                    </Link>
                    {/* end order button */}
                </div>
    } else {
        button = <div className={styles.sorryMessage}>Sorry, Currently Not Available!</div>
    }


    const category = categories[product.categoryId];
    return (
      <div className={styles.wholeContainer}>
        <img className={styles.img} src={category.img.lg} alt="pics"/>
        <div className={styles.imgTitle}>{product.title}</div>
        <div className={styles.innerContainer}>
            <ul>
              <li className={styles.ID}>Category: {product.categoryId}</li>
              <li className={styles.year}>Year: {product.year}</li>
              <li className={styles.price}>Price: {price}</li>
              <li className={styles.title}>Title: {product.title}</li>
              <li className={styles.description}>Description: {product.description}</li>
            </ul>
            <div>{button}</div>
        </div>
      </div>
    );
  }

}

export default ProductDetail;
