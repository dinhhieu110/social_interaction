import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";

export const useChatStore = create((set) => ({
  messages: [],
  users: [],
  onlineUsers: [],
  selectedUser: null,
  enableShimmerUsers: false,
  enableShimmerMessages: false,

  getUsers: async () => {
    set({ enableShimmerUsers: true });
    try {
      const response = await axiosInstance.get("/messages/users");
      set({ users: response.data });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ enableShimmerUsers: false });
    }
  },

  getMessages: async (userId) => {
    set({ enableShimmerMessages: true });
    try {
      const response = await axiosInstance.get(`/messages/${userId}`);
      set({ messages: response.data });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ enableShimmerMessages: false });
    }
  },

  //TODO: Optimize later
  setSelectedUser: (selectedUser) => {
    set({ selectedUser: selectedUser });
  },
}));
