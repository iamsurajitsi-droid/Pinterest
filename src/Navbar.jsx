import { useContext, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoCameraOutline, IoChevronUpSharp } from "react-icons/io5";
import { getUser } from "./store/userProvider.store";
import userDefaultLogo from "./assets/logo/userDefaultLogo.jpg";

function Navbar({ className, dropdownFn }) {
  //blink effect
  const [blink, setBlink] = useState(false);
  const { userData } = useContext(getUser);

  if (!userData) {
    return (
      <div className={`${className}  h-20 flex-1 flex p-4 `}>
        <div className="flex-1 flex items-center bg-[#dadad3] rounded-xl">
          <CiSearch className="text-[1.2rem] ml-4 mr-2" />
          <input
            type="text"
            placeholder="Search"
            className={`text-[1em] h-full outline-0 flex-1 font-semibold leading-1`}
            disabled
          />
        </div>
      </div>
    );
  }

  return (
    // Navbar
    <div className={`${className} h-20 flex-1 flex p-4 bg-white`}>
      {/* input search */}
      <div className="flex-1 flex items-center bg-[#dadad3] rounded-xl">
        <CiSearch className="text-[1.2rem] ml-4 mr-2" />
        <input
          type="text"
          placeholder="Search"
          className={`text-[1em] h-full outline-0 flex-1 font-semibold leading-1`}
        />
        <IoCameraOutline className="text-3xl m-4 shrink-0 hover:bg-white rounded-lg box-content p-2 transition-transform" />
      </div>
      {/* profile */}
      <span
        className={`h-12 aspect-square p-2 cursor-pointer hover:bg-[#dadad3] ml-2 rounded-lg transition-all`}
      >
        <img
          src={
            userData.picture?.large ||
            userData.picture?.medium ||
            userData.picture?.thumbnail ||
            userDefaultLogo
          }
          alt=""
          className={`h-full w-full rounded-[50%] border border-[#dadad3]`}
        />
      </span>
      {/* Arrow */}
      {/* Blink on click */}
      <span
        className={`flex justify-center items-center hover:bg-[#dadad356] aspect-square rounded-lg`}
        onClick={() => {
          dropdownFn();
          // Blink
          setBlink(true);
          setTimeout(() => {
            setBlink(false);
          }, 500);
        }}
      >
        <IoChevronUpSharp className={`${blink && "blink"}`} />
      </span>
    </div>
  );
}

export default Navbar;
