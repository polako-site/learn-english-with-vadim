import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Briefcase, 
  MessageCircle, 
  Target, 
  GraduationCap,
  Globe,
  Check
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Target,
      title: "Exam Preparation",
      description: "IELTS, Cambridge FCE/CAE/CPE, and other international exams",
      price: "€25",
      priceNote: "per 60 min",
      features: [
        "Personalized study plans",
        "Practice tests & feedback",
        "Speaking & writing focus",
        "Score improvement strategies",
      ],
      featured: true,
    },
    {
      icon: MessageCircle,
      title: "Conversational Classes",
      description: "Build fluency in English or Russian through engaging discussions",
      price: "€16.50",
      priceNote: "/ 60 min",
      features: [
        "Natural conversation practice",
        "Pronunciation refinement",
        "Vocabulary expansion",
        "Cultural insights",
      ],
      featured: false,
    },
    {
      icon: Briefcase,
      title: "Business English",
      description: "Professional communication for the global workplace",
      price: "€21",
      priceNote: "/ 60 min",
      features: [
        "Job interview preparation",
        "Email & presentation skills",
        "Meeting vocabulary",
        "Industry-specific terms",
      ],
      featured: false,
    },
    {
      icon: BookOpen,
      title: "General English",
      description: "Comprehensive language skills for everyday life",
      price: "€21",
      priceNote: "/ 60 min",
      features: [
        "Grammar fundamentals",
        "Reading & listening",
        "Practical vocabulary",
        "British vs American English",
      ],
      featured: false,
    },
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary font-medium uppercase tracking-wider text-sm">Services</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
            Tailored Lessons for Your Goals
          </h2>
          <p className="text-muted-foreground">
            From exam preparation to casual conversation, find the perfect program 
            to achieve your language learning objectives.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className={`relative rounded-2xl p-6 transition-all duration-300 hover:shadow-elevated ${
                service.featured
                  ? "bg-primary text-primary-foreground shadow-card"
                  : "bg-card text-card-foreground shadow-soft hover:shadow-card"
              }`}
            >
              {service.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  service.featured ? "bg-secondary/20" : "bg-secondary/10"
                }`}
              >
                <service.icon
                  className={`w-6 h-6 ${service.featured ? "text-secondary" : "text-secondary"}`}
                />
              </div>

              <h3 className="text-xl font-serif font-bold mb-2">{service.title}</h3>
              <p
                className={`text-sm mb-4 ${
                  service.featured ? "text-primary-foreground/80" : "text-muted-foreground"
                }`}
              >
                {service.description}
              </p>

              <div className="mb-6">
                <span className="text-3xl font-serif font-bold">{service.price}</span>
                <span
                  className={`text-sm ml-1 ${
                    service.featured ? "text-primary-foreground/70" : "text-muted-foreground"
                  }`}
                >
                  {service.priceNote}
                </span>
              </div>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <Check
                      className={`w-4 h-4 flex-shrink-0 ${
                        service.featured ? "text-secondary" : "text-accent"
                      }`}
                    />
                    <span className={service.featured ? "text-primary-foreground/90" : ""}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={service.featured ? "hero" : "outline"}
                className="w-full"
                asChild
              >
                <a href="#contact">Get Started</a>
              </Button>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-card rounded-full px-6 py-3 shadow-soft">
            <Globe className="w-5 h-5 text-accent" />
            <span className="text-foreground font-medium">
              Languages I Speak:{" "}
              <span className="text-muted-foreground">
                English, Russian (Native), French, Serbian
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
