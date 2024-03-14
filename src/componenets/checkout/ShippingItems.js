import React from "react";
import { useSelector } from "react-redux";

const ShippingItems = () => {
  const userCartState = useSelector((state) => state.auth.cartProducts);

  return (
    <>
      {userCartState &&
        userCartState?.products?.map((item, index) => {
          return (
            <div key={index} className="border-bottom py-4">
              <div className="d-flex mb-2 justify-content-between align-items-center">
                <div className="w-75 d-flex gap-10">
                  <div className="w-25 position-relative">
                    <span
                      style={{ top: "-10px", right: "2px" }}
                      className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                    >
                      {item?.count}
                    </span>
                    <div
                      className="bg-white border rounded"
                      style={{
                        width: "100px",
                        height: "100px",
                      }}
                    >
                      <img
                        src={
                          item?.product?.images[0]?.url || "images/watch.jpg"
                        }
                        className="img-fluid p-2"
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "contain",
                        }}
                        alt="product"
                      />
                    </div>
                  </div>
                  <div className="pt-2">
                    <h5 className="total-price">
                      {item?.product?.title?.slice(0, 50) +
                        (item?.product?.title?.length > 50 ? "..." : "")}
                    </h5>
                    <p className="total">{item?.color}</p>
                  </div>
                </div>
                <div>
                  <h5>Rs. {item?.count * item?.price}</h5>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default ShippingItems;
