import React from "react";
import { useAuthStore } from "../store/useAuthStore";

const Profile = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();

  // const handleUploadimage = async (e) => {};
  return <div>Profile</div>;
};

export default Profile;
