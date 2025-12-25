import { Award, Star, Building, BookOpen } from "lucide-react";
import ceremonyPhoto from "@/assets/graduation-ceremony.jpg";
const Credentials = () => {
  const credentials = [{
    icon: Award,
    title: "CELTA Certificate",
    institution: "Cambridge Assessment",
    description: "Internationally recognized teaching qualification"
  }, {
    icon: BookOpen,
    title: "MA in Translation & Interpreting",
    institution: "University of Bath (with Distinction)",
    description: "One of the UK's top programs for linguistics"
  }, {
    icon: Award,
    title: "BA in Teaching & Translating",
    institution: "With Distinction",
    description: "Comprehensive foundation in language education"
  }, {
    icon: Star,
    title: "IELTS Academic 8.5",
    institution: "9.0 in Speaking & Listening",
    description: "Expert-level English proficiency"
  }, {
    icon: Building,
    title: "UN Placement",
    institution: "United Nations",
    description: "Professional translation experience at the highest level"
  }];
  const stats = [{
    value: "5.0",
    label: "Student Rating"
  }, {
    value: "100%",
    label: "Response Rate"
  }, {
    value: "100%",
    label: "Attendance"
  }, {
    value: "17+",
    label: "Years Teaching"
  }];
  return <section id="credentials" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary font-medium uppercase tracking-wider text-sm">
            Credentials
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
            Qualifications You Can Trust
          </h2>
          <p className="text-muted-foreground">
            My academic background and professional certifications ensure you receive 
            the highest quality language instruction.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Credentials List */}
          <div className="space-y-4">
            {credentials.map(credential => <div key={credential.title} className="flex items-start gap-4 p-5 rounded-xl bg-card shadow-soft hover:shadow-card transition-all duration-300 group py-[30px]">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <credential.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-foreground">
                    {credential.title}
                  </h3>
                  <p className="text-secondary font-medium text-sm">{credential.institution}</p>
                  <p className="text-muted-foreground text-sm mt-1">{credential.description}</p>
                </div>
              </div>)}
          </div>

          {/* Photo & Stats */}
          <div>
            <div className="relative mb-8">
              <div className="absolute -inset-4 bg-gradient-to-bl from-secondary/20 to-primary/10 rounded-3xl blur-2xl" />
              <img alt="Vadim receiving degree at University of Bath graduation ceremony" className="relative w-full rounded-2xl shadow-elevated object-scale-down" src="/lovable-uploads/7e735657-aa84-40a3-9aa4-c9c6748a6c26.jpg" />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map(stat => <div key={stat.label} className="text-center p-4 rounded-xl bg-muted/50">
                  <div className="text-2xl md:text-3xl font-serif font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Credentials;