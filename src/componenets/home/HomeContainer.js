import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import MainBannerWrapper from "./MainBannerWrapper";
import ServicesWrapper from "./ServicesWrapper";
import CategoriesWrapper from "./CategoriesWrapper";
import FeaturedWrapper from "./FeaturedWrapper";
import FamousWrapper from "./FamousWrapper";
import SpecialWrapper from "./SpecialWrapper";
import PopularWrapper from "./PopularWrapper";
import MarqueWrapper from "./MarqueWrapper";
import BlogWrapper from "./BlogWrapper";
import { getAllProducts } from "../../features/products/productSlice";
import { getAllBlogs } from "../../features/blogs/blogSlice";

const HomeContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const sort = "-createdAt";
    dispatch(getAllProducts());
    dispatch(getAllBlogs({ sort }));
  }, []);
  return (
    <>
      <MainBannerWrapper />
      <ServicesWrapper />
      {/* <CategoriesWrapper /> */}
      <FeaturedWrapper />
      {/* <FamousWrapper /> */}
      <SpecialWrapper />
      <PopularWrapper />
      <MarqueWrapper />
      <BlogWrapper />
    </>
  );
};

export default HomeContainer;
