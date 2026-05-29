import { GoKebabHorizontal } from "react-icons/go";
import ContentOptions from "./ContentOptions";

function ContentBox({ className, imgUrl, contentKey, openedState }) {
  const [openedId, setOpenedId] = openedState;

  return (
    <div
      className={`${className} allContents w-full box-content my-8 relative`}
    >
      <img
        src={imgUrl}
        className="w-full h-full rounded-4xl max-sm:rounded-2xl"
      />
      <div className="float-end relative ">
        <div
          className="box-content p-2 hover:bg-[#f3f3f0] w-fit aspect-square text-[0.8rem] rounded-[50%] max-sm:rounded-[30%] cursor-pointer"
          onClick={() => {
            openedId == null && setOpenedId(contentKey);
            openedId != null && setOpenedId(null);
          }}
        >
          <GoKebabHorizontal />
        </div>
        {openedId == contentKey && (
          <ContentOptions
            infoText={""}
            className={"absolute top-full right-0 mt-2 z-30 "}
          />
        )}
      </div>
    </div>
  );
}
export default ContentBox;

//make search func
