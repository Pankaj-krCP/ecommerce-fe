import react from "react";
import Meta from "../componenets/common/Meta";
import BreadCrumb from "../componenets/common/BreadCrumb";
import Color from "../componenets/other/Color";
import Container from "../componenets/common/Container";

function CompareProduct() {
  return (
    <>
      <Meta title="compare product" />
      <BreadCrumb title="compare product" />
      <Container class1="compare-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <h5 className="text-center text-danger mb-5">
            This Page is under progress Data is not Dynamic yet
          </h5>
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-image">
                <img src="images/watch.jpg" alt="watch" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch with Wi-Fi+3G Tablet
                </h5>
                <h6 className="price mb-3 mt-3">$ 100</h6>
              </div>
              <div>
                <div className="product-detail">
                  <h5>Brand:</h5>
                  <p>Havels</p>
                </div>
                <div className="product-detail">
                  <h5>Type:</h5>
                  <p>Watch</p>
                </div>
                <div className="product-detail">
                  <h5>Availablity:</h5>
                  <p>In Stock</p>
                </div>
                <div className="product-detail">
                  <h5>Color:</h5>
                  <Color />
                </div>
                <div className="product-detail">
                  <h5>Size</h5>
                  <div className="d-flex gap-10">
                    <p>S</p>
                    <p>M</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-image">
                <img src="images/watch.jpg" alt="watch" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch with Wi-Fi+3G Tablet
                </h5>
                <h6 className="price mb-3 mt-3">$ 100</h6>
              </div>
              <div>
                <div className="product-detail">
                  <h5>Brand:</h5>
                  <p>Havels</p>
                </div>
                <div className="product-detail">
                  <h5>Type:</h5>
                  <p>Watch</p>
                </div>
                <div className="product-detail">
                  <h5>Availablity:</h5>
                  <p>In Stock</p>
                </div>
                <div className="product-detail">
                  <h5>Color:</h5>
                  <Color />
                </div>
                <div className="product-detail">
                  <h5>Size</h5>
                  <div className="d-flex gap-10">
                    <p>S</p>
                    <p>M</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-image">
                <img src="images/watch.jpg" alt="watch" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch with Wi-Fi+3G Tablet
                </h5>
                <h6 className="price mb-3 mt-3">$ 100</h6>
              </div>
              <div>
                <div className="product-detail">
                  <h5>Brand:</h5>
                  <p>Havels</p>
                </div>
                <div className="product-detail">
                  <h5>Type:</h5>
                  <p>Watch</p>
                </div>
                <div className="product-detail">
                  <h5>Availablity:</h5>
                  <p>In Stock</p>
                </div>
                <div className="product-detail">
                  <h5>Color:</h5>
                  <Color />
                </div>
                <div className="product-detail">
                  <h5>Size</h5>
                  <div className="d-flex gap-10">
                    <p>S</p>
                    <p>M</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default CompareProduct;
