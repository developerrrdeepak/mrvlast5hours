import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Calculator, ShieldCheck, GraduationCap, FileText, Users, Sparkles } from "lucide-react";

const items = [
  { label: "Features", to: "/#features", icon: Sparkles },
  { label: "Calculator", to: "/tools", icon: Calculator },
  { label: "Transparency", to: "/#transparency", icon: ShieldCheck },
  { label: "Education", to: "/resources", icon: GraduationCap },
  { label: "Reports", to: "/case-studies", icon: FileText },
  { label: "Collaborate", to: "/about", icon: Users },
];

export default function Sidebar({ open = true }: { open?: boolean }) {
  const location = useLocation();
  return (
    <aside className={cn(
      "hidden md:flex md:flex-col md:fixed md:inset-y-0 md:w-64 border-r border-border z-40",
      "backdrop-blur-md supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/30 bg-white/60 dark:bg-black/30"
    )}>
      <div className="px-4 py-5">
        <nav className="space-y-1">
          {items.map((it) => (
            <Link
              key={it.label}
              to={it.to}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-semibold transition-colors",
                "text-slate-700 hover:text-primary hover:bg-primary/10 dark:text-white/80",
                location.hash === it.to.replace("/#", "#") || location.pathname + location.hash === it.to ? "text-primary bg-primary/10" : ""
              )}
            >
              <it.icon className="h-4 w-4" />
              <span>{it.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
