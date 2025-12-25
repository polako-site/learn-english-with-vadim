import { GraduationCap, MapPin, Mic, Heart } from "lucide-react";
import graduationPhoto from "@/assets/graduation-diploma.jpg";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description: "BA and MA with distinction from top universities, including the University of Bath, UK",
    },
    {
      icon: MapPin,
      title: "Based in Montenegro",
      description: "Teaching students worldwide from the beautiful Adriatic coast",
    },
    {
      icon: Mic,
      title: "Podcast Host",
      description: "Creator of educational podcasts in English",
    },
    {
      icon: Heart,
      title: "Passionate Educator",
      description: "17+ years dedicated to helping students achieve their language goals",
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-secondary/20 to-accent/10 rounded-3xl blur-2xl" />
            <img
              src={graduationPhoto}
              alt="Vadim at University of Bath graduation"
              className="relative w-full max-w-lg mx-auto rounded-2xl shadow-elevated object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <span className="text-secondary font-medium uppercase tracking-wider text-sm">About Me</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-6">
              Your Partner in Language Mastery
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                I'm Vadim, a CELTA-certified English and Russian tutor with over 17 years of teaching experience. 
                My journey includes a Master's degree with distinction from the prestigious University of Bath, UK, 
                and a placement at the United Nations as a practising translator.
              </p>
              <p>
                Whether you're preparing for Cambridge Exams (FCE, CAE, CPE), IELTS (I scored 8.5 with 9.0 
                in Speaking and Listening!), mastering Business English, or simply wanting to speak more 
                confidently, I tailor every lesson to your unique goals.
              </p>
              <p>
                My teaching philosophy combines academic rigor with a relaxed, communicative approach. 
                I believe that learning should be engaging—so let's use your interests, whether it's 
                gaming, TV shows, or travel, to make your English journey memorable!
              </p>
            </div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 p-4 rounded-xl bg-card shadow-soft hover:shadow-card transition-shadow duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
