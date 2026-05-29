import { FaRegHeart } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";
import { AiOutlineMinus } from "react-icons/ai";
import { GoDownload } from "react-icons/go";
import { BsBan } from "react-icons/bs";

function Options({
  iconTag: IconTag,
  optionText,
  onClickFn = () => console.log(`click`),
}) {
  return (
    <div
      className="flex items-center mb-1 py-1 rounded-md hover:bg-[#e9e9e9] cursor-pointer transition-all w-50"
      onClick={onClickFn}
    >
      <IconTag className={"box-content pr-5 text-[1.2rem] pl-3 "} />
      <div className="font-semibold pr-4">{optionText}</div>
    </div>
  );
}

function ContentOptions({ infoText, className }) {
  return (
    <div
      className={`${className} px-1 pr-2 max-w-68 py-3 bg-[#ffffff] rounded-xl min-w-max w-fit flex justify-center flex-col`}
    >
      <p>{infoText}</p>
      <Options iconTag={FaRegHeart} optionText={"See more like this"} />
      <Options iconTag={FaRegEyeSlash} optionText={"See fewer like this"} />
      <Options iconTag={AiOutlineMinus} optionText={"See fewer AI art Pins"} />
      <Options iconTag={GoDownload} optionText={"Download image"} />
      <Options iconTag={BsBan} optionText={"Report pin"} />
    </div>
  );
}

export default ContentOptions;
