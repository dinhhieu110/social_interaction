import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Camera } from "lucide-react";

const Profile = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
  const [selectedImg, setSelectedImg] = useState(null);

  const handleUploadImage = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      console.log("base64Image", base64Image);
      await updateProfile({ avatar: base64Image });
    };
  };
  return (
    <div className="h-screen">
      <div className="max-w-2xl mx-auto mt-5">
        <h1 className="font-bold text-5xl text-[#0866ff] my-6 text-center">
          social interaction
        </h1>
        <div className="bg-[#fff] w-4/5 mx-auto min-h-[350px] lg:mt-12 rounded-xl shadow-xl">
          {/* Form */}
          <div className="px-4 py-2">
            <h2 className="text-center text-2xl font-bold">
              Update your information
            </h2>
            <p className="text-center text-sm text-[#606770]">
              It's quick and easy.
            </p>
          </div>
          <div className="p-4 border-t-[#dadde1] border-t-[0.5px] pb-20">
            <div className="space-y-6">
              <div className="flex flex-col items-center gap-4">
                <div className="relative">
                  <img
                    src={selectedImg || authUser.avatar || "/avatar.png"}
                    alt="Profile"
                    className="size-32 rounded-full object-cover relative"
                  />
                  <label
                    htmlFor="avatar-upload"
                    className={`
                  absolute bottom-0 right-0 
                  hover:scale-105
                  p-2 cursor-pointer 
                  transition-all duration-200
                  ${
                    isUpdatingProfile ? "animate-pulse pointer-events-none" : ""
                  }
                `}
                  >
                    <div className=" rounded-full absolute bottom-2 right-2 bg-white p-1">
                      <Camera className="w-5 h-5 text-base-200" />
                    </div>
                    <input
                      type="file"
                      id="avatar-upload"
                      className="hidden"
                      accept="image/*"
                      onChange={handleUploadImage}
                      disabled={isUpdatingProfile}
                    />
                  </label>
                </div>
                <p className="text-sm text-zinc-400">
                  {isUpdatingProfile
                    ? "Uploading..."
                    : "Click the camera icon to update your photo"}
                </p>
              </div>
              <div>
                <input
                  type="text"
                  className={
                    "input border-teal-200 border-1 p-4 rounded-md w-full outline-0 focus:border-[#0866ff]"
                  }
                  placeholder="Full name"
                  value={authUser.fullName}
                  readOnly
                  disabled
                />
              </div>
              <div>
                <input
                  type="text"
                  className={
                    "input border-teal-200 border-1 p-4 rounded-md w-full outline-0 focus:border-[#0866ff]"
                  }
                  placeholder="Email address or phone number"
                  value={authUser.email}
                  readOnly
                  disabled
                />
              </div>
              <div className="mt-2 px-6">
                <h3 className="font-semibold text-lg">Account Information</h3>
                <div className="flex justify-between mt-2">
                  <span>Member Since</span>
                  <span>2025-03-01</span>
                </div>
                <hr className="border-amber-900 mt-2" />
                <div className="flex justify-between mt-2">
                  <span>Account status</span>
                  <span className="text-green-500">Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
