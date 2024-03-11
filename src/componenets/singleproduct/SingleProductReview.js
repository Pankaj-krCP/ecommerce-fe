import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import Container from "../common/Container";

const SingleProductReview = () => {
  const [orderedProduct, setorderedProduct] = useState(true);
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
                  <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0">Based on 2 Reviews</p>
                </div>
              </div>
              {orderedProduct && (
                <div>
                  <a className="text-dark text-decoration-underline" href="">
                    Write a Review
                  </a>
                </div>
              )}
            </div>
            <div className="review-form py-4">
              <h4>Write a Review</h4>
              <form action="" className="d-flex flex-column gap-15">
                <div>
                  <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    edit={false}
                    activeColor="#ffd700"
                  />
                </div>
                <div>
                  <textarea
                    name=""
                    id=""
                    className="w-100 form-control"
                    cols="30"
                    rows="4"
                    placeholder="Comments"
                  ></textarea>
                </div>
                <div className="d-flex justify-content-end">
                  <button className="button border-0">Submit Review</button>
                </div>
              </form>
            </div>
            <div className="reviews">
              <div className="review">
                <div className="d-flex gap-10 align-items-center">
                  <h6 className="mb-0">Pankaj</h6>
                  <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    edit={false}
                    activeColor="#ffd700"
                  />
                </div>

                <p className="mt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SingleProductReview;
