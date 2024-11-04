import { NavLink } from "react-router-dom";

function MainNavLink({ children, to }) {
  return (
    <li>
      <NavLink to={to}>{children}</NavLink>
    </li>
  );
}

export default MainNavLink;
