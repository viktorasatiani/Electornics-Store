import { HiOutlineCube } from "react-icons/hi2";
import NavigationSecondary from "./NavigationSecondary";

function HeaderNavSecondary() {
  return (
    <div className="mb-2 flex items-center justify-between bg-black px-12">
      <div className="flex items-center justify-center gap-4">
        <div>
          <HiOutlineCube color="white" size={30} />
        </div>
        <span className="font-nunito text-white">
          Free Shipping foor orders over $50
        </span>
      </div>
      <NavigationSecondary />
    </div>
  );
}

export default HeaderNavSecondary;
