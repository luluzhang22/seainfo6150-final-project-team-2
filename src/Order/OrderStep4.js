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
          selectedProductImg,
          error
      } = this.props;

      let hoodOrnament;
      if(selectedOptions.hasHoodOrnament === "Yes"){
          hoodOrnament =
          <div className={styles.premiumContainer}>
          <select id="hoodOrnament-select" onChange={setProductOption.bind(null, 'hoodOrnament')} defaultValue={selectedOptions.hoodOrnament!==undefined?selectedOptions.hoodOrnament:""} required>
            <option value="">{options.hoodOrnament.name}</option>
            {
              Object.values(options.hoodOrnament.values).map((hoodOrnament,key) => {
                return (
                  <option key={key} value={hoodOrnament.id}>{hoodOrnament.id}</option>
                );
              })
            }
          </select>
          <ul className={styles.unorderedList}>
            {
              Object.values(options.hoodOrnament.values).map((hoodOrnament,key) => {
                return (
                    <li className={styles.listItem} key={key}>
                      <img className={styles.order4Img} src={hoodOrnament.img} alt={hoodOrnament.id}/>
                      <div className={styles.listP}>{hoodOrnament.id}</div>
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
        trunkMonkey =
            <div className={styles.premiumContainer}>
              <select id="trunkMonkey-select" onChange={setProductOption.bind(null, 'trunkMonkey')} defaultValue={selectedOptions.trunkMonkey!==undefined?selectedOptions.trunkMonkey:""} required>
                <option value="">{options.trunkMonkey.name}</option>
                    {
                        Object.values(options.trunkMonkey.values).map((trunkMonkey,key) => {
                            return (
                                <option key={key} value={trunkMonkey.id}>{trunkMonkey.id}</option>
                                );
                              })
                            }
                  </select>
                  <ul className={styles.unorderedList}>
                    {
                      Object.values(options.trunkMonkey.values).map((trunkMonkey,key)=> {
                        return (
                            <li key={key} className={styles.listItem}>
                              <img className={styles.order4Img} src={trunkMonkey.img.sm} alt={trunkMonkey.id}/>
                              <div className={styles.listP}>{trunkMonkey.id}</div>
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
        monogram = <div className={styles.finalContainer}>
          <div>{options.monogram.name}(Please enter three letters)</div>
          <input id="hasMonogrammedSteeringWheelCover" onChange={setProductOption.bind(null, 'monogram')} defaultValue={selectedOptions.monogram!==undefined?selectedOptions.monogram:""}
          pattern='[A-z]{3}'/>
        </div>
      }else{
      }

      const product = this.props.products[selectedProductId];
      return this.state.submittedSuccessfully
          ? (<Redirect to="/order/5"/>)
          : (
              <div>
                  <OrderTabs cur={4} selectedOptions={selectedOptions} product={product}
                             productImg={selectedProductImg} error={error}/>
                  <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className={styles.orderStep4Options}>

                      <div>
                        <select id="hasGPS-select" defaultValue={selectedOptions.hasGPS!==undefined?selectedOptions.hasGPS:""} onChange={setProductOption.bind(null, 'hasGPS')}>
                          <option value="">GPS?</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>

                      <div>
                        <select id="spareTire-select" defaultValue={selectedOptions.spareTire!==undefined?selectedOptions.spareTire:""} onChange={setProductOption.bind(null, 'spareTire')} required>
                          <option value="">Spare Tire</option>
                          <option value="S">S</option>
                          <option value="M">M</option>
                          <option value="L">L</option>
                          <option value="XL">XL</option>
                        </select>
                      </div>

                      <div>
                        <select id="hasHoodOrnament-select" onChange={setProductOption.bind(null, 'hasHoodOrnament')} defaultValue={selectedOptions.hasHoodOrnament!==undefined?selectedOptions.hasHoodOrnament:""}>
                          <option value="">Hood Ornament?</option>
                          <option value="Yes">Yes &ensp;&ensp;&ensp;&ensp; +$50 extra</option>
                          <option value="No">No</option>
                        </select>
                      </div>

                      <div>
                        <select id="hasTrunkMonkey-select" onChange={setProductOption.bind(null, 'hasTrunkMonkey')} defaultValue={selectedOptions.hasTrunkMonkey!==undefined?selectedOptions.hasTrunkMonkey:""}>
                          <option value="">{options.hasTrunkMonkey.name}</option>
                          <option value="Yes">Yes &ensp;&ensp;&ensp;&ensp; +$50 extra</option>
                          <option value="No">No</option>
                        </select>
                      </div>

                      <div>
                        <select id="hasMonogrammedSteeringWheelCover" onChange={setProductOption.bind(null, 'hasMonogrammedSteeringWheelCover')} defaultValue={selectedOptions.hasMonogrammedSteeringWheelCover!==undefined?selectedOptions.hasMonogrammedSteeringWheelCover:""}>
                          <option value="">Monogrammed Steering Wheel Cover?</option>
                          <option value="Yes">Yes &ensp;&ensp;&ensp;&ensp; +$50 extra</option>
                          <option value="no">No</option>
                        </select>
                      </div>

                    </div>

                    {hoodOrnament}
                    <div>{trunkMonkey}</div>
                    <div>{monogram}</div>

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
