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

      let hoodOrnament;
      if(selectedOptions.hasHoodOrnament === "Yes"){
          hoodOrnament = <div>
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
              Object.values(options.hoodOrnament.values).map(hoodOrnament => {
                return (
                    <li key={hoodOrnament}>
                      <p>{hoodOrnament.id}</p>
                      <img className={styles.order4Img} src={hoodOrnament.img} />
                    </li>
                );
              })
            }
          </ul>
        </div>
      }else{
          // hoodOrnament = <span>No</span>
      }

      let trunkMonkey;
      if(selectedOptions.hasTrunkMonkey === 'Yes'){
        trunkMonkey =                     <div>
                              <span>{options.trunkMonkey.name}</span>
                              <select id="trunkMonkey-select" onChange={setProductOption.bind(null, 'trunkMonkey')}>
                                <option value="" className={styles.blankOption}></option>
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
                                  Object.values(options.trunkMonkey.values).map(trunkMonkey => {
                                    return (
                                        <li key={trunkMonkey}>
                                          <p>{trunkMonkey.id}</p>
                                          <img className={styles.order4Img} src={trunkMonkey.img.sm} />
                                        </li>
                                      );
                                    })
                                  }
                                </ul>
                            </div>
      }

      let monogram;
      if(selectedOptions.hasTrunkMonkey === 'Yes'){

      }else{

      }

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
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </span>
                    </div>

                    <div>
                      <spam>{options.spareTire.name}
                        <select id="spareTire-select" onChange={setProductOption.bind(null, 'spareTire')}>
                          <option value="" className={styles.blankOption}></option>
                          <option value="S">S</option>
                          <option value="M">M</option>
                          <option value="L">L</option>
                          <option value="XL">XL</option>
                        </select>
                      </spam>
                    </div>

                    <div>
                      <span>{options.hasHoodOrnament.name}</span>
                      <select id="hasHoodOrnament-select" onChange={setProductOption.bind(null, 'hasHoodOrnament')}>
                        <option value="" className={styles.blankOption}></option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>

                    <div>{hoodOrnament}</div>



                    <div>
                      <span>{options.hasTrunkMonkey.name}</span>
                      <select id="hasTrunkMonkey-select" onChange={setProductOption.bind(null, 'hasTrunkMonkey')}>
                        <option value="" className={styles.blankOption}></option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>


                    <div>
                      <span>{options.hasMonogrammedSteeringWheelCover.name}</span>
                      <select id="hasMonogrammedSteeringWheelCover" onChange={setProductOption.bind(null, 'hasMonogrammedSteeringWheelCover') }>
                        <option value="" className={styles.blankOption}></option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                      <span>{options.monogram.name}(Three Letters)</span>
                      <input id="hasMonogrammedSteeringWheelCover" onChange={setProductOption.bind(null, 'monogram')}
                      pattern='[A-z]{3}'/>

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
