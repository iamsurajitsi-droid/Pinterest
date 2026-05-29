import appLogo from "./assets/logo/pinterest-circle-logo.webp";
import { RiHome6Line, RiHome6Fill } from "react-icons/ri";
import { GoBell } from "react-icons/go";
import { IoMdCompass } from "react-icons/io";
import {
  IoChatbubbleEllipsesOutline,
  IoAddCircleOutline,
  IoCompassOutline,
  IoSettingsOutline,
  IoAddCircle,
  IoChatbubbleEllipses,
} from "react-icons/io5";
import { PiClipboard, PiClipboardFill } from "react-icons/pi";
import { FaBell } from "react-icons/fa";
import { useState } from "react";

function Sidebar({ className }) {
  const [currentTab, setCurrTab] = useState("home");

  return (
    <div
      className={`${className} w-16 max-sm:w-12 h-screen border-r border-[#c8c8c1] flex flex-col items-center relative shrink-0`}
    >
      {/* Top Sidebar */}
      <span className="w-12 aspect-square rounded-lg p-2 max-sm">
        <img src={appLogo} alt="logo" className="" />
      </span>
      {/* Home */}
      <span
        onClick={() => {
          setCurrTab("home");
        }}
      >
        {currentTab === "home" ? (
          <RiHome6Fill className={"sideLogo"} />
        ) : (
          <RiHome6Line className={"sideLogo"} />
        )}
      </span>
      {/* Explore */}
      <span
        onClick={() => {
          setCurrTab("explore");
        }}
      >
        {currentTab === "explore" ? (
          <IoMdCompass className={"sideLogo"} />
        ) : (
          <IoCompassOutline className={"sideLogo"} />
        )}
      </span>
      {/* Boards */}
      <span
        onClick={() => {
          setCurrTab("boards");
        }}
      >
        {currentTab === "boards" ? (
          <PiClipboardFill className={"sideLogo"} />
        ) : (
          <PiClipboard className={"sideLogo"} />
        )}
      </span>
      {/* create */}
      <span
        onClick={() => {
          setCurrTab("create");
        }}
      >
        {currentTab === "create" ? (
          <IoAddCircle className={"sideLogo"} />
        ) : (
          <IoAddCircleOutline className={"sideLogo"} />
        )}
      </span>
      {/* Updates */}
      <span
        onClick={() => {
          setCurrTab("update");
        }}
      >
        {currentTab === "update" ? (
          <FaBell className={"sideLogo"} />
        ) : (
          <GoBell className={"sideLogo"} />
        )}
      </span>
      {/* message */}
      <span
        onClick={() => {
          setCurrTab("message");
        }}
      >
        {currentTab === "message" ? (
          <IoChatbubbleEllipses className={"sideLogo"} />
        ) : (
          <IoChatbubbleEllipsesOutline className={"sideLogo"} />
        )}
      </span>

      {/* bottomBar */}
      <span className="absolute bottom-0">
        <IoSettingsOutline className={"sideLogo"} />
      </span>
    </div>
  );
}

export default Sidebar;
