import React, { useEffect, useRef } from "react";
import { useChatStore } from "../../store/useChatStore";
import { useAuthStore } from "../../store/useAuthStore";
import ChatHeader from "./ChatHeader";
import ChatContent from "./ChatContent";
import ChatInput from "./ChatInput";
import { formatTime } from "../../lib/utils";

const ChatContainer = () => {
  const {
    messages,
    getMessages,
    enableShimmerMessages,
    selectedUser,
    subscribeToMessages,
    unsubscribeFromMessages,
  } = useChatStore();
  const { authUser } = useAuthStore();
  const messageEndRef = useRef(null);
  useEffect(() => {
    if (messages && messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    selectedUser?._id && getMessages(selectedUser._id);
    subscribeToMessages();
    return () => unsubscribeFromMessages();
  }, [
    selectedUser?._id,
    getMessages,
    unsubscribeFromMessages,
    subscribeToMessages,
  ]);

  if (enableShimmerMessages) return <div>Loading...</div>;

  return (
    <div className="flex-1 w-full bg-white rounded-lg h-full overflow-y-auto shadow-2xl">
      <ChatHeader />
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message._id}
            className={`chat ${
              message.senderId === authUser._id ? "chat-end" : "chat-start"
            }`}
            ref={messageEndRef}
          >
            <div className="chat-image avatar">
              <div className="size-10 rounded-full border">
                <img
                  src={
                    message.senderId === authUser._id
                      ? authUser.avatar || "/avatar.png"
                      : selectedUser.avatar || "/avatar.png"
                  }
                  alt="profile pic"
                />
              </div>
            </div>
            <div className="chat-header mb-1">
              <time className="text-xs opacity-50 ml-1">
                {formatTime(message.createdAt)}
              </time>
            </div>
            <div className="chat-bubble flex flex-col">
              {message.image && (
                <img
                  src={message.image}
                  alt="image"
                  className="sm:max-w-[200px] rounded-md mb-2"
                />
              )}
              {message.text && <p>{message.text}</p>}
            </div>
          </div>
        ))}
      </div>
      <ChatInput />
    </div>
  );
};

export default ChatContainer;
