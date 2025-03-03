import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import cors from "cors"

import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

// Convert payload before sending to server
app.use(express.json()); // This enables JSON body parsing
app.use(express.urlencoded({ extended: true }));

// Allow to pass the cookies
app.use(cookieParser());
app.use(cors
  ({
    origin: "http://localhost:5173",
    credentials: true
  })

)

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server is running on PORT: ${PORT}`);
  connectDB();
});
