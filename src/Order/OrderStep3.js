import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from "react-router-dom";
import OrderTabs from "./OrderTabs";
import styles from "./Order.module.css";

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
          error
      } = this.props;

      const product = this.props.products[selectedProductId];
      const category = product!=null?product.categoryId:"";
      let radioOptions = options.radioType.values[category]

      let i=1;
      let a=1;




      let radioElement =
      <span>
        <select defaultValue={this.props.selectedOptions.hasRadio!==undefined?this.props.selectedOptions.hasRadio:""} onChange={setProductOption.bind(null, 'hasRadio')}>
        <option value="">{options.hasRadio.name}</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
      </span>
      if(category==='sportsCar') {
        i = a = 2

      } else if(category==='limousine') {
        i = a = 8
      } else if(category==='fireEngine') {
        i = a = 2
        radioOptions = []
        radioElement =
        <span>
          <select onChange={setProductOption.bind(null, 'hasRadio')}>
            <option value={false}>Radio Type Unavailable</option>
          </select>
        </span>
      } else {
        i=10

      }
      let numCupHoldersElement = ''
      if(selectedOptions.hasCupholders==="true"){
        numCupHoldersElement =
        <div>
        <select defaultValue={this.props.selectedOptions.numCupholders!==undefined?this.props.selectedOptions.numCupholders:""} onChange={setProductOption.bind(null, 'numCupholders')} required>
          <option value="">{options.numCupholders.name}</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
        </select>
        </div>
      }

      let numCigaretteLightersElement = ''
      if(selectedOptions.hasCigaretteLighters==="true"){
        numCigaretteLightersElement =
        <div>
        <select defaultValue={this.props.selectedOptions.numCigaretteLighters!==undefined?this.props.selectedOptions.numCigaretteLighters:""} onChange={setProductOption.bind(null, 'numCigaretteLighters')} required>
          <option value="">{options.numCigaretteLighters.name}</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
        </div>
      }

      let radioTypeElement = ''
      if(selectedOptions.hasRadio==="true") {
        radioTypeElement =
        <div>

        <select defaultValue={this.props.selectedOptions.radioType!==undefined?this.props.selectedOptions.radioType:""} onChange={setProductOption.bind(null, 'radioType')} required>
        <option value="">{options.radioType.name}</option>
        {radioOptions.map(radioOption => (
        <option key={radioOption} value={radioOption}>
           {radioOption}
        </option>
        ))}
        </select>
        </div>
      }

      const seatOptions = []


      for (let z=a; z <= i; z++) { seatOptions.push(z) }

      return this.state.submittedSuccessfully
          ? (<Redirect to="/order/4"/>)
          : (

            <div>

               <OrderTabs cur={3} selectedOptions={selectedOptions} product={product}
                  productImg={selectedProductImg} error={error}/>
               <form onSubmit={this.handleSubmit.bind(this)}>


               <div className={styles.orderStep3Options}>
                  <div>

                     <select defaultValue={this.props.selectedOptions.interiorFabricColor!==undefined?this.props.selectedOptions.interiorFabricColor:""} onChange={setProductOption.bind(null, 'interiorFabricColor')} required>
                     <option value="">{options.interiorFabricColor.name}</option>
                     <option value="Tan">Tan</option>
                     <option value="Gray">Gray</option>
                     <option value='Black'>Black</option>
                     <option value='Red'>Red</option>
                     <option value='Maroon'>Maroon</option>
                     <option value='Green'>Green</option>
                     </select>
                  </div>
                  <div>

                     <select defaultValue={this.props.selectedOptions.numSeats!==undefined?this.props.selectedOptions.numSeats:""} onChange={setProductOption.bind(null, 'numSeats')} required>
                     <option value="" >{options.numSeats.name}</option>
                     {seatOptions.map(option => (
                     <option key={option} value={option}>
                        {option}
                     </option>
                     ))}
                     </select>
                  </div>
                  <div>

                     <select defaultValue={this.props.selectedOptions.dashboardColor!==undefined?this.props.selectedOptions.dashboardColor:""} onChange={setProductOption.bind(null, 'dashboardColor')} required>
                     <option value="">{options.dashboardColor.name}</option>
                     <option value="Tan">Tan</option>
                     <option value="Gray">Gray</option>
                     <option value='Black'>Black</option>
                     <option value='Red'>Red</option>
                     <option value='Maroon'>Maroon</option>
                     <option value='Green'>Green</option>
                     </select>
                  </div>
                  <div>
                     <span> Select {options.dashboardLightsColor.name} </span>
                     <input value={this.props.selectedOptions.dashboardLightsColor!==undefined?this.props.selectedOptions.dashboardLightsColor:this.props.selectedOptions.dashboardLightsColor="#0000FF"} type="color" onChange={setProductOption.bind(null, 'dashboardLightsColor')} required/>
                  </div>
                  <div>

                     {radioElement}
                  </div>
                  {radioTypeElement}
                  <div>

                     <select defaultValue={this.props.selectedOptions.hasGloveBox!==undefined?this.props.selectedOptions.hasGloveBox:""} onChange={setProductOption.bind(null, 'hasGloveBox')}>
                     <option value="">{options.hasGloveBox.name}</option>
                     <option value={true}>Yes</option>
                     <option value={false}>No</option>
                     </select>
                  </div>
                  <div>

                     <select defaultValue={this.props.selectedOptions.hasCupholders!==undefined?this.props.selectedOptions.hasCupholders:""} onChange={setProductOption.bind(null, 'hasCupholders')}>
                     <option value="">{options.hasCupholders.name}</option>
                     <option value={true}>Yes</option>
                     <option value={false}>No</option>
                     </select>
                  </div>

                  {numCupHoldersElement}

                  <div>

                     <select defaultValue={this.props.selectedOptions.hasCigaretteLighters!==undefined?this.props.selectedOptions.hasCigaretteLighters:""} onChange={setProductOption.bind(null, 'hasCigaretteLighters')}>
                     <option value="">{options.hasCigaretteLighters.name}</option>
                     <option value={true}>Yes</option>
                     <option value={false}>No</option>
                     </select>
                  </div>
                  {numCigaretteLightersElement}
                  <div>

                     <select defaultValue={this.props.selectedOptions.hasAirConditioning!==undefined?this.props.selectedOptions.hasAirConditioning:""} onChange={setProductOption.bind(null, 'hasAirConditioning')}>
                     <option value="">{options.hasAirConditioning.name}</option>
                     <option value={true}>Yes</option>
                     <option value={false}>No</option>
                     </select>
                  </div>
                  <div>
                     <span>Select {options.floormatsColor.name} </span>
                     <input type="color" value={this.props.selectedOptions.floormatsColor!==undefined?this.props.selectedOptions.floormatsColor:this.props.selectedOptions.floormatsColor="#000000"} onChange={setProductOption.bind(null, 'floormatsColor')} required/>
                  </div>
                  </div>
                  <div className={styles.orderFooter}>
                      <Link to='/order/2'>
                          <span>Previous</span>
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
