import User from "../models/user.model.js";
import Message from "../models/message.model.js";
import cloudinary from "../lib/cloudinary.js";
import { getReceiverSocketId, io } from "../lib/socket.js";

export const getListUsersMessage = async (req, res) => {
  try {
    const currentUserId = req.user._id;
    // Get all users without current user.
    // & Do not get user password.
    const listUsersWithoutMe = await User.find({
      _id: { $ne: currentUserId },
    }).select("-password");

    res.status(200).json(listUsersWithoutMe);
  } catch (error) {
    console.error("Error in getUsersMessage: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getSpecificUserMessage = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const myId = req.user._id;

    const messages = await Message.find({
      $or: [
        { senderId: myId, receiverId: userToChatId },
        { senderId: userToChatId, receiverId: myId },
      ],
    });
    res.status(200).json(messages);
  } catch (error) {
    console.error("Error in getSpecificUserMessage: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

// A message can be text or image or both
export const sendMessage = async (req, res) => {
  const { text, image } = req.body;
  const { id: receiverId } = req.params;
  const senderId = req.user._id;

  let imageUrl;
  if (image) {
    // Upload base 64 image to cloudinary
    const uploadResponse = await cloudinary.uploader.upload(image);
    imageUrl = uploadResponse.secure_url;
  }

  const newMessage = new Message({
    senderId,
    receiverId,
    text,
    image: imageUrl,
  });
  await newMessage.save();

  const receiverSocketId = getReceiverSocketId(receiverId);
  // If user is online, send message in real time
  if (receiverSocketId) {
    // To a specific receiver
    io.to(receiverSocketId).emit("newMessage", newMessage);
  }

  res.status(201).json(newMessage);

  try {
  } catch (error) {
    console.log("Error in send message controller: ", error.message);
  }
};
