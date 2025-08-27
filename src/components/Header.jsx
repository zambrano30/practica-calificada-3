import { NavBar } from "./NavBar";

export function Header() {
  return (
    <header className="flex justify-between h-20 w-full">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-40 h-20 object-contain  mx-8 p-2"
        />
      <NavBar />
      <section className="hidden">
        <button>Log in</button>
        <button>Sign in</button>
      </section>
    </header>
  );
}
