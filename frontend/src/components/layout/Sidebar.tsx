import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Upload,
  Activity,
  FileText,
  Info,
} from "lucide-react";

const items = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: Upload, label: "Upload", path: "/upload" },
  { icon: Activity, label: "Audit", path: "/audit" },
  { icon: FileText, label: "Report", path: "/report" },
  { icon: Info, label: "About", path: "/about" },
];

export default function Sidebar() {
  return (
    <aside className="glass w-72 min-h-screen p-5">
      <h2 className="text-2xl font-bold mb-10 gradient-text">
        QSIE
      </h2>

      <nav className="space-y-2">
        {items.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-xl transition ${
                isActive
                  ? "bg-primary text-white"
                  : "hover:bg-surface"
              }`
            }
          >
            <item.icon size={20} />
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}