import { useContext } from "react";
import { getUser } from "./store/userProvider.store";
import defaultProftleImg from "./assets/logo/userDefaultLogo.jpg";
import styles from "./DropdownProfile.module.css";

function DropdownProfile({ className, dropdownRef }) {
  const userInfo = useContext(getUser).userData;
  console.log(userInfo);

  return (
    //container
    <div
      className={`${className} ${styles.mainContainer} aspect-284/248 inline-block w-71 shadow-[0_0_1rem_#0000002A]  rounded-2xl p-4 transition-all`}
      ref={dropdownRef}
    >
      <span className="text-[0.7rem] text-[#424242] text-shadow-sm ">
        Currently in
      </span>
      {/* ProfileBar */}
      <div className="flex p-2 h-17.5 gap-2 hover:bg-[#f6f6f3] rounded-lg">
        {/* Profile Image */}
        <img
          src={
            userInfo.picture.medium ||
            userInfo.picture.large ||
            defaultProftleImg
          }
          className="aspect-square object-cover h-full rounded-[50%] border border-[#d2d2d0] "
        />
        {/* profile detels */}
        <div className="dropdown-Container flex-1 h-full flex flex-col justify-center ">
          <p className="mainName font-bold">
            {userInfo.name.first + " " + userInfo.name.last}
          </p>
          <p className="accountType text-[0.7rem] text-[#62625b] ">Presonal</p>
          <p className="email text-[0.7rem] text-[#62625b]">{userInfo.email}</p>
        </div>
      </div>
      <p className="font-semibold">Convert to business</p>
      <div className="">
        <p className="text-[0.7rem] my-2 text-[#62625b] cursor-pointer ">
          Your accounts
        </p>
        <p className="font-semibold py-1 cursor-pointer ">
          Add Pinterest account
        </p>
        <p className="font-semibold cursor-pointer ">Log out</p>
      </div>
    </div>
  );
}

export default DropdownProfile;
