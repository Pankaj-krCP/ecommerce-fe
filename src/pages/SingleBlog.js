import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Meta from "../componenets/common/Meta";
import BreadCrumb from "../componenets/common/BreadCrumb";
import SingleBlogContainer from "../componenets/singleblog/SingleBlogContainer";
import { getABlog } from "../features/blogs/blogSlice";
import GoBack from "../componenets/common/GoBack";

const SingleBlog = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const getBlogId = location.pathname.split("/")[2];
  const blogState = useSelector((state) => state?.blog?.singleBlog);

  useEffect(() => {
    dispatch(getABlog(getBlogId));
  }, []);

  return (
    <>
      <Meta title={blogState?.title} />
      <BreadCrumb title={blogState?.title} />
      <GoBack />
      <SingleBlogContainer blog={blogState} />
    </>
  );
};

export default SingleBlog;
