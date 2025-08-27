import { useState } from "react";

export function NavBar() {
    const [open, setOpen] = useState(false);
    const menuItems = ["Home", "Service", "Works", "News", "Contact"];

    return (
        <nav>
        
            <div className="md:hidden flex items-center mx-4 py-4">
                <button
                    className="p-2 focus:outline-none border border-gray-400 rounded-xl px-3"
                    onClick={() => setOpen(!open)}
                    aria-label="Abrir menú"
                >
                    <span className="block w-6 h-1 bg-gray-800 mb-1 rounded"></span>
                    <span className="block w-6 h-1 bg-gray-800 mb-1 rounded"></span>
                    <span className="block w-6 h-1 bg-gray-800 rounded"></span>
                </button>
            </div>

            
            <ul className="hidden md:flex justify-center items-center gap-4 mx-4">
                    {menuItems.map((item) => (
                        <li
                            key={item}
                            className="cursor-pointer transition text-black hover:text-[#8AA4F2] text-lg font-semibold"
                        >
                            {item}
                        </li>
                    ))}
            </ul>

            {open && (
                <ul className="absolute left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-6 mt-4 z-50 md:hidden animate-fade-in" style={{ top: '4.5rem' }}>
                        {menuItems.map((item) => (
                            <li
                                key={item}
                                className="cursor-pointer transition text-black hover:text-[#8AA4F2] text-lg font-semibold"
                            >
                                {item}
                            </li>
                        ))}
                </ul>
            )}
        </nav>
    );
}