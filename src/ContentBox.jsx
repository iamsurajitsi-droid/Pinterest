import { GoKebabHorizontal } from "react-icons/go";

function ContentBox({ className, imgUrl }) {
  return (
    <div className={`${className} allContents w-full overflow-hidden box-content pb-2`}>
      <img src={imgUrl} className="w-full h-full rounded-4xl" />
      <button className="float-end box-content p-2 hover:bg-[#f3f3f0] text-[0.8rem] rounded-[50%] cursor-pointer">
        <GoKebabHorizontal />
      </button>
    </div>
  );
}
export default ContentBox;
