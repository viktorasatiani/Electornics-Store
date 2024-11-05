import { Link } from "react-router-dom";

function PolicyNav() {
  return (
    <div className="flex flex-col gap-10">
      <h2 className="text-xl font-semibold">Policy</h2>
      <div className="flex flex-col gap-4">
        <Link to={"/shipping"}>Shipping & Returns</Link>
        <Link to={"/terms"}>Terms & Conditions</Link>
        <Link to={"/terms"}>Payment Methods</Link>
        <Link to={"/help"}>FAQ</Link>
      </div>
    </div>
  );
}

export default PolicyNav;
