import { NavLink } from "react-router-dom";

function NavigationSecondary() {
  return (
    <nav>
      <ul className="flex gap-4 text-white underline">
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
