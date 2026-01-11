import { Quote, User } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Svetlana",
    lessons: "42 English lessons",
    quote: "You are the best English tutor that I have ever met.",
  },
  {
    name: "Sash",
    lessons: "130 English lessons",
    quote:
      "My confidence in speaking English has really gone up since I started taking lessons with this tutor. I feel like I can communicate way better than before.",
  },
  {
    name: "Vadim",
    lessons: "6 English lessons",
    quote:
      "I found Vadim to be knowledgeable, patient, and dedicated to helping me reach my language goals.",
  },
  {
    name: "Kate",
    lessons: "105 English lessons",
    quote:
      "Vadim is a great teacher. During the lessons, he always gives good examples that can help me to understand better grammar rules.",
  },
  {
    name: "Olga",
    lessons: "11 English lessons",
    quote: "Vadim is an amazing professional",
  },
  {
    name: "Olya",
    lessons: "64 English lessons",
    quote: "Excellent as usual",
  },
  {
    name: "Konstantin",
    lessons: "61 English lessons",
    quote: "Great teacher!",
  },
  {
    name: "Alex",
    lessons: "66 English lessons",
    quote:
      "Many thanks for our lessons. All of them were very good and interesting.",
  },
  {
    name: "Valery",
    lessons: "21 English lessons",
    quote:
      "Vadim is a wonderful teacher! Each lesson is structured and interesting.",
  },
  {
    name: "Katia",
    lessons: "2 English lessons",
    quote: "Vadim is a great person to talk to. He always gives constructive feedback.",
  },
  {
    name: "Alexey",
    lessons: "79 English lessons",
    quote: "The lessons are held in a friendly and positive atmosphere.",
  },
  {
    name: "Sara",
    lessons: "14 English lessons",
    quote: "Vadim is a very qualified tutor. He does not skip the mistakes that I made and provides much useful exercise.",
  },
  {
    name: "Alexander",
    lessons: "10 English lessons",
    quote: "Highly recommended for upper-intermediate students!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-secondary font-medium uppercase tracking-wider text-sm">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
            What My Students Say
          </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
            Real feedback from students who have transformed their English skills.{" "}
            <a 
              href="https://www.italki.com/en/teacher/3570743" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary hover:underline"
            >
              View all testimonials on italki
            </a>
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="h-full p-6 rounded-2xl bg-background border border-border shadow-soft hover:shadow-card transition-shadow duration-300">
                    {/* Quote Icon */}
                    <Quote className="w-8 h-8 text-primary/20 mb-4" />

                    {/* Quote Text */}
                    <p className="text-foreground/80 text-sm leading-relaxed mb-6 line-clamp-6">
                      "{testimonial.quote}"
                    </p>

                    {/* Author Info */}
                    <div className="mt-auto pt-4 border-t border-border">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border border-primary/10">
                          <User className="w-5 h-5 text-primary/60" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground text-sm">
                            {testimonial.name}
                          </p>
                          <p className="text-muted-foreground text-xs">
                            {testimonial.lessons}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-muted-foreground/70 text-xs mt-12 max-w-3xl mx-auto leading-relaxed">
          Shortened and anonymised testimonials are published on the basis of Polako Inc's legitimate interest in demonstrating service quality, for informational purposes only. If you would like your testimonial removed, please contact:{" "}
          <a 
            href="mailto:vadim.panas@bath.edu" 
            className="text-secondary hover:underline"
          >
            vadim.panas@bath.edu
          </a>
        </p>
      </div>
    </section>
  );
};

export default Testimonials;
