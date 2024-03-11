import React from "react";
import Container from "../common/Container";

const SingleProductDescription = () => {
  return (
    <Container class1="description-wrapper py-5 home-wrapper-2">
      <div className="row">
        <div className="col-12">
          <div className="bg-white p-3">
            <h4>Description</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SingleProductDescription;
