import { Button } from "@/components/ui/button";
import { Award, BookOpen, Globe, Star } from "lucide-react";
import heroPhoto from "@/assets/hero-photo.jpg";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-primary-foreground order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full mb-6 animate-fade-in">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-medium">17+ Years of Excellence</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6 animate-fade-in-up">
              Master English with a{" "}
              <span className="text-gradient">Cambridge-Certified</span>{" "}
              Professional
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed animate-fade-in-up" style={{
            animationDelay: "0.2s"
          }}>
              Personalized lessons for exam preparation, business English, and fluent conversation. 
              CELTA certified with an MA from the University of Bath, UK.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10 animate-fade-in-up" style={{
            animationDelay: "0.3s"
          }}>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-serif font-bold text-secondary">15,000+</div>
                <div className="text-sm text-primary-foreground/70">Lessons Taught</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-serif font-bold text-secondary">800+</div>
                <div className="text-sm text-primary-foreground/70">Happy Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-serif font-bold text-secondary">8.5</div>
                <div className="text-sm text-primary-foreground/70">IELTS Score</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{
            animationDelay: "0.4s"
          }}>
              <Button variant="hero" size="xl" asChild>
                <a href="#booking">Book a Trial</a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#services">View Class Options</a>
              </Button>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 lg:order-2 flex justify-center animate-fade-in" style={{
          animationDelay: "0.3s"
        }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-secondary/30 to-accent/20 rounded-3xl blur-2xl" />
              <img src={heroPhoto} alt="Vadim - English Teacher" className="relative w-72 md:w-80 lg:w-96 h-auto rounded-2xl shadow-elevated object-cover" />
              
              {/* Floating badges */}
              <div className="absolute -left-4 top-8 bg-background text-foreground px-4 py-3 rounded-xl shadow-card flex items-center gap-2 animate-float">
                <Award className="w-5 h-5 text-secondary" />
                <span className="text-sm font-medium">CELTA Certified</span>
              </div>
              
              <div className="absolute -right-4 top-1/4 bg-background text-foreground px-4 py-3 rounded-xl shadow-card flex items-center gap-2 animate-float" style={{
              animationDelay: "1.5s"
            }}>
                <Globe className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Speaks Russian </span>
              </div>

              <div className="absolute -right-4 bottom-1/4 bg-background text-foreground px-4 py-3 rounded-xl shadow-card flex items-center gap-2 animate-float" style={{
              animationDelay: "3s"
            }}>
                <Star className="w-5 h-5 text-secondary" />
                <span className="text-sm font-medium">IELTS 8.5</span>
              </div>

              <div className="absolute -bottom-4 left-1/4 bg-background text-foreground px-4 py-3 rounded-xl shadow-card flex items-center gap-2 animate-float" style={{
              animationDelay: "4.5s"
            }}>
                <BookOpen className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">MA with Distinction</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground/60 rounded-full" />
        </div>
      </div>
    </section>;
};
export default Hero;