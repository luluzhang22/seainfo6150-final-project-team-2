import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from "react-router-dom";
import OrderTabs from "./OrderTabs";
import styles from "./Order.module.css";
import Error from '../Error/Error'


class OrderStep2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submittedSuccessfully: false
    }
  }

  handleSubmit() {
    this.setState({
      submittedSuccessfully: true
    });
  }

  render() {
    const {
      options,
      selectedProductId,
      selectedOptions,
      setProductOption,
      selectedProductImg
    } = this.props;

    const product = this.props.products[selectedProductId];
    return this.state.submittedSuccessfully
      ? (<Redirect to="/order/3" />)
      : (
        <div>
          <OrderTabs cur={2} selectedOptions={selectedOptions} product={product}
            productImg={selectedProductImg} />
          <form onSubmit={this.handleSubmit.bind(this)}>
          <div className={styles.orderStep2Options}>
            <div>
              <select id="exhaust-select" defaultValue={selectedOptions.numExhausts?selectedOptions.numExhausts:""} onChange={setProductOption.bind(null, 'numExhausts')}>
                {options.numExhausts.name}:
                <option value="1">Number of exhausts</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>

            <div>
              <text>Select Your Car Color</text>
              <input type="color" onChange={setProductOption.bind(null, 'color')} required/>
            </div>

            <div>
              <select id="tintedWindows" onChange={setProductOption.bind(null, 'hasTintedWindows')} required>
                <option value="no">Tinted Windows</option>
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>

            <div>
              <select id="hubcapMaterials" onChange={setProductOption.bind(null, 'hubcapsMaterial')} required>
                <option value="chrome">Hubcap Materials</option>
                <option value="chrome">Chrome</option>
                <option value="steel">Steel</option>
                <option value="plastic">Plastic</option>
              </select>
            </div>
          </div>

          <div className={styles.orderFooter}>
              <Link to='/order/1'>
                <input type="button" value="Previous" />
              </Link>
              <div>
                <input type="submit" value="Next" />
              </div>
          </div>
          </form>
        </div>
      )
  }
}

OrderStep2.propTypes = {
  options: PropTypes.object.isRequired,
  selectedProductId: PropTypes.string
};

export default OrderStep2;
