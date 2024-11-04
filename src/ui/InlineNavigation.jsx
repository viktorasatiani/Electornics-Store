import {
  HiMiniUserCircle,
  HiOutlineHeart,
  HiOutlineShoppingCart,
} from "react-icons/hi2";

function InlineNavigation() {
  return (
    <div className="flex gap-4">
      <HiMiniUserCircle size={30} />
      <button>Log In</button>
      <HiOutlineHeart size={30} />
      <HiOutlineShoppingCart size={30} />
    </div>
  );
}

export default InlineNavigation;
