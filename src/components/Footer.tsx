

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-muted/50 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-serif text-xl font-bold text-primary">Polako Inc</div>
          
          <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">
              About
            </a>
            <a href="#services" className="hover:text-foreground transition-colors">
              Class options
            </a>
            <a href="#credentials" className="hover:text-foreground transition-colors">
              Credentials
            </a>
            <a href="#testimonials" className="hover:text-foreground transition-colors">
              Testimonials
            </a>
            <a href="#booking" className="hover:text-foreground transition-colors">
              Book
            </a>
            <a href="#faq" className="hover:text-foreground transition-colors">
              FAQ
            </a>
            <a href="#contact" className="hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>

          <div className="text-sm text-muted-foreground text-center md:text-right">
            <div className="mb-1">
              © {currentYear} Polako Inc.
            </div>
            <div className="text-xs">
              <a href="mailto:vadim.panas@bath.edu" className="hover:text-foreground transition-colors">
                vadim.panas@bath.edu
              </a>
              {" · "}Bar, Montenegro · PIB 03479218
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="mt-6 pt-4 border-t border-border/50 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
          <a 
            href="/documents/PUBLIC_OFFER.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Public Offer
          </a>
          <span className="text-border">·</span>
          <a 
            href="/documents/Privacy_policy.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Privacy Policy
          </a>
          <span className="text-border">·</span>
          <a 
            href="/documents/REFUND_POLICY.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Refund Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
