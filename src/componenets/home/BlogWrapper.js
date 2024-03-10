import React from "react";
import { useSelector } from "react-redux";
import Container from "../common/Container";
import BlogCard from "../blog/BlogCard";
import moment from "moment/moment";

const BlogWrapper = () => {
  const blogState = useSelector((state) => state?.blog?.blog);

  return (
    <Container class1="blog-wrapper home-wrapper-2 py-5">
      <div className="row">
        <div className="col-12">
          <h3 className="section-heading">Our Latest Blogs</h3>
        </div>
      </div>
      <div className="row">
        {blogState
          ? blogState?.map((item, index) => {
              return (
                <div className="col-3" key={index}>
                  <BlogCard
                    id={item?._id}
                    title={item?.title}
                    description={item?.description}
                    image={item?.images[0]?.url}
                    date={moment(item?.createdAt).format(
                      "MMMM Do YYYY, h:mm a"
                    )}
                  />
                </div>
              );
            })
          : []}
      </div>
    </Container>
  );
};

export default BlogWrapper;
