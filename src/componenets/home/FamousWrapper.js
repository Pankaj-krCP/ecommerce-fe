import React from "react";
import Container from "../common/Container";

const FamousWrapper = () => {
  return (
    <Container class1="famous-wrapper home-wrapper-2 py-5">
      <div className="row">
        <div className="col-3">
          <div className="famous-card">
            <div className="famous-content">
              <h5>Big Screen</h5>
              <h6>Smart Watch Series 7</h6>
              <p>From $399 or $16.62/mo. for 24 mo.*</p>
            </div>
            <img src="images/tab1.jpg" className="img-fluid" alt="famous" />
          </div>
        </div>
        <div className="col-3">
          <div className="famous-card">
            <div className="famous-content">
              <h5>Big Screen</h5>
              <h6>Smart Watch Series 7</h6>
              <p>From $399 or $16.62/mo. for 24 mo.*</p>
            </div>
            <img src="images/tab2.jpg" className="img-fluid" alt="famous" />
          </div>
        </div>
        <div className="col-3">
          <div className="famous-card">
            <div className="famous-content">
              <h5>Big Screen</h5>
              <h6>Smart Watch Series 7</h6>
              <p>From $399 or $16.62/mo. for 24 mo.*</p>
            </div>
            <img src="images/tab3.jpg" className="img-fluid" alt="famous" />
          </div>
        </div>
        <div className="col-3">
          <div className="famous-card">
            <div className="famous-content">
              <h5>Big Screen</h5>
              <h6>Smart Watch Series 7</h6>
              <p>From $399 or $16.62/mo. for 24 mo.*</p>
            </div>
            <img src="images/tab2.jpg" className="img-fluid" alt="famous" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FamousWrapper;
