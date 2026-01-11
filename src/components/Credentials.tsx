import { Award, Star, Building, BookOpen, ExternalLink } from "lucide-react";
import CertificateDialog from "./CertificateDialog";

const Credentials = () => {
  const credentials = [
    {
      icon: Award,
      title: "CELTA Certificate",
      institution: "Cambridge Assessment",
      description: "Internationally recognized teaching qualification",
      certificateImage: "/certificates/CELTA.png",
      certificateAlt: "CELTA Certificate from University of Cambridge"
    },
    {
      icon: BookOpen,
      title: "MA in Translation & Interpreting",
      institution: "University of Bath (with Distinction)",
      description: "One of the UK's top programs for linguistics",
      certificateImage: "/certificates/MA_Bath.png",
      certificateAlt: "Master of Arts degree from University of Bath"
    },
    {
      icon: Award,
      title: "BA in Teaching & Translating",
      institution: "With Distinction",
      description: "Comprehensive foundation in language education"
    },
    {
      icon: Star,
      title: "IELTS Academic 8.5",
      institution: "9.0 in Speaking & Listening",
      description: "Expert-level English proficiency",
      certificateImage: "/certificates/IELTS_result.jpg",
      certificateAlt: "IELTS Academic test result showing band score 8.5"
    },
    {
      icon: Building,
      title: "UN Placement",
      institution: "United Nations",
      description: "Professional translation experience at the highest level",
      certificateImage: "/certificates/UN_Placement.jpg",
      certificateAlt: "United Nations placement certificate"
    }
  ];

  const stats = [
    { value: "5.0", label: "Student Rating" },
    { value: "100%", label: "Response Rate" },
    { value: "100%", label: "Attendance" },
    { value: "17+", label: "Years Teaching" }
  ];

  return (
    <section id="credentials" className="py-24 bg-background">
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

        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-stretch">
          {/* Credentials List - 55% on desktop */}
          <div className="w-full lg:w-[55%] space-y-3 flex flex-col">
            {credentials.map((credential) => {
              const CardContent = (
                <div
                  className={`flex items-start gap-4 p-4 rounded-xl bg-card shadow-soft hover:shadow-card transition-all duration-300 group ${
                    credential.certificateImage ? "cursor-pointer" : ""
                  }`}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <credential.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-serif font-bold text-base text-foreground">
                        {credential.title}
                      </h3>
                      {credential.certificateImage && (
                        <ExternalLink className="w-3 h-3 text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </div>
                    <p className="text-secondary font-medium text-sm">
                      {credential.institution}
                    </p>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      {credential.description}
                    </p>
                    {credential.certificateImage && (
                      <p className="text-xs text-secondary/70 mt-1">
                        Click to view certificate
                      </p>
                    )}
                  </div>
                </div>
              );

              if (credential.certificateImage) {
                return (
                  <CertificateDialog
                    key={credential.title}
                    imageSrc={credential.certificateImage}
                    imageAlt={credential.certificateAlt}
                  >
                    {CardContent}
                  </CertificateDialog>
                );
              }

              return <div key={credential.title}>{CardContent}</div>;
            })}
          </div>

          {/* Photo & Stats - 45% on desktop */}
          <div className="w-full lg:w-[45%] mt-4 md:mt-4 lg:mt-0 flex flex-col justify-between">
            <div className="relative mb-8">
              <div className="absolute -inset-4 bg-gradient-to-bl from-secondary/20 to-primary/10 rounded-3xl blur-2xl" />
              <picture>
                <source
                  type="image/webp"
                  srcSet="/lovable-uploads/7e735657-aa84-40a3-9aa4-c9c6748a6c26.jpg 480w, /lovable-uploads/7e735657-aa84-40a3-9aa4-c9c6748a6c26.jpg 768w, /lovable-uploads/7e735657-aa84-40a3-9aa4-c9c6748a6c26.jpg 1200w"
                  sizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, 45vw"
                />
                <img
                  alt="Vadim receiving degree at University of Bath graduation ceremony"
                  className="relative w-full max-w-[600px] mx-auto rounded-lg shadow-md object-cover"
                  src="/lovable-uploads/7e735657-aa84-40a3-9aa4-c9c6748a6c26.jpg"
                  srcSet="/lovable-uploads/7e735657-aa84-40a3-9aa4-c9c6748a6c26.jpg 480w, /lovable-uploads/7e735657-aa84-40a3-9aa4-c9c6748a6c26.jpg 768w, /lovable-uploads/7e735657-aa84-40a3-9aa4-c9c6748a6c26.jpg 1200w"
                  sizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, 45vw"
                  loading="lazy"
                />
              </picture>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-xl bg-muted/50"
                >
                  <div className="text-2xl md:text-3xl font-serif font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credentials;
