import React from "react";
import ReactImageZoom from "react-image-zoom";

const ProductMainImg = () => {
  const props = {
    width: 400,
    height: 500,
    zoomWidth: 600,
    img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg",
  };
  return (
    <div className="main-product-image">
      <div>
        <ReactImageZoom {...props} />
      </div>
      <div>
        <div className="other-product-images d-flex flex-wrap gap-15">
          <div>
            <img
              src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg"
              className="img-fluid"
              alt="watch"
            />
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg"
              className="img-fluid"
              alt="watch"
            />
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg"
              className="img-fluid"
              alt="watch"
            />
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg"
              className="img-fluid"
              alt="watch"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductMainImg;
