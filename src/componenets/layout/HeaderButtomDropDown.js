import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CgMenuGridR } from "react-icons/cg";
import { getAllCategories } from "../../features/pcategory/pcategorySlice";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryFilter } from "../../features/filter/productFilterSlice";

const HeaderButtomDropDown = () => {
  const [category, setCategory] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const catState = useSelector((store) => store?.pcategory?.category);

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  useEffect(() => {
    if (category) {
      if (path != "store") {
        navigate("/store");
        setTimeout(() => {
          dispatch(setCategoryFilter(category));
        }, 100);
      } else {
        dispatch(setCategoryFilter(category));
      }
    }
  }, [category]);

  const onClickHandler = (cat) => {
    setCategory(cat);
  };

  return (
    <div className="dropdown border rounded">
      <button
        className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 me-5 d-flex align-items-center"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <CgMenuGridR className="fs-2" />
        <span className="me-4 d-inline-block">Shop Categories</span>
      </button>
      <ul
        className="dropdown-menu border border-bottom-0 mt-1 py-0"
        aria-labelledby="dropdownMenuButton1"
      >
        {catState &&
          catState?.map((item, index) => {
            return (
              <li key={index}>
                <button
                  onClick={() => onClickHandler(item?.title)}
                  className="profile-item w-100 p-3 bg-transparent border-0 rounded border-bottom text-white text-start"
                >
                  {item?.title}
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default HeaderButtomDropDown;
