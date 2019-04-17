import React from 'react';
import PropTypes from 'prop-types';
import styles from './Order.module.css';
import Error from "../Error/Error";
import { Link } from 'react-router-dom';

const OrderTabs = ({cur, selectedOptions, product, productImg, error}) => {

    const tabs = [{key: 1, value: "Car"}, {key: 2, value: "Exterior"}, {key: 3, value: "Interior"},
        {key: 4, value: "Accessories"}, {key: 5, value: "Payment"}];
    const requiredOptions = [{id: "color", name: " Color"}, {id: "numSeats", name: " Number of Seats"},
        {id: "interiorFabricColor", name: " Interior Fabric Color"}, {id: "dashboardColor", name: " Dashboard Color"},
        {id: "dashboardLightsColor", name: " Dashboard Lights Color"},
        {id: "hubcapsMaterial", name: " Hubcaps Material"}, {id: "numExhausts", name: " Number of Exhausts"},
        {id: "spareTire", name: " Spare Tire"}, {id: "engine", name: " Engine"}, {id: "floormatsColor", name: " Floormats Color"}];
    return (
        <div>
            {(!product)
                ? <Error error="Please select a Vehicle first!"/>
                :
                <div className={styles.orderTabs}>
                    {
                        tabs.map(element =>
                            <Link onClick={
                                event => {
                                    if (element.key === 5) {
                                        if (!selectedOptions) {
                                            event.preventDefault();
                                            alert('Please select value for following required options first: '
                                                + requiredOptions.toString());
                                            return;
                                        }
                                        let unselectedOptions = [];
                                        requiredOptions.forEach(element => {
                                            if (!selectedOptions[element.id]) {
                                                unselectedOptions.push(element.name);
                                            }
                                        });
                                        if (unselectedOptions.length > 0) {
                                            event.preventDefault();
                                            alert('Please select value for following required options first: '
                                                + unselectedOptions.toString());
                                        }
                                    }
                                }
                            }
                                  to={`/order/${element.key}`} key={element.key}
                                  className={cur === element.key ? styles.activedTab : styles.orderTab}>
                                {element.value}
                            </Link>
                        )
                    }
                </div>
            }
            {!product || cur === 5
                ? ""
                : <div>
                    <div className={styles.proImg}>
                        <img src={productImg} alt='productImg'/>
                    </div>
                    {/* start error display -- I suggest you leave this here */}
                    {
                        error && <Error error={error}/>
                    }
                    {/* end error display */}
                    <div className={styles.debugLog}>
                        Show all selected options of product["productId": "{product.id}"] for testing
                        <ul>
                            {
                                Object.keys(selectedOptions).map((key) => {
                                    return (
                                        <li key={key}>{key}: {selectedOptions[key]}</li>
                                    );
                                })
                            }
                        </ul>
                    </div>

                </div>
            }
        </div>
    );
};
OrderTabs.propTypes = {
    cur: PropTypes.number.isRequired
};
export default OrderTabs;
