import { useContext, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoCameraOutline, IoChevronUpSharp } from "react-icons/io5";
import { getUser } from "./store/userProvider.store";
import userDefaultLogo from "./assets/logo/userDefaultLogo.jpg";

function Navbar({ className, dropdownFn }) {
  //blink effect
  const [blink, setBlink] = useState(false);
  const { userData } = useContext(getUser);

  return (
    // Navbar
    <div
      className={`${className} h-20 max-sm:h-16 flex-1 flex items-center p-4 max-sm:px-2 bg-white`}
    >
      {/* input search */}
      <div className="flex-1 flex h-full items-center bg-[#dadad3] rounded-xl min-w-0">
        <CiSearch className="text-[1.2rem] ml-4 mr-2 max-sm:ml-2 max-sm:mr-1" />
        <input
          type="text"
          placeholder="Search"
          className={`text-[1em] max-sm:text-sm h-full outline-0 min-w-0 flex-1 font-semibold bg-transparent`}
        />
        <IoCameraOutline className="text-3xl max-sm:text-xl m-4 max-sm:m-1 shrink-0 hover:bg-white rounded-lg box-content p-2 transition-transform max-[450px]:hidden" />
      </div>
      {/* profile */}
      <span
        className={`h-12 max-sm:h-10 aspect-square p-2 cursor-pointer hover:bg-[#dadad3] ml-2 max-sm:ml-1 rounded-lg transition-all shrink-0`}
      >
        <img
          src={
            userData?.picture?.large ||
            userData?.picture?.medium ||
            userData?.picture?.thumbnail ||
            userDefaultLogo
          }
          alt=""
          className={`h-full w-full rounded-[50%] border border-[#dadad3]`}
        />
      </span>
      {/* Arrow */}
      {/* Blink on click */}
      <span
        className={`h-12 max-sm:h-10 flex justify-center items-center hover:bg-[#dadad356] aspect-square rounded-lg shrink-0 ml-1`}
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
