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
                  <div className= {styles.package}>
                      package 1
                      <input type="submit" value="select"/>
                  </div>
                  <div className= {styles.package}>
                      package 2
                      <input type="submit" value="select"/>
                  </div>
                  <div className= {styles.package}>
                      package 3
                      <input type="submit" value="select"/>
                  </div>

                  <div className = {styles.exhausts}>
                      <form onSubmit={this.handleSubmit.bind(this)}>Number of exhausts
                      <select id="exhaust-select" onChange={setProductOption.bind(null, 'numExhausts')}>
                      {options.numExhausts.name}:
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      </select>
                      </form>
                  </div>
                  <div className={styles.orderFooter}>
                      <input type="submit" value="Next"/>
                  </div>
                  {/* </form> */}
              </div>
          )
  }
}

OrderStep1.propTypes = {
  options: PropTypes.object.isRequired,
  selectedProductId: PropTypes.string
};

export default OrderStep1;
