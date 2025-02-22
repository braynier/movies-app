import { NavLink } from "react-router-dom";

function NavLinks() {
  return (
    <div className="flex gap-1">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
    </div>
  );
}

export default NavLinks;
