import { createContext, useEffect, useState } from "react";

const serverData = createContext({
  data: {},
});

function ServerDataProvider({ children }) {
  const [fetchedData, setFetchedData] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    (async function fData() {
      try {
        const data = await fetch(
          `${import.meta.env.VITE_BASE_URL}photos?per_page=30`,
          {
            signal: signal,
            headers: {
              Authorization: `Client-ID ${import.meta.env.VITE_API_KEY}`,
            },
          },
        );
        const result = await data.json();
        setFetchedData(result);
        // console.log(result);
        
      } catch (error) {
        console.log(error);
        // setTimeout(fData, 2000);
      }
    })();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <serverData.Provider
      value={{
        data: fetchedData,
      }}
    >
      {children}
    </serverData.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export { serverData };
export default ServerDataProvider;
