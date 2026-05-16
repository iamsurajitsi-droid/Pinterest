import { useContext, useEffect } from "react";
import ContentBox from "./ContentBox";
import { serverData } from "./store/dataProvider.store";

function MainContent({ className }) {
  const contentData = useContext(serverData).data;

  useEffect(() => {
    try {
      console.log(contentData[0]);
    } catch (e) {
      console.log(e);
    }
  }, [contentData]);

  return (
    <div
      className={`${className} columns-[240px] break-inside-avoid p-3`}
    >
      {contentData.map((content) => {
        return (
          <ContentBox
            key={content.id}
            className={""}
            imgUrl={
              content.urls.thumb || content.urls.raw || content.urls.small
            }
          />
        );
      })}
    </div>
  );
}

export default MainContent;
