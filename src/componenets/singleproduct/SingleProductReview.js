import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactStars from "react-rating-stars-component";
import Container from "../common/Container";
import { getOrders } from "../../features/user/userSlice";
import { toast } from "react-toastify";
import { addRating, getAProduct } from "../../features/products/productSlice";

const SingleProductReview = () => {
  const [rating, setRating] = useState(null);
  const [comment, setComment] = useState(null);
  const [orderedProduct, setOrderedProduct] = useState(false);
  const dispatch = useDispatch();
  const singleProduct = useSelector((state) => state?.product?.singleProduct);
  const ratedState = useSelector((state) => state?.product?.rating);
  const totalOrderedProduct = useSelector(
    (state) => state?.auth?.getorderedProduct
  );
  useEffect(() => {
    if (!totalOrderedProduct) {
      dispatch(getOrders());
    }
  }, []);

  useMemo(() => {
    totalOrderedProduct?.map((item) => {
      for (let i = 0; i < item?.orderItems?.length; i++) {
        if (item?.orderItems[i]?.product?._id === singleProduct?._id) {
          setOrderedProduct(true);
        }
      }
    });
  }, [totalOrderedProduct, singleProduct]);

  const reviewHandler = () => {
    if (rating === null) {
      toast.error("Please add star rating");
    } else if (comment === null) {
      toast.error("Please write review about the product");
    } else {
      dispatch(
        addRating({
          star: rating,
          comment: comment,
          prodId: singleProduct?._id,
        })
      );
    }
  };

  useEffect(() => {
    if (ratedState) {
      dispatch(getAProduct(singleProduct?._id));
    }
  }, [ratedState]);

  return (
    <Container class1="reviews-wrapper home-wrapper-2">
      <div className="row">
        <div className="col-12">
          <h3 className="section-heading">Reviews</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="review-inner-wrapper">
            <div className="review-head d-flex justify-content-between align-items-end">
              <div>
                <h4 className="mb-2">Customer Reviews</h4>
                <div className="d-flex align-items-center gap-10">
                  {singleProduct && (
                    <ReactStars
                      count={5}
                      size={24}
                      value={parseFloat(singleProduct?.totalrating) || 0}
                      edit={false}
                      activeColor="#ffd700"
                      isHalf={true}
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                    />
                  )}
                  <p className="mb-0">
                    {singleProduct?.ratings?.length > 0
                      ? `Based on ${singleProduct?.ratings?.length} `
                      : "No "}
                    Reviews
                  </p>
                </div>
              </div>
              <div>
                <a
                  className="text-dark text-decoration-underline"
                  href="#review"
                >
                  Write a Review
                </a>
              </div>
            </div>
            <div className="review-form py-4">
              <h4>Write a Review</h4>
              <div className="d-flex flex-column gap-15">
                <div>
                  <ReactStars
                    edit={true}
                    count={5}
                    value={0}
                    size={24}
                    isHalf={true}
                    onChange={(e) => {
                      setRating(e);
                    }}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                </div>
                <div>
                  <textarea
                    name=""
                    id="review"
                    className="w-100 form-control"
                    cols="30"
                    rows="4"
                    placeholder={
                      orderedProduct ? "comments" : "You have to Order First"
                    }
                    disabled={!orderedProduct}
                    onChange={(e) => {
                      setComment(e.target.value);
                    }}
                  ></textarea>
                </div>
                <div className="d-flex justify-content-end">
                  <button className="button border-0" onClick={reviewHandler}>
                    Submit Review
                  </button>
                </div>
              </div>
            </div>
            <div className="reviews">
              {singleProduct?.ratings?.length &&
                singleProduct?.ratings?.map((item, index) => {
                  return (
                    <div className="review" key={index}>
                      <div className="d-flex gap-10 align-items-center">
                        <h6 className="mb-0">{item?.username}</h6>
                        <ReactStars
                          count={5}
                          size={24}
                          value={parseFloat(item?.star)}
                          edit={false}
                          activeColor="#ffd700"
                          isHalf={true}
                          emptyIcon={<i className="far fa-star"></i>}
                          halfIcon={<i className="fa fa-star-half-alt"></i>}
                          fullIcon={<i className="fa fa-star"></i>}
                        />
                      </div>

                      <p className="mt-3">{item?.comment}</p>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SingleProductReview;
