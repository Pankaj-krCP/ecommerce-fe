import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import AddressSelectCountry from "./AddressSelectCountry";
import RequiredInput from "../other/RequiredInput";

const AddressForm = ({ formik }) => {
  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        action=""
        className="d-flex gap-15 flex-wrap justify-content-between"
      >
        <AddressSelectCountry formik={formik} />

        <div className="flex-grow-1">
          <RequiredInput formik={formik} type={"text"} name={"firstName"} />
        </div>
        <div className="flex-grow-1">
          <RequiredInput formik={formik} type={"text"} name={"lastName"} />
        </div>
        <div className="w-100">
          <RequiredInput formik={formik} type={"text"} name={"address"} />
        </div>
        <div className="w-100">
          <RequiredInput formik={formik} type={"text"} name={"other"} />
        </div>
        <div className="flex-grow-1">
          <RequiredInput formik={formik} type={"text"} name={"city"} />
        </div>
        <div className="flex-grow-1">
          <RequiredInput formik={formik} type={"text"} name={"state"} />
        </div>
        <div className="flex-grow-1">
          <RequiredInput formik={formik} type={"text"} name={"pincode"} />
        </div>
        <div className="w-100">
          <div className="d-flex justify-content-between align-items-center">
            <Link to="/cart" className="text-dark">
              <BiArrowBack /> Return to Cart
            </Link>
            {/* <Link to="" className="button">
              Continue to Shipping
            </Link> */}
            <button className="button border" type="submit">
              Place Order
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddressForm;
