import { Link } from "react-router-dom";

function CategoryItem({ text, to, src }) {
  return (
    <Link to={to}>
      <div className="flex flex-col gap-6 self-center justify-self-center">
        <div className="overflow-hidden rounded-full">
          <img
            src={src}
            alt={text}
            className="h-56 transition-all duration-200 hover:scale-[1.2]"
          />
        </div>
        <p className="self-center justify-self-center text-xl font-semibold">
          {text}
        </p>
      </div>
    </Link>
  );
}

export default CategoryItem;
