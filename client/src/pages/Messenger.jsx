import React, { useEffect } from "react";
import { useChatStore } from "../store/useChatStore";
import { ChatContainer, ChatSidebar } from "../components/index.js";

const Messenger = () => {
  const { selectedUser, setSelectedUser, getUsers, users, enableShimmerUsers } =
    useChatStore();

  const onlineUsers = [];

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <div className="bg-blue-100 overflow-y-hidden">
      <div className="flex items-center justify-center">
        <div className="h-[calc(100vh-8rem)] w-full flex m-6 bg-amber-200 gap-6 ">
          <ChatSidebar />
          <ChatContainer />
        </div>
      </div>
    </div>
  );
};

export default Messenger;
