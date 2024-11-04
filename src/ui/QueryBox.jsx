import { HiMiniMagnifyingGlass } from "react-icons/hi2";

function QueryBox() {
  return (
    <form>
      <div className="flex border-[1px] border-white transition-all duration-300 hover:rounded-full hover:border-black">
        <input
          type="text"
          placeholder="Search"
          className="bg-primaryColor w-60 rounded-[90px] border-none p-3 text-sm placeholder:px-4 placeholder:text-black"
        />
        <label className="rounded-b-l-[90px] ml-[-40px] flex w-1/3 cursor-pointer items-center justify-center rounded-r-[90px] bg-violet-600 px-6 py-3 text-sm hover:bg-black">
          <HiMiniMagnifyingGlass size={20} color="white" />
        </label>
      </div>
    </form>
  );
}

export default QueryBox;
