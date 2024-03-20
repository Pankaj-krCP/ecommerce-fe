import React, { useEffect, useMemo, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const HeaderShowSearchOption = ({ searchInput, showOption, setShowOption }) => {
  const navigate = useNavigate();
  const showOptionListRef = useRef(null);

  const productState = useSelector((state) => state?.product?.product) || [];

  const searchedProduct = useMemo(() => {
    return productState?.filter((item) =>
      item?.title?.toLowerCase().includes(searchInput?.toLowerCase())
    );
  }, [searchInput, productState]);

  const onClickHandler = (id) => {
    setShowOption(false);
    navigate(`/product/${id}`);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        showOptionListRef.current &&
        !showOptionListRef.current.contains(event.target)
      ) {
        setShowOption(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    showOption && (
      <div
        ref={showOptionListRef}
        className="rounded border border-bottom-0 top-100 mt-1 w-100 position-absolute bg-white"
        style={{ zIndex: "1000" }}
      >
        <ul className="p-0 m-0">
          {searchedProduct.length > 0 ? (
            searchedProduct.slice(0, 5)?.map((item, index) => {
              return (
                <li
                  onClick={() => onClickHandler(item?._id)}
                  className="profile-item border-bottom rounded p-2 px-3 m-0"
                  style={{ listStyle: "none", cursor: "pointer" }}
                  key={index}
                >
                  {item?.title?.slice(0, 50)}
                </li>
              );
            })
          ) : (
            <li className="border-bottom rounded p-2 px-3 m-0">No Items</li>
          )}
        </ul>
      </div>
    )
  );
};

export default HeaderShowSearchOption;
