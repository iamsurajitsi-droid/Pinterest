import { useContext, useEffect, useRef, useState } from "react";
import ContentBox from "./ContentBox";
import { serverData } from "./store/dataProvider.store";

function MainContent({ className }) {
  const { data, page, setPage } = useContext(serverData);
  const [contentData, setContentData] = useState([]);
  const isFetching = useRef(false);
  const pageRef = useRef(page);
  const dataRef = useRef(data);

  const items = contentData.length ? contentData : data || [];

  useEffect(() => {
    pageRef.current = page;
  }, [page]);

  useEffect(() => {
    dataRef.current = data;
  }, [data]);

  //call next pages=================
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function callNextPage() {
      if (isFetching.current) return;
      isFetching.current = true;
      const nextPage = pageRef.current + 1;
      setPage(nextPage);

      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}photos?per_page=30&page=${nextPage}`,
          {
            signal,
            headers: {
              Authorization: `Client-ID ${import.meta.env.VITE_API_KEY}`,
            },
          },
        );
        const newData = await response.json();
        setContentData((prev) => [
          ...(prev.length ? prev : dataRef.current || []),
          ...newData,
        ]);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.log(error);
        }
      } finally {
        isFetching.current = false;
      }
    }

    const handleScroll = () => {
      const scrollElement = document.querySelector(".contentDiv");
      if (!scrollElement) return;

      const scrollTop = scrollElement.scrollTop;
      const windowHeight = scrollElement.clientHeight;
      const fullHeight = scrollElement.scrollHeight;

      if (scrollTop + windowHeight >= fullHeight - 100) {
        console.log("Olla");
        callNextPage();
      }
    };

    const scrollElement = document.querySelector(".contentDiv");
    scrollElement?.addEventListener("scroll", handleScroll);

    return () => {
      controller.abort();
      scrollElement?.removeEventListener("scroll", handleScroll);
    };
  }, [setPage]);

  const openedState = useState(null);

  return (
    <div
      className={`${className} columns-[240px] max-sm:columns-2 break-inside-avoid p-3 max-sm:p-1.5 `}
      style={{ contain: "layout" }}
    >
      {items.map((content) => {
        return (
          <ContentBox
            key={content.id}
            className={"break-inside-avoid"}
            imgUrl={
              content.urls.thumb || content.urls.raw || content.urls.small
            }
            contentKey={content.id}
            openedState={openedState}
          />
        );
      })}
    </div>
  );
}

export default MainContent;
