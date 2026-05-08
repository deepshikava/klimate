import { useTheme } from "@/context/theme-provider";
import { Moon, Sun } from "lucide-react";
import { useMemo } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const isDarkMode = useMemo(() => theme === "dark", [theme]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-2 supports-[backdrop-filter]:bg-background/60 ">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to={"/"}>
          <img
            src={isDarkMode ? "/logo.png" : "/logo2.png"}
            alt="Klimate logo"
            className="h-14"
          />
        </Link>
        <div>
          {/* Search */}
          {/* Theme Toggle */}
          <div
            onClick={() => setTheme(isDarkMode ? "light" : "dark")}
            className={`cursor-pointer flex items-center transition-transform duration-500 ${isDarkMode ? "rotate-180" : "rotate-0"}`}
          >
            {isDarkMode ? (
              <Sun className="h-6 w-6 text-yellow-500 rotate-0 transition-all duration-300" />
            ) : (
              <Moon className="size-6 text-blue-500 rotate-0 transition-all duration-300" />
            )}
          </div>

          <div></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
