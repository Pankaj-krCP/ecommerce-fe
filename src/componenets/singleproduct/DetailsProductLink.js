import React from "react";
import { useLocation } from "react-router-dom";
import { dns } from "../../utils/config";

const DetailsProductLink = ({ details }) => {
  const location = useLocation();
  const productLink = location.pathname;
  const copyToClipboard = (text) => {
    text = dns + text;
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  return (
    <div className="d-flex gap-10 align-items-center my-2">
      <h3 className="product-heading">Product Link:</h3>
      <a
        href="#!"
        onClick={() => {
          copyToClipboard(productLink);
        }}
      >
        Copy Product Link
      </a>
    </div>
  );
};

export default DetailsProductLink;
