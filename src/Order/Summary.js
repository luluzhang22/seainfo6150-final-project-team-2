import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import styles from "./Order.module.css";
import Error from "../Error/Error";

import TotalPrice from "./TotalPrice";

class Summary extends Component {
    printPage(){
        window.print();
    }
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
                        <div>
                            <div>
                                <img src={selectedProductImg} alt='productImg'/>
                            </div>
                        </div>
                        <div>
                            <div className={styles.summaryTitle}>
                                Order Detail
                            </div>
                            <ul className={styles.optionsList}>
                                <li><span>Title：</span>{product.title}</li>
                                {
                                    Object.keys(selectedOptions).map((option) => {
                                        const originalOption = options[option];
                                        const selectedValue = selectedOptions[option];

                                        return (
                                            <li key={option}>
                                                <span>{originalOption.name}：</span>
                                                {(originalOption.name.includes("Color")) ?
                                                    <span
                                                        style={{"background-color": selectedValue}}>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                                    :
                                                    ""
                                                }
                                                {selectedValue}
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                            <div className={styles.summaryTitle}>
                                Price
                            </div>
                            <TotalPrice
                                options={options}
                                selectedOptions={selectedOptions}
                                product={products[selectedProductId]}
                            />

                            <div className={styles.summaryTitle}>
                                Payment Information
                            </div>
                            {/* This will iterate through all the user info so you can see what the user entered. */}
                            <ul className={styles.paymentList}>
                                <li>
                                    <span>Full Name：</span>{userInfo["Full Name"]}
                                </li>
                                <li>
                                    <span>Shipment Address：</span>
                                    {userInfo["Shipment.Street"]}, {userInfo["Shipment.City"]}, {userInfo["Shipment.State"]}, {userInfo["Shipment.Zip Code"]}
                                </li>
                                <li>
                                    <span>Phone Number：</span>
                                    {userInfo["Phone Number"]}
                                </li>
                                <li>
                                    <span>Cell Number：</span>
                                    {userInfo["Cell Number"]}
                                </li>
                                <li>
                                    <span>Birthday：</span>
                                    {userInfo["Birthday"]}
                                </li>
                                {
                                    userInfo["Billing.Street"]
                                        ? (
                                            <li>
                                                <span>Shipment Address：</span>
                                                {userInfo["Billing.Street"]}, {userInfo["Billing.City"]}, {userInfo["Billing.State"]}, {userInfo["Billing.Zip Code"]}
                                            </li>
                                        )
                                        : (
                                            <li>
                                                <span>Shipment Address：</span>
                                                {userInfo["Shipment.Street"]}, {userInfo["Shipment.City"]}, {userInfo["Shipment.State"]}, {userInfo["Shipment.Zip Code"]}
                                            </li>
                                        )
                                }
                            </ul>
                        </div>
                    </div>

                    <div className={styles.summaryBut}>
                        <button onClick={() => this.printPage()}>Print</button>
                        <Link to={`/`}>
                            <button>Home</button>
                        </Link>
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
