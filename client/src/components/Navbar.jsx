import React from "react";
import { useAuthStore } from "../store/useAuthStore";
import {
  Search,
  House,
  Flag,
  MonitorPlay,
  ChartGantt,
  MessageCircle,
  Bell,
  UserPen,
  Edit,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();
  const navigate = useNavigate();
  return (
    <div className="h-20 border-b-amber-100 sticky top-0 shadow-xl w-full">
      <div className="h-full flex justify-between px-4 py-8 border-b-1 border-b-neutral-400 ">
        <div className="flex items-center gap-2">
          <div
            onClick={() => {
              navigate("/");
            }}
            className="rounded-full bg-blue-500 px-4 py-2 cursor-pointer"
          >
            <h1 className="text-2xl text-white font-extrabold">S</h1>
          </div>
          <div className="relative hidden md:flex h-10 w-[200px] md:w-[256px] ">
            <div className="absolute z-2 top-2.5 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="size-5 text-base-content/40" />
            </div>
            <input
              type="email"
              className={`input input-bordered w-full pl-10 focus:outline-0 bg-[#f0f2f5] rounded-3xl`}
              placeholder="Search Facebook"
              value={""}
              onChange={() => {}}
            />
          </div>
        </div>
        <div className="hidden xl:flex items-center gap-4">
          <Link
            to="/"
            className="py-6 px-8 lg:px-14 rounded-md hover:bg-neutral-200 cursor-pointer border-b-2 border-b-blue-600"
          >
            <House size={30} />
          </Link>
          <Link className="py-6 px-8 lg:px-14 rounded-md hover:bg-neutral-200 cursor-pointer">
            <Flag size={30} />
          </Link>
          <Link className="py-6 px-8 lg:px-14 rounded-md hover:bg-neutral-200 cursor-pointer">
            <MonitorPlay size={30} />
          </Link>
          <Link className="py-6 px-8 lg:px-14 rounded-md hover:bg-neutral-200 cursor-pointer">
            <ChartGantt size={30} />
          </Link>
          <Link className="py-6 px-8 lg:px-14 rounded-md hover:bg-neutral-200 cursor-pointer">
            <Flag size={30} />
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Link
            to="/messenger"
            className="p-3 rounded-full bg-neutral-200 hover:bg-neutral-100 cursor-pointer"
          >
            <MessageCircle size={30} />
          </Link>
          <Link className="p-3 rounded-full bg-neutral-200 hover:bg-neutral-100 cursor-pointer">
            <Bell size={30} />
          </Link>
          <Link
            className="p-3 rounded-full bg-neutral-200 hover:bg-neutral-100 cursor-pointer"
            to="/profile"
          >
            <UserPen size={30} />
          </Link>
          <img
            src={authUser.avatar || "/avatar.png"}
            className="rounded-full size-14 cursor-pointer object-cover"
            width={50}
            height={50}
            onClick={logout}
          />
        </div>
      </div>
      <div className="absolute left-0 "></div>
    </div>
  );
};

export default Navbar;
