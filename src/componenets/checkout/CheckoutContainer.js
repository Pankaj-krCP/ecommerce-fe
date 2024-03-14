import React from "react";
import Container from "../common/Container";
import ShippingAddress from "./ShippingAddress";
import ShippingItems from "./ShippingItems";
import BreadCrumb from "./BreadCrumb";
import ContactDetails from "./ContactDetails";
import ShippingTotalPrice from "./ShippingTotalPrice";

const CheckoutContainer = () => {
  return (
    <Container class1="checkout-wrapper py-5 home-wrapper-2">
      <div className="row">
        <div className="col-7 checkout-left-data">
          <BreadCrumb />
          <ContactDetails />
          <ShippingAddress />
        </div>
        <div className="col-5">
          <ShippingItems />
          <ShippingTotalPrice />
        </div>
      </div>
    </Container>
  );
};

export default CheckoutContainer;
