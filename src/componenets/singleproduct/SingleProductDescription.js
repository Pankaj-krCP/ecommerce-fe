import React from "react";
import { useSelector } from "react-redux";
import Container from "../common/Container";

const SingleProductDescription = () => {
  const productState = useSelector((state) => state?.product?.singleProduct);
  const description = productState?.description;
  return (
    <Container class1="description-wrapper py-5 home-wrapper-2">
      <div className="row">
        <div className="col-12">
          <div className="bg-white p-3">
            <h4>Description</h4>
            <p
              className="desc"
              dangerouslySetInnerHTML={{
                __html: description,
              }}
            ></p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SingleProductDescription;
