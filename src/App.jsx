import { useRef, useState } from "react";
import "./App.css";
import Body from "./Body";
import DropdownProfile from "./DropdownProfile";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import SayUser from "./store/userProvider.store";
import ServerDataProvider from "./store/dataProvider.store";
import MainContent from "./MainContent";

function App() {
  const dropdownRef = useRef();
  const [dropdown, setDropdown] = useState(false);
  function toggleDropdown() {
    dropdown ? setDropdown(false) : setDropdown(true);
  }

  return (
    <SayUser>
      <ServerDataProvider>
        <Body className={"h-screen max-w-[100vw] flex"}>
          {/* Sidebar */}
          <Sidebar className={"fixed top-0 left-0 py-4"} />
          <div className={`contentDiv flex-1 overflow-y-auto h-screen`}>
            {/* Navbar */}
            <Navbar
              className={"sticky top-0 z-20"}
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
            <MainContent />
          </div>
        </Body>
      </ServerDataProvider>
    </SayUser>
  );
}

export default App;
