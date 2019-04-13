import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from "react-router-dom";
import OrderTabs from "./OrderTabs";
import styles from "./Order.module.css";
import "./Order.css";

class OrderStep1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submittedSuccessfully: false,
      buttonStyle: -1,
      packageStyle: -1
    }
  }
  handleSubmit() {
    this.setState({
      submittedSuccessfully: true
    });
  }

  buttonHandler(num, e, setProductOption) {
    console.log(e.target);
    this.setState({ buttonStyle: num });
    this.setState({ packageStyle: num });
    setProductOption('engine', e);
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
    let packagestatus = this.state.packageStyle;
    let buttonstatus = this.state.buttonStyle;
    return this.state.submittedSuccessfully
      ? (<Redirect to="/order/2" />)
      : (
        <div>
          <OrderTabs cur={1} selectedOptions={selectedOptions} product={product}
            productImg={selectedProductImg} />
          <form onSubmit={this.handleSubmit.bind(this)}>
            <p>Number of Engines</p>
            <div className={packagestatus === 0 ? "packageSelected" : "packageNormal"}>
              package 1: 4-cylinder
                      <button className={buttonstatus === 0 ? "buttonSelected" : "buttonNormal"} id="type1" number="0" type="button" value="4-cylinder" onClick={(e) => this.buttonHandler(0, e, setProductOption)}>select</button>
            </div>
            <div className={packagestatus === 1 ? "packageSelected" : "packageNormal"}>
              package 2: 6-cylinder
                      <button className={buttonstatus === 1 ? "buttonSelected" : "buttonNormal"} id="type1" number="1" type="button" value="6-cylinder" onClick={(e) => this.buttonHandler(1, e, setProductOption)}>select</button>
            </div>
            <div className={packagestatus === 2 ? "packageSelected" : "packageNormal"}>
              package 3: 12-cylinder
                      <button className={buttonstatus === 2 ? "buttonSelected" : "buttonNormal"} id="type1" number="2" type="button" value="12-cylinder" onClick={(e) => this.buttonHandler(2, e, setProductOption)}>select</button>
            </div>

            <div className={styles.orderFooter}>
                <div>
                    <input type="submit" value="Next" />
                </div>
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
