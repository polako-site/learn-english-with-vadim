import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-muted/50 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-serif text-xl font-bold text-primary">Vadim</div>
          
          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">
              About
            </a>
            <a href="#services" className="hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#credentials" className="hover:text-foreground transition-colors">
              Credentials
            </a>
            <a href="#contact" className="hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>

          <div className="text-sm text-muted-foreground flex items-center gap-1">
            © {currentYear} Vadim. Made with <Heart className="w-4 h-4 text-secondary fill-current" /> in Montenegro
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
