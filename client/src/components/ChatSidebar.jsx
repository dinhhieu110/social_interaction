import React from "react";
import { useChatStore } from "../store/useChatStore";
import SidebarSkeleton from "./skeleton/SidebarSkeleton";
import { Edit, Search, LaptopMinimal } from "lucide-react";

const ChatSidebar = () => {
  const { selectedUser, setSelectedUser, getUsers, users, enableShimmerUsers } =
    useChatStore();
  if (enableShimmerUsers) return <SidebarSkeleton />;
  console.log("users: ", users);
  return (
    <div className="md:w-md w-3/6 rounded-lg p-4 h-full shadow-2xl">
      <div className="border-b-2">
        <div className="flex justify-between">
          <h1 className="lg:text-3xl text-2xl font-bold">Chats</h1>
          <button
            type="button"
            className="rounded-full hidden md:block bg-[#f0f2f5] p-2 cursor-pointer"
          >
            <Edit />
          </button>
        </div>
        <div className="relative hidden lg:flex h-14 bg-[#f0f2f5] w-full rounded-3xl mt-4">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="size-7 text-base-content/40" />
          </div>
          <input
            type="email"
            className={`input input-bordered w-full pl-14 outline-0 text-xl`}
            placeholder="Search Facebook"
            value={""}
            onChange={() => {}}
          />
        </div>
        {/* Users */}
        <div className="h-[68vh] overflow-y-auto mt-4 scrollbar-hide hover:scrollbar-thin scrollbar-track-transparent hover:scrollbar-thumb-gray-500">
          {users.map((user, index) => (
            <button
              key={index}
              className={`flex items-center gap-2 hover:bg-[#f0f2f5] w-full p-4 rounded-lg cursor-pointer ${
                user._id === selectedUser?._id ? "bg-[#f0f2f5]" : ""
              }`}
              onClick={() => setSelectedUser(user)}
            >
              <img
                className="rounded-full w-8 h-8 lg:w-18 lg:h-18"
                src={user.avatar || "/avatar.png"}
                alt="user avatar"
              />
              {/* Only display on large screen */}
              <div className="text-left hidden md:block">
                <div className="text-start text-xl truncate">
                  {user.fullName}
                </div>
                <div className="text-start text-lg">Online</div>
              </div>
            </button>
          ))}
        </div>
      </div>
      <button className="hidden lg:flex justify-center hover:bg-[#f0f2f5] w-full p-4 rounded-lg cursor-pointer gap-2 mt-4">
        <LaptopMinimal />
        Try Messenger for Mac
      </button>
    </div>
  );
};

export default ChatSidebar;
