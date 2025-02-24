import Logo from "../Logo";
import ThemeToggle from "../ThemeToggle";
import NavLinks from "./NavLinks";

export default function Header() {
  return (
    <header className="py-10 px-3 max-w-7xl mx-auto flex justify-between">
      <div className="flex items-center gap-3">
        <Logo />
        <ThemeToggle />
      </div>

      <NavLinks />
    </header>
  );
}
