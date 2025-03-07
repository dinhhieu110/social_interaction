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
  LayoutGrid,
} from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();
  return (
    <div className="h-20 border-b-amber-100 sticky top-0 shadow-xl w-full">
      <div className="h-full flex justify-between px-4 py-8 border-b-1 border-b-neutral-400 ">
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-blue-500 px-4 py-2 ">
            <h1 className="text-2xl text-white font-extrabold">S</h1>
          </div>
          <div className="relative hidden md:flex h-10 bg-neutral-200 w-[200px] md:w-[256px] rounded-3xl">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="size-5 text-base-content/40" />
            </div>
            <input
              type="email"
              className={`input input-bordered w-full pl-10 outline-0`}
              placeholder="Search Facebook"
              value={""}
              onChange={() => {}}
            />
          </div>
        </div>
        <div className="hidden xl:flex items-center gap-4">
          <Link className="py-6 px-8 lg:px-14 rounded-md hover:bg-neutral-200 cursor-pointer border-b-2 border-b-blue-600">
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
          <Link className="p-3 rounded-full bg-neutral-200 hover:bg-neutral-100 cursor-pointer">
            <LayoutGrid size={30} />
          </Link>
          <Link
            to={"/messenger"}
            className="p-3 rounded-full bg-neutral-200 hover:bg-neutral-100 cursor-pointer"
          >
            <MessageCircle size={30} />
          </Link>
          <Link className="p-3 rounded-full bg-neutral-200 hover:bg-neutral-100 cursor-pointer">
            <Bell size={30} />
          </Link>
          <div onClick={logout}>
            <img
              src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-1/480528379_4024046551212547_9084600564461308919_n.jpg?stp=cp6_dst-jpg_s80x80_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_ohc=bMIKWqlnXQUQ7kNvgEGtMiv&_nc_oc=AdhIEQKrfBfw1EYj1sHYbrARyQtidEOBUB8NVMZSOsMTMb4A0tyVompZHtI_vfoeItg&_nc_zt=24&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=AQiOeUeh7PTVQAEVEgsL_dy&oh=00_AYCUqt_-BFrJ-e1zL1136-YY4wOt4pTxHvLuzN-tbD_amg&oe=67CE15A4"
              className="p-3 rounded-full cursor-pointer"
              width={70}
              height={70}
            />
          </div>
        </div>
      </div>
      <div className="absolute left-0 "></div>
    </div>
  );
};

export default Navbar;
