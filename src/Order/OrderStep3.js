import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from "react-router-dom";
import OrderTabs from "./OrderTabs";
import styles from "./Order.module.css";
import Error from '../Error/Error'

class OrderStep3 extends Component {
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
          selectedProductImg,
          error,
          categories
      } = this.props;

      const product = this.props.products[selectedProductId];
      const category = product.categoryId;
      let radioOptions = options.radioType.values[category]
      let k = 1;
      let i=1;
      let radioElement =
      <span>
        <select onChange={setProductOption.bind(null, 'hasRadio')}>
          <option value={true}>Yes</option>
          <option selected value={false}>No</option>
        </select>
      </span>
      if(category==='sportsCar') {
        i = 2
      } else if(category==='limousine') {
        i = 8
      } else if(category==='fireEngine') {
        i = 2
        radioOptions = []
        radioElement =
        <span>
          <select onChange={setProductOption.bind(null, 'hasRadio')}>
            <option selected value={false}>Unavailable</option>
          </select>
        </span>
      } else {
        i=10

      }
      let numCupHoldersElement = ''
      if(selectedOptions.hasCupholders==="true"){
        numCupHoldersElement =
        <div>
        {options.numCupholders.name}:
        <input onChange={setProductOption.bind(null, 'numCupholders')}/>
        </div>
      }

      let numCigaretteLightersElement = ''
      if(selectedOptions.hasCigaretteLighters==="true"){
        numCigaretteLightersElement =
        <div>
        {options.numCigaretteLighters.name}:
        <input onChange={setProductOption.bind(null, 'numCigaretteLighters')}/>
        </div>
      }

      let radioTypeElement = ''
      if(selectedOptions.hasRadio==="true") {
        radioTypeElement =
        <div>
        {options.radioType.name}:
        <select onChange={setProductOption.bind(null, 'radioType')}>
        {radioOptions.map(radioOption => (
        <option key={radioOption} value={radioOption}>
           {radioOption}
        </option>
        ))}
        </select>
        </div>
      }

      const seatOptions = []


      for (let a=1; a <= i; a++) { seatOptions.push(a) }

      return this.state.submittedSuccessfully
          ? (<Redirect to="/order/4"/>)
          : (

            <div>
               <Error />
               <OrderTabs cur={3} selectedOptions={selectedOptions} product={product}
                  productImg={selectedProductImg}/>
               <form onSubmit={this.handleSubmit.bind(this)}>
                  <div>


                     {options.interiorFabricColor.name}:
                     <select onChange={setProductOption.bind(null, 'interiorFabricColor')}>
                     <option value="Tan">Tan</option>
                     <option value="Gray">Gray</option>
                     <option value='Black'>Black</option>
                     <option value='Red'>Red</option>
                     <option value='Maroon'>Maroon</option>
                     <option value='Green'>Green</option>
                     </select>
                  </div>
                  <div>
                     {options.numSeats.name}:
                     <select onChange={setProductOption.bind(null, 'numSeats')}>
                     {seatOptions.map(option => (
                     <option key={option} value={option}>
                        {option}
                     </option>
                     ))}
                     </select>
                  </div>
                  <div>
                     {options.dashboardColor.name}:
                     <select onChange={setProductOption.bind(null, 'dashboardColor')}>
                     <option value="Tan">Tan</option>
                     <option value="Gray">Gray</option>
                     <option value='Black'>Black</option>
                     <option value='Red'>Red</option>
                     <option value='Maroon'>Maroon</option>
                     <option value='Green'>Green</option>
                     </select>
                  </div>
                  <div>
                     {options.dashboardLightsColor.name}: <input onChange={setProductOption.bind(null, 'dashboardLightsColor')}/>
                  </div>
                  <div>
                     {options.hasRadio.name}:
                     {radioElement}
                  </div>
                  {radioTypeElement}
                  <div>
                     {options.hasGloveBox.name}:
                     <select onChange={setProductOption.bind(null, 'hasGloveBox')}>
                     <option value={true}>Yes</option>
                     <option selected value={false}>No</option>
                     </select>
                  </div>
                  <div>
                     {options.hasCupholders.name}:
                     <select onChange={setProductOption.bind(null, 'hasCupholders')}>
                     <option value={true}>Yes</option>
                     <option selected value={false}>No</option>
                     </select>
                  </div>

                  {numCupHoldersElement}

                  <div>
                     {options.hasCigaretteLighters.name}:
                     <select onChange={setProductOption.bind(null, 'hasCigaretteLighters')}>
                     <option value={true}>Yes</option>
                     <option selected value={false}>No</option>
                     </select>
                  </div>
                  {numCigaretteLightersElement}
                  <div>
                     {options.hasAirConditioning.name}:
                     <select onChange={setProductOption.bind(null, 'hasAirConditioning')}>
                     <option value={true}>Yes</option>
                     <option selected value={false}>No</option>
                     </select>
                  </div>
                  <div>
                     {options.floormatsColor.name}:
                     <input onChange={setProductOption.bind(null, 'floormatsColor')}/>
                  </div>
                  <div className={styles.orderFooter}>
                      <Link to='/order/2'>
                          <input type="button" value="Previous"/>
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

OrderStep3.propTypes = {
  options: PropTypes.object.isRequired,
  selectedProductId: PropTypes.string
};

export default OrderStep3;
