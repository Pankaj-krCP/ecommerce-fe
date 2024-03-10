import React from "react";
import { services } from "../../utils/Data";
import Container from "../common/Container";

const ServicesWrapper = () => {
  return (
    <Container class1="home-wrapper-2 py-5">
      <div className="row">
        <div className="col12">
          <div className="services d-flex align-items-center justify-content-between">
            {services?.map((i, j) => {
              return (
                <div className="d-flex align-items-center gap-15" key={j}>
                  <img src={i.image} alt="services" />
                  <div>
                    <h6>{i.title}</h6>
                    <p className="mb-0">{i.tagline}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ServicesWrapper;
