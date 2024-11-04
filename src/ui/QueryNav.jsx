import { Link } from "react-router-dom";
import QueryBox from "./QueryBox";

function QueryNav() {
  return (
    <div className="flex items-center justify-center gap-10">
      <Link to={"/"} className="text-4xl font-semibold">
        TechShed
      </Link>
      <QueryBox />
    </div>
  );
}

export default QueryNav;
