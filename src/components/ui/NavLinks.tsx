import { NavLink } from "react-router-dom";

function NavLinks() {
  return (
    <nav className="flex gap-5">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `tracking-tighter text-neutral-700/75 uppercase hover:underline dark:text-neutral-300 ${isActive ? "underline" : ""}`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/favorites"
        className={({ isActive }) =>
          `tracking-tighter text-neutral-700/75 uppercase hover:underline dark:text-neutral-300 ${isActive ? "underline" : ""}`
        }
      >
        Favorites
      </NavLink>
    </nav>
  );
}

export default NavLinks;
