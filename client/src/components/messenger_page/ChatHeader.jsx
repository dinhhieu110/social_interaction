import React from "react";
import { Ellipsis, Phone, Video } from "lucide-react";
import { useChatStore } from "../../store/useChatStore";
import { useAuthStore } from "../../store/useAuthStore";
const ChatHeader = () => {
  const { selectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();

  return (
    <div className="p-3 border-b-gray-300 border-b-1">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="relative">
            <img
              width={40}
              height={40}
              className="object-cover rounded-full"
              src={selectedUser?.avatar || "/avatar.png"}
              alt="avatar"
            />
            {onlineUsers.includes(selectedUser?._id) && (
              <span className="absolute size-1 bg-green-500 lg:size-2 bottom-1 right-1 rounded-full ring-zinc-900 ring-2"></span>
            )}
          </div>
          <p className="font-semibold text-lg">{selectedUser?.fullName}</p>
        </div>
        <div className="flex items-center gap-4 text-[#aa00ff]">
          <button className="rounded-full p-3 cursor-pointer hover:bg-[#f0f2f5]">
            <Phone size={25} className="" />
          </button>
          <button className="rounded-full p-3 cursor-pointer hover:bg-[#f0f2f5]">
            <Video size={25} />
          </button>
          <button className="hidden lg:block rounded-full p-3 cursor-pointer hover:bg-[#f0f2f5]">
            <Ellipsis size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
