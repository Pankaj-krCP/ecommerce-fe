import React from "react";
import Meta from "../componenets/Meta";
import BreadCrumb from "../componenets/BreadCrumb";
import { Link } from "react-router-dom";
import Container from "../componenets/Container";

const Signup = () => {
  return (
    <>
      <Meta title={"sign Up"} />
      <BreadCrumb title="sign Up" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">SignUp</h3>
              <form action="" className="d-flex flex-column gap-15">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="form-control"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile Number"
                    className="form-control"
                  />
                </div>
                <div className="mt-1">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control"
                  />
                </div>
                <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                  <button className="button border-0" type="submit">
                    SingUp
                  </button>
                  <Link to="/login" className="button login">
                    Login
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Signup;
