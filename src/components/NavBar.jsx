import { useState } from "react";
import { Link } from "react-router-dom";

export function NavBar() {
    const [open, setOpen] = useState(false);
    const menuItems = ["Home", "Services", "Details", "Features", "Projects", "Team", "Contact"];
    const menuLinks = ["/", "/services", "/details", "/features", "/projects", "/team", "/contact"];

    return (
        <nav className="relative">
            {/* Botón de menú móvil */}
            <button
                className="md:hidden p-2 focus:outline-none"
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                </svg>
            </button>

            {/* Menú de escritorio */}
            <ul className="hidden md:flex items-center space-x-8">
                {menuItems.map((item, idx) => (
                    <li key={item}>
                        <Link
                            to={menuLinks[idx]}
                            className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                        >
                            {item}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Menú móvil */}
            {open && (
                <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
                    <ul className="py-2">
                        {menuItems.map((item, idx) => (
                            <li key={item}>
                                <Link
                                    to={menuLinks[idx]}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                                    onClick={() => setOpen(false)}
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}