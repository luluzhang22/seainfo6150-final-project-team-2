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
    console.log(this.props.selectedOptions.dashboardColor);
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
      } = this.props;

      const product = this.props.products[selectedProductId];
      const category = product!=null?product.categoryId:"";
      let radioOptions = options.radioType.values[category]

      let i=1;

      let errorElement;
      let submitButtonElement =
      <input type="submit" value="Next" />
      if(
        this.props.selectedOptions.dashboardColor === undefined||
        this.props.selectedOptions.dashboardLightsColor === undefined||
        this.props.selectedOptions.floormatsColor === undefined||
        this.props.selectedOptions.hasAirConditioning === undefined||
        this.props.selectedOptions.hasCigaretteLighters === undefined||
        this.props.selectedOptions.hasCupholders === undefined||
        this.props.selectedOptions.hasGloveBox === undefined||
        this.props.selectedOptions.hasRadio === undefined||
        this.props.selectedOptions.interiorFabricColor === undefined||
        this.props.selectedOptions.numSeats === undefined

      ) {
        submitButtonElement =
        <div className={styles.ToolTip}>
        <input type="submit" value="Next" disabled={true} title="Please select options or correct errors before proceeding!!" />
        </div>

        errorElement = <Error error="Please select interior options!!" />
      }
      let radioElement =
      <span>
        <select defaultValue={this.props.selectedOptions.hasRadio!==undefined?this.props.selectedOptions.hasRadio:""} onChange={setProductOption.bind(null, 'hasRadio')}>
        <option value="">{options.hasRadio.name}</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
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

        <select defaultValue={this.props.selectedOptions.radioType!==undefined?this.props.selectedOptions.radioType:""} onChange={setProductOption.bind(null, 'radioType')}>
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


      for (let a=1; a <= i; a++) { seatOptions.push(a) }

      return this.state.submittedSuccessfully
          ? (<Redirect to="/order/4"/>)
          : (

            <div>

               <OrderTabs cur={3} selectedOptions={selectedOptions} product={product}
                  productImg={selectedProductImg}/>
               <form onSubmit={this.handleSubmit.bind(this)}>
               {errorElement}

               <div className={styles.orderStep3Options}>
                  <div>

                     <select defaultValue={this.props.selectedOptions.interiorFabricColor!==undefined?this.props.selectedOptions.interiorFabricColor:""} onChange={setProductOption.bind(null, 'interiorFabricColor')}>
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

                     <select defaultValue={this.props.selectedOptions.numSeats!==undefined?this.props.selectedOptions.numSeats:""} onChange={setProductOption.bind(null, 'numSeats')}>
                     <option value="" >{options.numSeats.name}</option>
                     {seatOptions.map(option => (
                     <option key={option} value={option}>
                        {option}
                     </option>
                     ))}
                     </select>
                  </div>
                  <div>

                     <select defaultValue={this.props.selectedOptions.dashboardColor!==undefined?this.props.selectedOptions.dashboardColor:""} onChange={setProductOption.bind(null, 'dashboardColor')}>
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
                     <input value={this.props.selectedOptions.dashboardLightsColor!==undefined?this.props.selectedOptions.dashboardLightsColor:""} type="color" onChange={setProductOption.bind(null, 'dashboardLightsColor')}/>
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
                     <input type="color" value={this.props.selectedOptions.floormatsColor!==undefined?this.props.selectedOptions.floormatsColor:""} onChange={setProductOption.bind(null, 'floormatsColor')}/>
                  </div>
                  </div>
                  <div className={styles.orderFooter}>
                      <Link to='/order/2'>
                          <input type="button" value="Previous"/>
                      </Link>
                      <div>
                      {submitButtonElement}
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
