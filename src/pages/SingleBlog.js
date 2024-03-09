import React from "react";
import Meta from "../componenets/common/Meta";
import BreadCrumb from "../componenets/common/BreadCrumb";
import SingleBlogContainer from "../componenets/singleblog/SingleBlogContainer";

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog"} />
      <BreadCrumb title={"Dynamic Blog"} />
      <SingleBlogContainer />
    </>
  );
};

export default SingleBlog;
