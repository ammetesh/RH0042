import { Bell, Menu, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="glass h-16 flex items-center justify-between px-6 sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <Menu className="cursor-pointer" />
        <h1 className="font-bold text-xl gradient-text">
          QSIE
        </h1>
      </div>

      <div className="hidden md:flex items-center gap-2 bg-surface rounded-xl px-3 py-2">
        <Search size={18} />
        <input
          placeholder="Search..."
          className="bg-transparent outline-none"
        />
      </div>

      <Bell className="cursor-pointer" />
    </header>
  );
}