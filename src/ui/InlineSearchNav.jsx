import InlineNavigation from "./InlineNavigation";
import QueryNav from "./QueryNav";

function InlineSearchNav() {
  return (
    <div className="flex items-center justify-between bg-white px-12 py-2">
      <QueryNav />
      <InlineNavigation />
    </div>
  );
}

export default InlineSearchNav;
