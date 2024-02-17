import React from "react";
import Meta from "../componenets/Meta";
import BreadCrumb from "../componenets/BreadCrumb";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Container from "../componenets/Container";

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog"} />
      <BreadCrumb title={"Dynamic Blog"} />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link to="/blog" className="d-flex align-items-center gap-10">
                <HiOutlineArrowLeft className="fs-4" />
                Go Back to Blogs
              </Link>
              <h3 className="title">A Beauutiful Sunday Morning renaissance</h3>
              <img
                src="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2021/06/Wearing_AR_Glasses-e1622692004106.jpeg"
                className="img-fluid w-100"
                alt="blog"
              />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;
