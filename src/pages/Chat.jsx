import React from "react";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
export default function Chat() {
  return (
    <div className="relative z-0 flex h-screen w-screen overflow:hidden bg-neutral-100">
      <div className="relative flex h-full max-w-full flex-1 flex-col overflow:hidden bg-green-100">
        chat area
      </div>
      <div
        className=" h-screen flex flex-col flex-shrink-0 overflow-x-hidden bg-green-300"
        style={{ width: "359px" }}
      >
        <div
          className="relative p-2 mt-6 mb-2 max-w-sm mx-auto bg-white rounded-3xl shadow-lg flex items-center"
          style={{ width: "300px", height: "40px" }}
        >
          <div className="relative flex items-center rounded-full bg-stone-200">
            <span className="pb-1 px-1 text-neutral-900">
              <PersonOutlineOutlinedIcon
                className=""
                style={{ fontSize: "20px" }}
              />
            </span>
          </div>
          <span
            className="flex flex-nowrap pl-2 text-sm overflow-hidden whitespace-nowrap font-bold text-neutral-800"
            style={{ width: "200px" }}
          >
            Wajeeha Hashmi
          </span>
          <span
            className="relative flex items-center rounded-full bg-stone-200"
            style={{ padding: "2px" }}
          >
            <NotificationsNoneOutlinedIcon
              className="px-1 text-neutral-900"
              style={{ fontSize: "26px" }}
            />
          </span>
          <span
            className="relative flex items-center rounded-full ml-1 bg-stone-200"
            style={{ padding: "4px" }}
          >
            <SettingsOutlinedIcon
              className="px-1 text-neutral-900"
              style={{ fontSize: "22px" }}
            />
          </span>
        </div>
        <div
          className="relative p-2 mx-7 mt-2 mb-0 bg-white shadow-lg "
          style={{ width: "300 px", height: "77vh", borderRadius: "40px" }}
        >
          <div className="relative mx-2 p-3 mt-4 mb-2 max-w-sm mx-auto bg-zinc-800 rounded-2xl shadow-sm flex items-center">
            <span className="ml-2 text-md font-semibold text-white">
              New Chat
            </span>
          </div>
          <div className="individual">
            <span className="circle">
              <ForumOutlinedIcon className="forum-icon" />
            </span>
            <span className="data">
              "Write a persuasive email to convince potential Customers to try
              our service "
            </span>
            <span className="navigation">
              <MoreVertOutlinedIcon className="navi" />
            </span>
          </div>
          <div className="individual">
            <span className="circle">
              <ForumOutlinedIcon className="forum-icon" />
            </span>
            <span className="data">
              "Write a persuasive email to convince potential Customers to try
              our service "
            </span>
            <span className="navigation">
              <MoreVertOutlinedIcon className="navi" />
            </span>
          </div>
          <div className="individual">
            <span className="circle">
              <ForumOutlinedIcon className="forum-icon" />
            </span>
            <span className="data">
              "Write a persuasive email to convince potential Customers to try
              our service "
            </span>
            <span className="navigation">
              <MoreVertOutlinedIcon className="navi" />
            </span>
          </div>
          <div className="individual">
            <span className="circle">
              <ForumOutlinedIcon className="forum-icon" />
            </span>
            <span className="data">
              "Write a persuasive email to convince potential Customers to try
              our service "
            </span>
            <span className="navigation">
              <MoreVertOutlinedIcon className="navi" />
            </span>
          </div>
          <div className="individual">
            <span className="circle">
              <ForumOutlinedIcon className="forum-icon" />
            </span>
            <span className="data">
              "Write a persuasive email to convince potential Customers to try
              our service tooooooooooooooooooooooo "
            </span>
            <span className="navigation">
              <MoreVertOutlinedIcon className="navi" />
            </span>
          </div>
          {/* <div className="individual">
            <span className="circle">
              <ForumOutlinedIcon className="forum-icon" />
            </span>
            <span className="data">
              "Write a persuasive email to convince potential Customers to try
              our
              serviceyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy"
            </span>
            <span className="navigation">
              <MoreVertOutlinedIcon className="navi" />
            </span>
          </div> */}
        </div>

        <div
          className="relative p-2 mt-4 mb-2 max-w-sm mx-auto bg-white rounded-3xl shadow-lg flex items-center"
          style={{ width: "300px", height: "40px" }}
        ></div>
      </div>
    </div>
  );
}
