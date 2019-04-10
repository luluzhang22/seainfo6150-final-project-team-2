import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from "react-router-dom";
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

  // if(selectedOptions.hasHoodOrnament == "true") {
  //
  // } else {
  //
  // }

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
          ? (<Redirect to="/order/5"/>)
          : (
              <div>
                  <OrderTabs cur="Accessories" selectedOptions={selectedOptions} product={product}
                             productImg={selectedProductImg}/>
                  <form onSubmit={this.handleSubmit.bind(this)}>

                    <div>
                    <spam>{options.hasGPS.name}
                      <select id="hasGPS-select" onChange={setProductOption.bind(null, 'hasGPS')}>
                        <option value="" className={styles.blankOption}></option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </spam>
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
                      <spam>{options.hasHoodOrnament.name}</spam>
                      <select id="hasHoodOrnament-select" onChange={setProductOption.bind(null, 'hasHoodOrnament')}>
                        <option value="" className={styles.blankOption}></option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>

                    <div>
                      <spam>{options.hoodOrnament.name}</spam>
                      <select id="hoodOrnament-select" onChange={setProductOption.bind(null, 'hoodOrnament')}>
                        <option value="" className={styles.blankOption}></option>
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

                    <div>
                      <spam>{options.hasTrunkMonkey.name}</spam>
                      <select id="hasTrunkMonkey-select" onChange={setProductOption.bind(null, 'hasTrunkMonkey')}>
                        <option value="" className={styles.blankOption}></option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>
                    <div>
                      <spam>{options.trunkMonkey.name}</spam>
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

                    <div>
                      <spam>{options.hasMonogrammedSteeringWheelCover.name}</spam>
                      <select id="hasMonogrammedSteeringWheelCover" onChange={setProductOption.bind(null, 'hasMonogrammedSteeringWheelCover') }>
                        <option value="" className={styles.blankOption}></option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                      <spam>{options.monogram.name}(Three Letters)</spam>
                      <input id="hasMonogrammedSteeringWheelCover" onChange={setProductOption.bind(null, 'monogram')}
                      pattern='[A-z]{3}'/>
                    </div>

                    <div className={styles.orderFooter}>
                          <input type="submit" value="Next"/>
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
