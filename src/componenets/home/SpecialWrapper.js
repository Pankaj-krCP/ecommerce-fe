import React from "react";
import { useSelector } from "react-redux";
import Container from "../common/Container";
import SpecialProduct from "./SpecialProduct";

const SpecialWrapper = () => {
  const productState = useSelector((state) => state?.product?.product);
  const specialProduct = productState
    ? productState.filter((item) => item.tags === "Special")
    : [];
  return (
    <Container class1="special-wrapper home-wrapper-2 py-5">
      <div className="row">
        <div className="col-12">
          <h3 className="section-heading">Special Products</h3>
        </div>
        {specialProduct?.map((item, index) => {
          return (
            <SpecialProduct
              key={index}
              id={item?._id}
              title={item?.title}
              brand={item?.brand}
              image={item?.images[0]?.url}
              totalrating={item?.totalrating.toString()}
              price={item?.price}
              sold={item?.sold}
              quantity={item?.quantity}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default SpecialWrapper;
