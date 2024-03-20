import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BsSearch } from "react-icons/bs";
import { setSearch } from "../../features/filter/searchBarSlice";
import { useLocation, useNavigate } from "react-router-dom";
import HeaderShowSearchOption from "./HeaderShowSearchOption";

const HeaderUpperSearchBar = () => {
  const [searchInput, setSearchInput] = useState(null);
  const [showOption, setShowOption] = useState(true);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const path = location.pathname.split("/");

  const onChangeHandler = (e) => {
    if (path[1] != "store") {
      navigate("/store");
    }
    setSearchInput(e);
    setShowOption(true);
  };

  useEffect(() => {
    dispatch(setSearch(searchInput));
  }, [searchInput]);

  return (
    <div className="d-flex flex-column position-relative">
      <div className="input-group mb-0">
        <input
          type="text"
          className="form-control"
          placeholder="Seach Product Here..."
          aria-label="Seach Product Here..."
          aria-describedby="basic-addon2"
          onChange={(e) => {
            onChangeHandler(e.target.value);
          }}
        />
        <span className="input-group-text p-2" id="basic-addon2">
          <BsSearch
            className="fs-6"
            style={{ cursor: "pointer" }}
            onClick={() => {
              dispatch(setSearch(searchInput));
            }}
          />
        </span>
      </div>
      {searchInput && (
        <HeaderShowSearchOption
          searchInput={searchInput}
          showOption={showOption}
          setShowOption={setShowOption}
        />
      )}
    </div>
  );
};

export default HeaderUpperSearchBar;
