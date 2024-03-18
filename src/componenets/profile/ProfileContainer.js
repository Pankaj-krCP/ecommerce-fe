import React, { useEffect, useState } from "react";
import Container from "../common/Container";
import { FiEdit } from "react-icons/fi";
import { TbPencilCancel } from "react-icons/tb";
import ProfileForm from "./ProfileForm";
import { useSelector } from "react-redux";

const ProfileContainer = () => {
  const [edit, setEdit] = useState(false);
  const updatedUser = useSelector((state) => state?.auth?.updatedUser);
  useEffect(() => {
    if (updatedUser) {
      setEdit(false);
      const customer = JSON.parse(localStorage.getItem("customer"));
      localStorage.setItem(
        "customer",
        JSON.stringify({ ...customer, ...updatedUser })
      );
    }
  }, [updatedUser]);
  return (
    <Container class1="cart-wrapper home-wrapper-2 py-5">
      <div
        className="mx-5"
        style={{ cursor: "pointer" }}
        onClick={() => setEdit(!edit)}
      >
        <div className="d-flex align-items-center gap-10">
          {edit ? (
            <>
              <h4 className="text-primary">Cancel</h4>
              <TbPencilCancel className="fs-4 mb-2" />
            </>
          ) : (
            <>
              <h4 className="text-primary">Edit</h4>
              <FiEdit className="fs-4 mb-2" />
            </>
          )}
        </div>
      </div>
      <ProfileForm edit={edit} />
    </Container>
  );
};

export default ProfileContainer;
