import { Button } from "./ui/button"
import { Link } from "react-router-dom"
import { NavBar } from "./NavBar"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="h-8" />
          <span className="text-xl font-bold text-gray-800">ThemeWagon</span>
        </Link>
        
        <div className="flex items-center gap-8">
          <NavBar />
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="sm" className="text-gray-700 hover:text-blue-600">
              Sign In
            </Button>
            <Button size="sm" className="bg-blue-600 text-white hover:bg-blue-700">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
