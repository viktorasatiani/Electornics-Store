import { Link } from "react-router-dom";

function LinkButton({ children, to, color, size }) {
  const baseStyle =
    "cursor-pointer rounded-full border transition-all duration-500";
  const colors = {
    white:
      " border-violet-600 bg-white text-violet-600 outline-violet-600 hover:bg-violet-600 hover:text-white",
    violet:
      "border-violet-600 bg-violet-600 text-white otline-violet-600 hover:bg-white hover:text-violet-600",
    black:
      "border-black bg-black text-white otiline-black hover:bg-violet-300 hover:bg-white",
    red: "border-red-50 bg-white text-black outline-red-600  hover:text-white hover:border-white hover:bg-inherit",
  };
  const sizes = {
    small: "",
    medium: "px-5 py-3 text-base font-normal",
    large: "text-base px-16 py-3 font-normal",
  };

  const buttonStyles = `${baseStyle} ${colors[color]} ${sizes[size]}`;
  return (
    <div>
      <Link to={to}>
        <button className={buttonStyles}>{children}</button>
      </Link>
    </div>
  );
}

export default LinkButton;
