import { NavLink } from "react-router-dom";
import Icon from "../Icon";

const NavbarItem = ({ path, text, src }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) => `navbar-link ${isActive && "active"}`}
    >
      <Icon src={src} margin="0rem 1rem 0rem 0rem" />
      <span>{text}</span>
    </NavLink>
  );
};

export default NavbarItem;
