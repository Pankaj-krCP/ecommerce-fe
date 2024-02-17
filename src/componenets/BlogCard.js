import React from "react";
import { Link } from "react-router-dom";

function BlogCard() {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img src="images/blog-1.jpg" className="img-fluid w-100" alt="blog" />
      </div>
      <div className="blog-content">
        <p className="date">6 Feb, 2024</p>
        <h5 className="title">A beautiful sunday morning renaissance</h5>
        <p className="desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <Link to="/blog/id" className="button">
          Read More
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
