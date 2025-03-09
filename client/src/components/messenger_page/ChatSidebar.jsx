import React, { useEffect, useLayoutEffect } from "react";
import { useChatStore } from "../../store/useChatStore";
import SidebarSkeleton from "../skeleton/SidebarSkeleton";
import { Edit, Search, LaptopMinimal } from "lucide-react";
import { useAuthStore } from "../../store/useAuthStore";

const ChatSidebar = () => {
  const { selectedUser, setSelectedUser, getUsers, users, enableShimmerUsers } =
    useChatStore();
  const { onlineUsers } = useAuthStore();

  useLayoutEffect(() => {
    setSelectedUser(users[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [users]);

  if (enableShimmerUsers) return <SidebarSkeleton />;
  return (
    <div className="lg:w-md w-1/6 rounded-lg p-4 h-full shadow-2xl">
      <div className="border-b-2">
        <div className="flex justify-between">
          <h1 className="lg:text-3xl text-2xl font-bold">Chats</h1>
          <button
            type="button"
            className="rounded-full hidden lg:block bg-[#f0f2f5] p-2 cursor-pointer"
          >
            <Edit />
          </button>
        </div>
        <div className="relative hidden lg:flex h-14 w-full mt-4">
          <div className="absolute z-2 top-2 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="size-6 text-black" />
          </div>
          <input
            type="email"
            className={`input input-bordered w-full bg-[#f0f2f5] pl-14 focus:outline-0 rounded-2xl text-xl`}
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
              <div className="relative">
                <img
                  className="rounded-full object-cover w-8 h-8 lg:w-18 lg:h-18"
                  src={user.avatar || "/avatar.png"}
                  alt="user avatar"
                />
                {onlineUsers.includes(user._id) && (
                  <span className="absolute size-1 bg-green-500 lg:size-3 bottom-2 right-1 rounded-full ring-zinc-900 ring-2"></span>
                )}
              </div>
              {/* Only display on large screen */}
              <div className="text-left hidden lg:block">
                <div className="text-start text-xl truncate">
                  {user.fullName}
                </div>
                <div className="text-start text-lg">
                  {onlineUsers.includes(user._id) ? "Online" : "Offline"}
                </div>
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
