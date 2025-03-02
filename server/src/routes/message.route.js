import express from "express";
import { protectRoute } from "../middlewares/auth.middleware.js";
import {
  getSpecificUserMessage,
  getListUsersMessage,
  sendMessage,
} from "../controllers/message.controller.js";

const router = express.Router();

// Side bar list user in Messenger
router.get("/users", protectRoute, getListUsersMessage);
router.get("/:id", protectRoute, getSpecificUserMessage);

router.post("/send/:id", protectRoute, sendMessage);

export default router;
