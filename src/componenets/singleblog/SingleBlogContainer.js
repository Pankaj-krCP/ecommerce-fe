import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Container from "../common/Container";
import { getABlog } from "../../features/blogs/blogSlice";

const SingleBlogContainer = () => {
  const blogState = useSelector((state) => state?.blog?.singleBlog);
  const location = useLocation();
  const navigate = useNavigate();
  const getBlogId = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  useEffect(() => {
    getBlog();
  }, []);
  const getBlog = () => {
    dispatch(getABlog(getBlogId));
  };
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
            <h3 className="title">{blogState?.title}</h3>
            <img
              src={
                blogState?.images[0]?.url
                  ? blogState?.images[0]?.url
                  : "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2021/06/Wearing_AR_Glasses-e1622692004106.jpeg"
              }
              className="img-fluid w-100 my-4"
              alt="blog"
            />
            <p dangerouslySetInnerHTML={{ __html: blogState?.description }}></p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SingleBlogContainer;
