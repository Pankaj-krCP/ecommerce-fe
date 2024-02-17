import React from "react";
import Meta from "../componenets/Meta";
import BreadCrumb from "../componenets/BreadCrumb";
import Container from "../componenets/Container";

const TermAndConditions = () => {
  return (
    <>
      <Meta title={"Term And Condition"} />
      <BreadCrumb title="Term And Condition" />
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

export default TermAndConditions;
