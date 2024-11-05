import { NavLink } from "react-router-dom";

function NavigationSecondary({ footer }) {
  const condition = footer ? "flex-col text-black" : " underline text-white";
  return (
    <nav>
      <ul className={`flex ${condition} gap-4`}>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/help">Help Center</NavLink>
        </li>
        <li>
          <NavLink>Call Us 123-456-789</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationSecondary;
