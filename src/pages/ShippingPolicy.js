import React from "react";
import Meta from "../componenets/common/Meta";
import BreadCrumb from "../componenets/common/BreadCrumb";
import Container from "../componenets/common/Container";

const ShippingPolicy = () => {
  return (
    <>
      <Meta title={"Shipping Policy"} />
      <BreadCrumb title="Shipping Policy" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy"></div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ShippingPolicy;
