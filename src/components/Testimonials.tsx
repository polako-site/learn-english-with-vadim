import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Stan",
    lessons: "1 English lesson",
    quote: "Vadim is the best teacher. His English is really good.",
    date: "Apr 8, 2024",
  },
  {
    name: "Sash",
    lessons: "130 English lessons",
    quote:
      "I gotta say, my confidence in speaking English has really gone up since I started taking lessons with this tutor. I feel like I can communicate way better than before. If you're looking for someone to help you improve your English, I highly recommend this tutor!",
    date: "Apr 26, 2023",
  },
  {
    name: "Vadim",
    lessons: "6 English lessons",
    quote:
      "I recently had the pleasure of working with Vadim who I would highly recommend to anyone looking to improve their language skills. Vadim was extremely reliable, always showing up on time and consistently providing valuable feedback to help me improve. One of the things I appreciated most about Vadim was the quality of materials used during our sessions. The materials were well-organized and tailored to my specific needs and interests, making our lessons engaging and productive. Overall, I found Vadim to be knowledgeable, patient, and dedicated to helping me reach my language goals.",
    date: "Mar 3, 2023",
  },
  {
    name: "Kate",
    lessons: "105 English lessons",
    quote:
      "Today I had the lesson for my special needs, and it was amazing. Vadim had prepared a lot of material, and we practiced the whole lesson. It was very helpful. Thank you very much.",
    date: "Feb 25, 2023",
  },
  {
    name: "Olga",
    lessons: "11 English lessons",
    quote: "Vadim is an amazing professional!",
    date: "Dec 3, 2022",
  },
  {
    name: "Olya",
    lessons: "64 English lessons",
    quote: "Excellent as usual!",
    date: "Mar 2, 2021",
  },
  {
    name: "Konstantin K.",
    lessons: "61 Russian lessons",
    quote: "Great teacher! It was a pleasure to talk!",
    date: "Feb 16, 2021",
  },
  {
    name: "Alex",
    lessons: "66 English lessons",
    quote:
      "Many thanks for our lessons. All of them were very good and interesting. I hope we'll continue our lessons in a couple of months or so.",
    date: "Sep 17, 2020",
  },
  {
    name: "Valery",
    lessons: "21 English lessons",
    quote:
      "Vadim is a wonderful teacher! Each lesson is structured and interesting. In addition, Vadim is a very nice person",
    date: "Jul 8, 2020",
  },
  {
    name: "Peter",
    lessons: "76 English lessons",
    quote: "Thank you for the lesson. It was funny and interesting.",
    date: "May 31, 2020",
  },
  {
    name: "Katia",
    lessons: "2 English lessons",
    quote: "Vadim is a great person to talk to. He always gives constructive feedback. Thank you!",
    date: "Apr 12, 2020",
  },
  {
    name: "Alexey",
    lessons: "79 English lessons",
    quote: "Vadim is very positive. Ready to support and prompt. The lessons are held in a friendly and positive atmosphere.",
    date: "Jan 8, 2019",
  },
  {
    name: "Alex",
    lessons: "11 English lessons",
    quote: "Perfect as expected",
    date: "Sep 3, 2018",
  },
  {
    name: "Sara",
    lessons: "14 English lessons",
    quote: "It was a great session. Vadim is a very qualified tutor. He does not skip the mistakes that I made and provides much useful exercise. Thank you.",
    date: "Jun 21, 2018",
  },
  {
    name: "Alexander",
    lessons: "10 English lessons",
    quote: "Vadim is a professional teacher who can help to improve your level of English. Highly recommended for upper-intermediate students!",
    date: "Apr 28, 2018",
  },
  {
    name: "Svetlana",
    lessons: "42 English lessons",
    quote: "Thank you, Vadim. You are the best English tutor that I have ever met.",
    date: "Aug 9, 2018",
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
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-primary font-semibold text-sm">
                            {testimonial.name.charAt(0)}
                          </span>
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
                      <p className="text-muted-foreground/60 text-xs mt-2">
                        {testimonial.date}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
