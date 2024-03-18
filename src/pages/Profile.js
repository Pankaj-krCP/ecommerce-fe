import React from "react";
import Meta from "../componenets/common/Meta";
import BreadCrumb from "../componenets/common/BreadCrumb";
import ProfileContainer from "../componenets/profile/ProfileContainer";

const Profile = () => {
  return (
    <>
      <Meta title={"myprofile"} />
      <BreadCrumb title="myprofile" />
      <ProfileContainer />
    </>
  );
};

export default Profile;
