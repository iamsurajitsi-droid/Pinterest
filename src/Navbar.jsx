import { CiSearch } from "react-icons/ci";
import { IoCameraOutline, IoChevronUpSharp } from "react-icons/io5";
import { userImg } from "./userData/userData";

function Navbar({ className }) {
  return (
    // Navbar
    <div className={`${className} h-20 flex-1 flex p-4 `}>
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
        <img src={`${userImg}`} className={`h-full w-full rounded-[50%]`} />
      </span>
      {/* Arrow */}
      <span
        className={`flex justify-center items-center hover:bg-[#dadad356] aspect-square rounded-lg`}
      >
        <IoChevronUpSharp />
      </span>
    </div>
  );
}

export default Navbar;
