import React from "react";
import BreadCrumb from "../componenets/common/BreadCrumb";
import Meta from "../componenets/common/Meta";
import BlogContainer from "../componenets/blog/BlogContainer";

function Blog() {
  return (
    <>
      <Meta title={"Blogs"} />
      <BreadCrumb title="Blogs" />
      <BlogContainer />
    </>
  );
}

export default Blog;
