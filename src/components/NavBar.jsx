import { useState } from "react";
import { Link } from "react-router-dom";

export function NavBar() {
    const [open, setOpen] = useState(false);
    const menuItems = ["Home", "Service", "Works", "News", "Contact"];
        const menuLinks = ["/", "/service", "/works", "/news", "/contact"];

    return (
        <nav>
        
            <div className="md:hidden flex  justify-center items-center mx-4 py-4">
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

            
            <ul className="hidden md:flex lg:flex items-center gap-4 mx-4 mr-200  mt-10  ">
                        {menuItems.map((item, idx) => (
                            <li
                                key={item}
                                className="cursor-pointer transition text-black hover:text-[#8AA4F2] text-[20px] flex items-center"
                            >
                                <Link to={menuLinks[idx]}>{item}</Link>
                                <svg className="ml-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M4 6l4 4 4-4" stroke="#222" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </li>
                        ))}
            </ul>

            {open && (
                <ul className="absolute left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-6 mt-4 z-50 md:hidden">
                            {menuItems.map((item, idx) => (
                                <li
                                    key={item}
                                    className="cursor-pointer transition text-black hover:text-[#8AA4F2] text-lg font-semibold flex items-center"
                                    onClick={() => setOpen(false)}
                                >
                                    <Link to={menuLinks[idx]}>{item}</Link>
                                    <svg className="ml-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M4 6l4 4 4-4" stroke="#222" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </li>
                            ))}
                </ul>
            )}
        </nav>
    );
}