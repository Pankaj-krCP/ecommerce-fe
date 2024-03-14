import React from "react";
import { useFormik } from "formik";
import shippingSchema from "../../utils/schema/shippingSchema";
import AddressForm from "./AddressForm";

const ShippingAddress = () => {
  const checkOutHandler = async () => {
    console.log("Processing");
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      address: "",
      state: "",
      city: "",
      country: "",
      pincode: "",
      other: "",
    },
    validationSchema: shippingSchema,
    onSubmit: async (values) => {
      localStorage.setItem("address", JSON.stringify(values));
      setTimeout(() => {
        checkOutHandler();
      }, 300);
    },
  });
  return (
    <div>
      <h4 className="mb-3">Shipping Address</h4>
      <AddressForm formik={formik} />
    </div>
  );
};

export default ShippingAddress;
