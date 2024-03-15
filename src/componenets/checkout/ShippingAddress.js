import React, { useState } from "react";
import { useFormik } from "formik";
import shippingSchema from "../../utils/schema/shippingSchema";
import AddressForm from "./AddressForm";
import PaymentProcess from "./PaymentProcess";

const ShippingAddress = () => {
  const [shippingInfo, setShippingInfo] = useState(null);

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
      setShippingInfo(values);
    },
  });

  return (
    <div>
      {!shippingInfo ? (
        <AddressForm formik={formik} />
      ) : (
        <PaymentProcess
          shippingInfo={shippingInfo}
          setShippingInfo={setShippingInfo}
        />
      )}
    </div>
  );
};

export default ShippingAddress;
