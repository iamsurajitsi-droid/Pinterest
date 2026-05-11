import { CiSearch } from "react-icons/ci";
import { IoCameraOutline } from "react-icons/io5";

function Navbar({ className }) {
  return (
    // Navbar
    <div className={`${className} h-20 flex-1 flex p-4`}>
      {/* input search */}
      <div className="flex-1 flex items-center bg-[#dadad3] rounded-xl">
        <CiSearch className="text-[1.2rem] ml-4 mr-2" />
        <input type="text" placeholder="Search" className={`text-[1em] h-full outline-0 flex-1 font-semibold leading-1`} />
        <IoCameraOutline className="text-3xl m-4 shrink-0 hover:bg-white rounded-lg" />
      </div>
    </div>
  );
}

export default Navbar;
