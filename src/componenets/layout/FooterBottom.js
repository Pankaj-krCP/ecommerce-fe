import React from "react";

const FooterBottom = () => {
  return (
    <footer className="py-4">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <p className="text-center mb-0 text-white">
              &copy; {new Date().getFullYear()}: Powered by E-digit
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBottom;
