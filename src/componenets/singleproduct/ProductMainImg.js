import React from "react";
import ReactImageZoom from "react-image-zoom";
import { MdOutlineImageSearch } from "react-icons/md";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const ProductMainImg = ({ images }) => {
  const props = {
    width: 400,
    height: 400,
    zoomWidth: 600,
    img: images.length > 0 && images[0]?.url ? images[0]?.url : "",
  };
  return (
    <div className="main-product-image">
      <div>
        {images.length > 0 ? (
          <ReactImageZoom {...props} />
        ) : (
          <MdOutlineImageSearch />
        )}
      </div>
      <div>
        <div className="other-product-images d-flex flex-wrap gap-15">
          <div>
            {images.length > 1 && images[1]?.url ? (
              <Zoom>
                <img src={images[1]?.url} className="img-fluid" alt="watch" />
              </Zoom>
            ) : (
              <MdOutlineImageSearch />
            )}
          </div>
          <div>
            {images.length > 2 && images[2]?.url ? (
              <Zoom>
                <img src={images[2]?.url} className="img-fluid" alt="watch" />
              </Zoom>
            ) : (
              <MdOutlineImageSearch />
            )}
          </div>
          <div>
            {images.length > 3 && images[3]?.url ? (
              <Zoom>
                <img src={images[3]?.url} className="img-fluid" alt="watch" />
              </Zoom>
            ) : (
              <MdOutlineImageSearch />
            )}
          </div>
          <div>
            {images.length > 4 && images[4]?.url ? (
              <Zoom>
                <img src={images[4]?.url} className="img-fluid" alt="watch" />
              </Zoom>
            ) : (
              <MdOutlineImageSearch />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductMainImg;
