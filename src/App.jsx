import { useRef, useState } from "react";
import "./App.css";
import Body from "./Body";
import DropdownProfile from "./DropdownProfile";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import SayUser from "./store/userProvider.store";

function App() {
  const dropdownRef = useRef();
  const [dropdown, setDropdown] = useState(false);
  function toggleDropdown() {
    dropdown ? setDropdown(false) : setDropdown(true);
    // console.log(dropdown);
    // console.log(dropdownRef);
  }
  return (
    <SayUser>
      <Body className={"min-h-screen max-w-[100vw] flex"}>
        {/* Sidebar */}
        <Sidebar className={"fixed top-0 left-0 py-4"} />
        <div className={`contentDiv flex-1 h-8`}>
          {/* Navbar */}
          <Navbar
            className={"relative"}
            dropdownFn={toggleDropdown}
            dropdownRef={dropdownRef}
            setDropdown={setDropdown}
          />
          {dropdown && (
            <DropdownProfile
              className={`absolute z-10 right-4`}
              dropdownRef={dropdownRef}
            />
          )}
        </div>
      </Body>
    </SayUser>
  );
}

export default App;
