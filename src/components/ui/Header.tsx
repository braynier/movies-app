import Logo from "./Logo";
import ThemeToggle from "../ThemeToggle";
import NavLinks from "./NavLinks";

export default function Header() {
  return (
    <header className="mx-auto flex max-w-7xl justify-between px-3 py-10">
      <div className="flex items-center gap-3">
        <Logo />
        <ThemeToggle />
      </div>

      <NavLinks />
    </header>
  );
}
