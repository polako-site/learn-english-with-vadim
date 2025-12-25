import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#credentials", label: "Credentials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className={`font-serif text-2xl font-bold transition-colors duration-300 ${
          isScrolled ? "text-primary" : "text-primary-foreground"
        }`}>
          English Teacher
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition-colors duration-300 font-medium ${
                isScrolled 
                  ? "text-foreground/80 hover:text-primary" 
                  : "text-primary-foreground/90 hover:text-primary-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button variant="hero" size="lg" asChild>
            <a href="#contact">Book a Lesson</a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 transition-colors duration-300 ${
            isScrolled ? "text-foreground" : "text-primary-foreground"
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md shadow-card py-6 px-6 animate-fade-in">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button variant="hero" size="lg" className="mt-4" asChild>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                Book a Lesson
              </a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
