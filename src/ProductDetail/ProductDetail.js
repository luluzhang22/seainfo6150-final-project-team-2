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
                  <span className={styles.msrp_price}>${product.price} </span>
                </span>
    }

    if(product.available) {
        button = <div>
                    {/* start order button */}
                    <div className={styles.Button}>
                    <Link to="/order/1" onClick={selectProductId.bind(null, product.id)}>
                      <span>Customize Yours Today</span>
                    </Link>
                    </div>
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
              <li className={styles.info}>Category: {product.categoryId}</li>
              <li className={styles.info}>Year: {product.year}</li>
              <li className={styles.info}>Price: {price}</li>
              <li className={styles.info}>Title: {product.title}</li>
              <li className={styles.info}>Description: {product.description}</li>
            </ul>
            {button}
        </div>
      </div>
    );
  }

}

export default ProductDetail;
