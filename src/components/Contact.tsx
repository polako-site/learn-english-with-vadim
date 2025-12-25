import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, CreditCard, Building2, MapPin } from "lucide-react";
const Contact = () => {
  return <section id="contact" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-secondary font-medium uppercase tracking-wider text-sm">
              Get Started
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-4">
              Ready to Transform Your English?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Book your first lesson today and take the first step towards fluency. 
              I offer flexible scheduling and personalized learning plans.
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a href="https://www.italki.com/en/teacher/3570743" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-6 rounded-2xl bg-primary-foreground/10 hover:bg-primary-foreground/15 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle className="w-7 h-7 text-secondary" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl">Book on italki</h3>
                <p className="text-primary-foreground/70 text-sm">
                  Schedule lessons and manage bookings
                </p>
              </div>
            </a>

            <a href="mailto:vadim.panas@bath.edu" className="group flex items-center gap-4 p-6 rounded-2xl bg-primary-foreground/10 hover:bg-primary-foreground/15 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-7 h-7 text-accent" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl">Email Me</h3>
                <p className="text-primary-foreground/70 text-sm">
                  vadim.panas@bath.edu
                </p>
              </div>
            </a>
          </div>

          {/* Payment & Location Info */}
          <div className="grid sm:grid-cols-3 gap-6 p-8 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10">
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                <CreditCard className="w-5 h-5 text-secondary" />
                <span className="font-semibold">Payment Methods</span>
              </div>
              <p className="text-primary-foreground/70 text-sm">SEPA transfers, SWIFT, Bank transfers,  
Card payment, USDT payment options</p>
            </div>

            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                <MapPin className="w-5 h-5 text-secondary" />
                <span className="font-semibold">Location</span>
              </div>
              <p className="text-primary-foreground/70 text-sm">Online lessons worldwide  
 Bar, Rista Lekica 12, Montenegro     </p>
            </div>

            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                <Building2 className="w-5 h-5 text-secondary" />
                <span className="font-semibold">Business</span>
              </div>
              <p className="text-primary-foreground/70 text-sm">Polako Inc DOO  
PIB 03479218, Reg. No 51069422
              <br />
                PIB 03479218
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button variant="hero" size="xl" asChild>
              <a href="mailto:vadim.panas@bath.edu">
                Book Your First Lesson
              </a>
            </Button>
            <p className="text-primary-foreground/60 text-sm mt-4">
              Trial lessons available • Flexible scheduling
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;