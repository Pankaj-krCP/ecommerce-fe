import React from "react";
import Container from "../common/Container";

const MarqueWrapper = () => {
  return (
    <Container class1="marque-wrapper home-wrapper-2 py-5">
      <div className="row">
        <div className="col-12">
          <div className="marquee-inner-wrapper card-wrapper">
            <div className="d-flex">
              <div className="mx-3 w-25">
                <img src="images/brand-01.png" alt="brand" />
              </div>
              <div className="mx-3 w-25">
                <img src="images/brand-02.png" alt="brand" />
              </div>
              <div className="mx-3 w-25">
                <img src="images/brand-03.png" alt="brand" />
              </div>
              <div className="mx-3 w-25">
                <img src="images/brand-04.png" alt="brand" />
              </div>
              <div className="mx-3 w-25">
                <img src="images/brand-05.png" alt="brand" />
              </div>
              <div className="mx-3 w-25">
                <img src="images/brand-06.png" alt="brand" />
              </div>
              <div className="mx-3 w-25">
                <img src="images/brand-07.png" alt="brand" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MarqueWrapper;
