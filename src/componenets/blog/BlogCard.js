import React from "react";
import { Link } from "react-router-dom";

function BlogCard(props) {
  const { id, date, title, description, image } = props;
  return (
    <div className="blog-card">
      <div className="card-image">
        <img
          src={image ? image : "images/blog-1.jpg"}
          className="img-fluid w-100"
          alt="blog"
        />
      </div>
      <div className="blog-content">
        <p className="date">{date}</p>
        <h5 className="title">
          {title?.slice(0, 40) + `${title?.length > 40 ? " ..." : ""}`}
        </h5>
        <p
          className="desc"
          dangerouslySetInnerHTML={{
            __html:
              description?.slice(0, 70) +
              `${description?.length > 70 ? " ..." : ""}`,
          }}
        ></p>
        <Link to={`/blog/${id}`} className="button">
          Read More
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
