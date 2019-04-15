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
                        <h3>
                            Order Detail
                        </h3>
                        <div>
                            <div>
                                <img src={selectedProductImg} alt='productImg'/>
                            </div>
                            <div>
                                <ul>
                                    <li><div>Title：</div> <div>{product.title}</div></li>
                                    {
                                        Object.keys(selectedOptions).map((option) => {
                                            const originalOption = options[option];
                                            const selectedValue = selectedOptions[option];

                                            return (
                                                <li key={option}><div>{originalOption.name}：</div><div>{selectedValue}</div></li>
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
                            <li><div>Full Name：</div> <div>{userInfo["Full Name"]}</div></li>
                            <li><div>Shipment Address：</div> <div>{userInfo["Shipment.Street"]}, {userInfo["Shipment.City"]}, {userInfo["Shipment.State"]}, {userInfo["Shipment.Zip Code"]}</div></li>
                            <li><div>Phone Number：</div><div> {userInfo["Phone Number"]}</div></li>
                            <li><div>Cell Number：</div><div> {userInfo["Cell Number"]}</div></li>
                            <li><div>Birthday：</div><div> {userInfo["Birthday"]}</div> </li>
                            {
                                userInfo["Billing.Street"]
                                    ? (
                                        <li><div>Shipment Address：</div><div>{userInfo["Billing.Street"]}, {userInfo["Billing.City"]}, {userInfo["Billing.State"]}, {userInfo["Billing.Zip Code"]}</div></li>
                                    )
                                    : (
                                        <li><div>Shipment Address：</div><div>{userInfo["Shipment.Street"]}, {userInfo["Shipment.City"]}, {userInfo["Shipment.State"]}, {userInfo["Shipment.Zip Code"]}</div></li>
                                    )
                            }
                        </ul>

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
