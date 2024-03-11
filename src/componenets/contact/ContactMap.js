import React from "react";
import { Contact_Map_URL } from "../../utils/config";

const ContactMap = () => {
  return (
    <div>
      <iframe
        src={Contact_Map_URL}
        width="600"
        height="450"
        className="border-0 w-100"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default ContactMap;
