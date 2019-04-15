import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from "react-router-dom";
import OrderTabs from "./OrderTabs";
import styles from "./Order.module.css";

class OrderStep4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submittedSuccessfully: false
    }
  }


  handleSubmit(event) {
     const requiredOptions = ['color', 'numSeats', 'interiorFabricColor', 'dashboardColor', 'dashboardLightsColor',
         'hubcapsMaterial', 'numExhausts', 'spareTire', 'engine', 'floormatsColor'];
     if (!this.props.selectedOptions) {
         alert('Please select value for following required options first: '
             + requiredOptions.toString());
         event.preventDefault();
         return;
     }
     let unselectedOptions = [];
     requiredOptions.forEach(element => {
         if (!this.props.selectedOptions[element]) {
             unselectedOptions.push(element);
         }
     });
     if (unselectedOptions.length > 0) {
         alert('Please select value for following required options first: '
             + unselectedOptions.toString());
         event.preventDefault();
         return;
     }
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

      let hoodOrnament;
      if(selectedOptions.hasHoodOrnament === "Yes"){
          hoodOrnament =
          <div>
          <span>{options.hoodOrnament.name}</span>
          <select id="hoodOrnament-select" onChange={setProductOption.bind(null, 'hoodOrnament')}>
            {
              Object.values(options.hoodOrnament.values).map(hoodOrnament => {
                return (
                  <option value={hoodOrnament.id}>{hoodOrnament.id}</option>
                );
              })
            }
          </select>
          <ul className={styles.unorderedList}>
            {
              Object.values(options.hoodOrnament.values).map((hoodOrnament,key) => {
                return (
                    <li className={styles.listItem} key={key}>
                      <div className={styles.listP}>{hoodOrnament.id}</div>
                      <img className={styles.order4Img} src={hoodOrnament.img} ult={hoodOrnament.id}/>
                    </li>
                );
              })
            }
          </ul>
        </div>
      }else{
          hoodOrnament = <div></div>
      }

      let trunkMonkey;
      if(selectedOptions.hasTrunkMonkey === 'Yes'){
        trunkMonkey =<div>
              <span>{options.trunkMonkey.name}</span>
                  <select id="trunkMonkey-select" onChange={setProductOption.bind(null, 'trunkMonkey')}>
                    {
                        Object.values(options.trunkMonkey.values).map(trunkMonkey => {
                            return (
                                <option value={trunkMonkey.id}>{trunkMonkey.id}</option>
                                );
                              })
                            }
                            </select>
                              <ul className={styles.unorderedList}>
                                {
                                  Object.values(options.trunkMonkey.values).map((trunkMonkey,key)=> {
                                    return (
                                        <li key={key} className={styles.listItem}>
                                          <div className={styles.listP}>{trunkMonkey.id}</div>
                                          <img className={styles.order4Img} src={trunkMonkey.img.sm} alt={trunkMonkey.id}/>
                                        </li>
                                      );
                                    })
                                  }
                                </ul>
                            </div>
      }else{
      }

      let monogram;
      if(selectedOptions.hasMonogrammedSteeringWheelCover === 'Yes'){
        monogram = <div>
          <span>{options.monogram.name}(Three Letters)</span>
          <input id="hasMonogrammedSteeringWheelCover" onChange={setProductOption.bind(null, 'monogram')}
          pattern='[A-z]{3}'/>
        </div>
      }else{
      }

      // const hoodOraType = () => {
      //   if (selectedOptions.hasHoodOrnament === 'true') {
      //     return(
      //       <div className={styles.oras}>
      //         <h4>{options.hoodOrnament.name}</h4>
      //         <div className={styles.oraType}>
      //           {Object.keys(options.hoodOrnament.values).map((value, index) => {
      //             return (
      //               <div key={index} className={styles.singleOra}>
      //                 <img src={options.hoodOrnament.values[value].img} alt={options.hoodOrnament.values[value].id}/>
      //                 <label>
      //                   <input
      //                     type='radio'
      //                     name='hoodOrnament'
      //                     value={options.hoodOrnament.values[value].id || ''}
      //                     onChange={setProductOption.bind(null, 'hoodOrnament')}
      //                     defaultChecked={value==='battleship'}
      //                   />
      //                   {value}
      //                 </label>
      //               </div>
      //               )
      //           })}
      //         </div>
      //       </div>
      //     )
      //   }
      // };

      const product = this.props.products[selectedProductId];
      return this.state.submittedSuccessfully
          ? (<Redirect to="/order/5"/>)
          : (
              <div>
                  <OrderTabs cur={4} selectedOptions={selectedOptions} product={product}
                             productImg={selectedProductImg}/>
                  <form onSubmit={this.handleSubmit.bind(this)}>

                    <div>
                    <span>{options.hasGPS.name}
                      <select id="hasGPS-select" onChange={setProductOption.bind(null, 'hasGPS')}>
                        <option value="" className={styles.blankOption}></option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                      </select>
                    </span>
                    </div>

                    <div>
                      <span>{options.spareTire.name}
                        <select id="spareTire-select" onChange={setProductOption.bind(null, 'spareTire')}>
                          <option value="" className={styles.blankOption}></option>
                          <option value="S">S</option>
                          <option value="M">M</option>
                          <option value="L">L</option>
                          <option value="XL">XL</option>
                        </select>
                      </span>
                    </div>


                    <div>
                      <span>{options.hasHoodOrnament.name}($50 extra)</span>
                      <select id="hasHoodOrnament-select" onChange={setProductOption.bind(null, 'hasHoodOrnament')}>
                        <option value="" className={styles.blankOption}></option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>


                    <div>{hoodOrnament}</div>

                    <div>
                      <span>{options.hasTrunkMonkey.name}($50 extra)</span>
                      <select id="hasTrunkMonkey-select" onChange={setProductOption.bind(null, 'hasTrunkMonkey')}>
                        <option value="" className={styles.blankOption}></option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>

                    <div>{trunkMonkey}</div>

                    <div>
                      <span>{options.hasMonogrammedSteeringWheelCover.name}($50 extra)</span>
                      <select id="hasMonogrammedSteeringWheelCover" onChange={setProductOption.bind(null, 'hasMonogrammedSteeringWheelCover') }>
                        <option value="" className={styles.blankOption}></option>
                        <option value="Yes">Yes</option>
                        <option value="no">No</option>
                      </select>

                    <div>{monogram}</div>

                    </div>

                    <div className={styles.orderFooter}>
                        <Link to='/order/3'>
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

OrderStep4.propTypes = {
  options: PropTypes.object.isRequired,
  selectedProductId: PropTypes.string
};

export default OrderStep4;
