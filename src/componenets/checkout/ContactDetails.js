import React from "react";
import { useSelector } from "react-redux";

const ContactDetails = () => {
  const userState = useSelector((state) => state?.auth?.user);
  return (
    <div>
      <h4 className="title total">Contact Information</h4>
      <p className="user-details total">
        {userState
          ? `${userState?.firstName} (${userState?.email})`
          : "Contact Loading ..."}
      </p>
    </div>
  );
};

export default ContactDetails;
