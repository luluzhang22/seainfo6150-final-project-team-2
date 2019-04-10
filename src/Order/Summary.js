import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from "react-router-dom";
import styles from "./Order.module.css";
import Error from "../Error/Error";

import TotalPrice from "./TotalPrice";

class Summary extends Component {
    render() {
        const {
            options,
            products,
            selectedOptions,
            selectedProductId,
            userInfo,
            selectedProductImg
        } = this.props;

        const product = this.props.products[selectedProductId];
        return !product ? <Error error="Please select a Vehicle first!"/>
            : (
                <div className={styles.summary}>
                    <header>
                        <h1>
                            Confirmation
                        </h1>
                        <h2>
                            Thank you for purchasing your vehicle at Vehicle Mart!
                        </h2>
                    </header>
                    <div className={styles.orderDetail}>
                        <h3>
                            Order Detail
                        </h3>
                        <div>
                            <div>
                                <img src={selectedProductImg} alt='productImg'/>
                            </div>
                            <div>
                                <ul>
                                    <li>Title: {product.title}</li>
                                    {
                                        Object.keys(selectedOptions).map((option) => {
                                            const originalOption = options[option];
                                            const selectedValue = selectedOptions[option];

                                            return (
                                                <li key={option}>{originalOption.name}: {selectedValue}</li>
                                            );
                                        })
                                    }
                                    <li>
                                        <TotalPrice
                                            options={options}
                                            selectedOptions={selectedOptions}
                                            product={products[selectedProductId]}
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={styles.paymentDetail}>
                        <h3>
                            Payment Information
                        </h3>
                        {/* This will iterate through all the user info so you can see what the user entered. */}
                        <ul>
                            <li>Full Name： {userInfo["Full Name"]}</li>
                            <li>Shipment Address: {userInfo["Shipment.Street"]}, {userInfo["Shipment.City"]}, {userInfo["Shipment.State"]}, {userInfo["Shipment.Zip Code"]}</li>
                            <li>Phone Number： {userInfo["Phone Number"]}</li>
                            <li>Cell Number： {userInfo["Cell Number"]}</li>
                            <li>Birthday： {userInfo["Birthday"]}</li>
                            {
                                userInfo["Billing.Street"]
                                    ? (
                                        <li>Shipment Address: {userInfo["Billing.Street"]}, {userInfo["Billing.City"]}, {userInfo["Billing.State"]}, {userInfo["Billing.Zip Code"]}</li>
                                    )
                                    : (
                                        <li>Shipment Address: {userInfo["Shipment.Street"]}, {userInfo["Shipment.City"]}, {userInfo["Shipment.State"]}, {userInfo["Shipment.Zip Code"]}</li>
                                    )
                            }
                        </ul>

                    </div>
                </div>
            )
    }
}

Summary.propTypes = {
  options: PropTypes.object.isRequired,
  products: PropTypes.object.isRequired,
  selectedOptions: PropTypes.object.isRequired,
  selectedProductId: PropTypes.string
};

export default Summary;
