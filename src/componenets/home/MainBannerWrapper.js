import React from "react";
import { Link } from "react-router-dom";
import Container from "../common/Container";

const MainBannerWrapper = () => {
  return (
    <Container class1="home-wrapper-1 py-5">
      <div className="row">
        <div className="col-6">
          <div className="main-banner position-relative p-3">
            <img
              src="images/main-banner-1.jpg"
              className="img-fluid rounded-3"
              alt="main banner"
            />
            <div className="main-banner-content position-absolute">
              <h4>SUPERCHARGED FOR PROS.</h4>
              <h5>iPad s13+ Pro.</h5>
              <p>From $999.00 or $41.62/mo.</p>
              <Link to="/store" className="button">
                BUY NOW
              </Link>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="d-flex flex-wrap justify-content-between align-items-center">
            <div className="small-banner position-relative p-3">
              <img
                src="images/catbanner-01.jpg"
                className="img-fluid rounded-3"
                alt="main banner"
              />
              <div className="small-banner-content position-absolute">
                <h4>BEST SALE</h4>
                <h5>iPad S13+ Pro.</h5>
                <p>
                  From $999.00 <br />
                  or $41.62/mo.
                </p>
              </div>
            </div>
            <div className="small-banner position-relative p-3">
              <img
                src="images/catbanner-02.jpg"
                className="img-fluid rounded-3"
                alt="main banner"
              />
              <div className="small-banner-content position-absolute">
                <h4>NEW ARRIVAL</h4>
                <h5>Buy iPad Air</h5>
                <p>
                  From $999.00 <br />
                  or $41.62/mo.
                </p>
              </div>
            </div>
            <div className="small-banner position-relative p-3">
              <img
                src="images/catbanner-03.jpg"
                className="img-fluid rounded-3"
                alt="main banner"
              />
              <div className="small-banner-content position-absolute">
                <h4>NEW ARRIVAL</h4>
                <h5>Buy iPad Air</h5>
                <p>
                  From $999.00 <br />
                  or $41.62/mo.
                </p>
              </div>
            </div>
            <div className="small-banner position-relative p-3">
              <img
                src="images/catbanner-04.jpg"
                className="img-fluid rounded-3"
                alt="main banner"
              />
              <div className="small-banner-content position-absolute">
                <h4>NEW ARRIVAL</h4>
                <h5>Buy iPad Air</h5>
                <p>
                  From $999.00 <br />
                  or $41.62/mo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MainBannerWrapper;
