import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from "react-router-dom";
import OrderTabs from "./OrderTabs";
import styles from "./Order.module.css";

class OrderStep1 extends Component {
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
          ? (<Redirect to="/order/2"/>)
          : (
              <div>
                  <OrderTabs cur="Car" selectedOptions={selectedOptions} product={product}
                             productImg={selectedProductImg}/>
                  <form onSubmit={this.handleSubmit.bind(this)}>
                  <p>Number of Engines</p>
                  <div className= {styles.package}>
                      package 1: 4-cylinder
                      <button type="button" value="4-cylinder" onClick={setProductOption.bind(null, 'engine')}>select</button>
                  </div>
                  <div className= {styles.package}>
                      package 2: 6-cylinder
                      <button type="button" value="6-cylinder" onClick={setProductOption.bind(null, 'engine')}>select</button>
                  </div>
                  <div className= {styles.package}>
                      package 3: 12-cylinder
                      <button type="button" value="12-cylinder" onClick={setProductOption.bind(null, 'engine')}>select</button>
                  </div>
              
                  <div className={styles.orderFooter}>
                      <input type="submit" value="Next"/>
                  </div>
                  </form>
              </div>
          )
  }
}

OrderStep1.propTypes = {
  options: PropTypes.object.isRequired,
  selectedProductId: PropTypes.string
};

export default OrderStep1;
