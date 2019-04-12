import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from "react-router-dom";
import OrderTabs from "./OrderTabs";
import styles from "./Order.module.css";

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
          ? (<Redirect to="/order/3"/>)
          : (
              <div>
                  <OrderTabs cur="Exterior" selectedOptions={selectedOptions} product={product}
                             productImg={selectedProductImg}/>
                      
                      <div className = {styles.exhausts}>
                      <form onSubmit={this.handleSubmit.bind(this)}>
                      <div>
                      <div>
                      Number of exhausts<select id="exhaust-select" onChange={setProductOption.bind(null, 'numExhausts')}>
                        {options.numExhausts.name}:
                          <option>---</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                      </select>
                      </div>

                      <div>
                      Select Your Car Color<input type="color" 
                       onChange={setProductOption.bind(null, 'color')}/>
                      </div>

                      <div>
                      Tinted Windows<select id="tintedWindows" onChange={setProductOption.bind(null, 'hasTintedWindows')}>
                          <option>--</option>
                          <option value="No">No</option>
                          <option value="Yes">Yes</option>
                      </select>    
                      </div>

                      <div>
                      Hubcap Materials<select id="hubcapMaterials" onChange={setProductOption.bind(null, 'hubcapsMaterial')}>
                          <option>--</option>
                          <option value="chrome">Chrome</option>
                          <option value="steel">Steel</option> 
                          <option value="plastic">Plastic</option>
                      </select>  
                      </div>
                      
                      </div>
                  <div className={styles.orderFooter}>
                      <input type="submit" value="Next"/>
                  </div>
                  </form>          
                  </div>   
              </div>
          )
  }
}

OrderStep2.propTypes = {
  options: PropTypes.object.isRequired,
  selectedProductId: PropTypes.string
};

export default OrderStep2;
