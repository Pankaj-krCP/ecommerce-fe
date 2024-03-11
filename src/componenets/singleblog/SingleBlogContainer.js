import React from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Container from "../common/Container";

const SingleBlogContainer = (props) => {
  const { blog } = props;
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <Container class1="blog-wrapper home-wrapper-2 py-5">
      <div className="row">
        <div className="col-12">
          <div className="single-blog-card">
            <button
              className="d-flex align-items-center border-0 mb-3 bg-transparent gap-10"
              onClick={goBack}
            >
              <HiOutlineArrowLeft className="fs-4" /> Go Back
            </button>
            <h3 className="title">{blog?.title}</h3>
            <img
              src={
                blog?.images[0]?.url
                  ? blog?.images[0]?.url
                  : "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2021/06/Wearing_AR_Glasses-e1622692004106.jpeg"
              }
              className="img-fluid w-100 my-4"
              alt="blog"
            />
            <p dangerouslySetInnerHTML={{ __html: blog?.description }}></p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SingleBlogContainer;
