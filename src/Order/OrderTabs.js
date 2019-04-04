import React from 'react';
import PropTypes from 'prop-types';
import styles from './Order.module.css';
import Error from "../Error/Error";

const OrderTabs = ({cur, selectedOptions, product, productImg}) => {

    const tabs = ["Car", "Exterior", "Interior", "Accessories", "Payment"];
    return (
        <div>

            <div className={styles.orderTabs}>
                {
                    tabs.map(val => <div className={cur === val ? styles.activedTab : styles.orderTab}>{val}</div>)
                }
            </div>
            {
                (!product)
                    ? <Error error="Please select a Vehicle first!"/>
                    : cur === "Payment"
                    ? ""
                    : <div>
                        <div className={styles.proImg}>
                            <img src={productImg} alt='productImg'/>
                        </div>
                        <div>
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
    cur: PropTypes.string.isRequired
};
export default OrderTabs;
