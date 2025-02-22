import Logo from "../Logo";
import ThemeToggle from "../ThemeToggle";
import NavLinks from "./NavLinks";

export default function Header() {
  return (
    <header className="mb-6">
      <nav className="flex justify-between">
        <div className="flex gap-1">
          <Logo />
          <ThemeToggle />
        </div>

        <NavLinks />
      </nav>
    </header>
  );
}
