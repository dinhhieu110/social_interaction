import React from "react";
import { useChatStore } from "../store/useChatStore";
import SidebarSkeleton from "./skeleton/SidebarSkeleton";
import { Edit, Search, LaptopMinimal } from "lucide-react";

const ChatSidebar = () => {
  const { selectedUser, setSelectedUser, getUsers, users, enableShimmerUsers } =
    useChatStore();
  if (enableShimmerUsers) return <SidebarSkeleton />;

  return (
    <div className="flex-1/3 bg-white rounded-lg p-4 h-full">
      <div className="border-b-2">
        <div className="flex justify-between">
          <h1 className="lg:text-3xl text-2xl font-bold">Chats</h1>
          <button
            type="button"
            className="rounded-full bg-[#f0f2f5] p-2 cursor-pointer"
          >
            <Edit />
          </button>
        </div>
        <div className="relative hidden md:flex h-14 bg-[#f0f2f5] w-full rounded-3xl mt-4">
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
        <div className="max-h-[68vh] overflow-y-auto mt-4 scrollbar-hide hover:scrollbar-thin scrollbar-track-transparent hover:scrollbar-thumb-gray-500">
          {Array(10)
            .fill(null)
            .map((_, index) => (
              <button
                key={index}
                className="flex gap-2 hover:bg-[#f0f2f5] w-full p-4 rounded-lg cursor-pointer"
              >
                <img
                  className="rounded-full w-8 h-8 lg:w-18 lg:h-18"
                  src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-1/480528379_4024046551212547_9084600564461308919_n.jpg?stp=cp6_dst-jpg_s80x80_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_ohc=bMIKWqlnXQUQ7kNvgEGtMiv&_nc_oc=AdhIEQKrfBfw1EYj1sHYbrARyQtidEOBUB8NVMZSOsMTMb4A0tyVompZHtI_vfoeItg&_nc_zt=24&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=AQiOeUeh7PTVQAEVEgsL_dy&oh=00_AYCUqt_-BFrJ-e1zL1136-YY4wOt4pTxHvLuzN-tbD_amg&oe=67CE15A4"
                  alt="user avatar"
                />
                <div className="flex flex-col justify-center">
                  <p className="text-start text-xl">Wilson Tran</p>
                  <div className="text-start text-lg font-light text-gray-500 relative ">
                    <span className="w-10 truncate">Latest message</span>
                    <span className="ml-3">
                      <span className="absolute right-5 bottom-1">.</span>1h
                    </span>
                  </div>
                </div>
              </button>
            ))}
        </div>
      </div>
      <button className="hover:bg-[#f0f2f5] w-full p-4 rounded-lg cursor-pointer flex justify-center gap-2 mt-4">
        <LaptopMinimal />
        Try Messenger for Mac
      </button>
    </div>
  );
};

export default ChatSidebar;
