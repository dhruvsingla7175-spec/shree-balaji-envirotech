import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Package, Users, BookOpen, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", icon: Home, path: "/", scrollTo: "hero" },
  { label: "Products", icon: Package, path: "/", scrollTo: "products" },
  { label: "About", icon: Users, path: "/about" },
  { label: "Blog", icon: BookOpen, path: "/blog" },
  { label: "Contact", icon: MessageSquare, path: "/", scrollTo: "contact" },
];

const BottomNav = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("hero");

  useEffect(() => {
    if (location.pathname !== "/") return;

    const handleScroll = () => {
      const sections = ["hero", "products", "about", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveItem(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const handleClick = (item: typeof navItems[0]) => {
    if (item.scrollTo && location.pathname === "/") {
      document.getElementById(item.scrollTo)?.scrollIntoView({ behavior: "smooth" });
      setActiveItem(item.scrollTo);
    }
  };

  const isActive = (item: typeof navItems[0]) => {
    if (item.path !== "/" && location.pathname.startsWith(item.path)) return true;
    if (item.scrollTo && location.pathname === "/" && activeItem === item.scrollTo) return true;
    return false;
  };

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-lg border-t border-border shadow-elevated safe-area-inset-bottom">
      <div className="flex items-center justify-around py-2 px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item);

          if (item.scrollTo && location.pathname !== "/" && item.path === "/") {
            return (
              <Link
                key={item.label}
                to={`/${item.scrollTo === "hero" ? "" : `#${item.scrollTo}`}`}
                className={cn(
                  "flex flex-col items-center gap-1 py-2 px-3 rounded-lg transition-all duration-200 min-w-[60px]",
                  active
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon className={cn("w-5 h-5", active && "scale-110")} />
                <span className="text-[10px] font-medium">{item.label}</span>
              </Link>
            );
          }

          if (item.path !== "/" && !item.scrollTo) {
            return (
              <Link
                key={item.label}
                to={item.path}
                className={cn(
                  "flex flex-col items-center gap-1 py-2 px-3 rounded-lg transition-all duration-200 min-w-[60px]",
                  active
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon className={cn("w-5 h-5", active && "scale-110")} />
                <span className="text-[10px] font-medium">{item.label}</span>
              </Link>
            );
          }

          return (
            <button
              key={item.label}
              onClick={() => handleClick(item)}
              className={cn(
                "flex flex-col items-center gap-1 py-2 px-3 rounded-lg transition-all duration-200 min-w-[60px]",
                active
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon className={cn("w-5 h-5", active && "scale-110")} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
