/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";

const getUser = createContext({
  userData: {},
});

function SayUser({ children }) {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    (async function fetchUser() {
      const res = await fetch("https://randomuser.me/api/", { signal });
      const data = await res.json();
      // console.log(data.results[0]); //Log Here
      setUser(data.results[0]);
    })();

    return () => {
      controller.abort();
    };
  }, []);
  return (
    <getUser.Provider value={{ userData: user }}>{children}</getUser.Provider>
  );
}

export { getUser };
export default SayUser;
