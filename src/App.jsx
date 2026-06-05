import { useEffect, useRef, useState } from "react";
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

  //search fetch Fn
  /* useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    async function fetchSearch(searchText) {
      try {
        const responce = await fetch(
          `${import.meta.env.VITE_BASE_URL}/search/photos?per_page=30&query=${searchText}`,
          {
            signal: signal,
            headers: {
              Authorization: `Client-ID ${import.meta.env.VITE_API_KEY}`,
            },
          },
        );
        const data = await responce.json();
        console.log("data", data);
      } catch (error) {
        console.log(error);
      }

      return () => {
        controller.abort();
      };
    }
    fetchSearch("office");
  }, []); */

  const [searehResult, setSearehResult] = useState(null);

  async function handleSearch(searchText) {
    if (!searchText.trim()) {
      setSearehResult(null);
      return;
    }
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}search/photos?per_page=30&query=${searchText}`,
        {
          headers: {
            Authorization: `Client-ID ${import.meta.env.VITE_API_KEY}`,
          },
        },
      );
      const data = await response.json();
      setSearehResult(data.results);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <SayUser>
      <ServerDataProvider>
        <Body className={"h-screen max-w-[100vw] flex"}>
          {/* Sidebar */}
          <Sidebar className={"py-4"} />
          <div className={`contentDiv flex-1 overflow-y-auto h-screen`}>
            {/* Navbar */}
            <Navbar
              className={"sticky top-0 z-20"}
              dropdownFn={toggleDropdown}
              dropdownRef={dropdownRef}
              onSearch={handleSearch}
              setDropdown={setDropdown}
            />
            {dropdown && (
              <DropdownProfile
                className={`absolute z-10 right-4`}
                dropdownRef={dropdownRef}
              />
            )}
            <MainContent searehResult={searehResult} />
          </div>
        </Body>
      </ServerDataProvider>
    </SayUser>
  );
}

export default App;
