import appLogo from "./assets/logo/pinterest-circle-logo.webp";
import { RiHome6Line } from "react-icons/ri";
import { GoBell } from "react-icons/go";
import {
  IoChatbubbleEllipsesOutline,
  IoAddCircleOutline,
  IoCompassOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { PiClipboard } from "react-icons/pi";

function Sidebar({ className }) {
  return (
    <div
      className={`${className} w-16 h-screen border-r border-[#c8c8c1] flex flex-col items-center relative shrink-0`}
    >
      {/* Top Sidebar */}
      <span className="w-12 aspect-square rounded-lg p-2 ">
        <img src={appLogo} alt="logo" className="" />
      </span>
      <RiHome6Line className={"sideLogo"} />
      <IoCompassOutline className={"sideLogo"} />
      <PiClipboard className={"sideLogo"} />
      <IoAddCircleOutline className={"sideLogo"} />
      <GoBell className={"sideLogo"} />
      <IoChatbubbleEllipsesOutline className={"sideLogo"} />

      {/* bottomBar */}
      <span className="absolute bottom-0">
        <IoSettingsOutline className={"sideLogo"} />
      </span>
    </div>
  );
}

export default Sidebar;
