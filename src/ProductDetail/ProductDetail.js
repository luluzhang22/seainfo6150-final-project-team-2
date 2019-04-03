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

    const category = categories[product.categoryId];
    return (
      <div>
        <span>{product.title}</span>
        <img src={category.img.lg} />

        <div>
            <ul>
              <li className={styles.ID}>category: {product.categoryId}</li>
              <li className={styles.year}>year: {product.year}</li>
              <li className={styles.price}>price: {product.price}</li>
              <li className={styles.sale}>sale: {product.sale}</li>
              <li className={styles.title}>title: {product.title}</li>
              <li className={styles.description}>description: {product.description}</li>
            </ul>
        </div>
        {/* start order button */}
        <Link to="/order/1" onClick={selectProductId.bind(null, product.id)}>Add to Cart</Link>
        {/* end order button */}

      </div>
    );
  }

}

export default ProductDetail;
