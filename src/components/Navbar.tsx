import { Link, useLocation } from "react-router-dom";
import { Code2 } from "lucide-react";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <Code2 className="w-6 h-6 text-primary transition-transform group-hover:scale-110" />
            <span className="text-xl font-bold text-foreground">Portfolio</span>
          </Link>

          <div className="flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              to="/experience"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/experience") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Experiência
            </Link>
            <Link
              to="/education"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/education") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Educação
            </Link>
            <Link
              to="/projects"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/projects") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Projetos
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
