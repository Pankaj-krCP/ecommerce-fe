import React from "react";
import Container from "../common/Container";
import FilterBlog from "./FilterBlog";
import BlogListDisplay from "./BlogListDisplay";
import { resetState } from "../../features/filter/blogFilterSlice";
import { useDispatch } from "react-redux";

const BlogContainer = () => {
  const dispatch = useDispatch();
  return (
    <Container class1="home-wrapper-2 blog-wrapper py-5">
      <div className="row">
        <div className="col-3">
          <span
            className={`badge text-secondary rounded-3 py-2 px-3 mb-2 bg-white`}
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(resetState())}
          >
            Clear All
          </span>
          <FilterBlog />
        </div>
        <div className="col-9">
          <BlogListDisplay />
        </div>
      </div>
    </Container>
  );
};

export default BlogContainer;
