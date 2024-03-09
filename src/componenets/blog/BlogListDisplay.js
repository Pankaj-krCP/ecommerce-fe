import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment/moment";
import BlogCard from "./BlogCard";
import { getAllBlogs } from "../../features/blogs/blogSlice";

const BlogListDisplay = () => {
  const blogState = useSelector((state) => state?.blog?.blog);
  const filterState = useSelector((state) => state.blogFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    const { category } = filterState;
    dispatch(getAllBlogs({ category }));
  }, [filterState]);

  return (
    <div className="row">
      {blogState
        ? blogState?.map((item, index) => {
            return (
              <div className="col-6 mb-3" key={index}>
                <BlogCard
                  id={item?._id}
                  title={item?.title}
                  description={item?.description}
                  image={item?.images[0]?.url}
                  date={moment(item?.createdAt).format("MMMM Do YYYY, h:mm a")}
                />
              </div>
            );
          })
        : []}
    </div>
  );
};

export default BlogListDisplay;
