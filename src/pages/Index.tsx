import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Credentials from "@/components/Credentials";
import Testimonials from "@/components/Testimonials";
import BookingCalendar from "@/components/BookingCalendar";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Expert English & Russian Tuition | CELTA Certified | 17+ Years Experience</title>
        <meta
          name="description"
          content="Professional English and Russian lessons with a CELTA-certified teacher. IELTS, Cambridge exams, business English, and conversation classes. MA from University of Bath. Book your trial lesson today."
        />
        <meta
          name="keywords"
          content="English teacher, Russian teacher, IELTS preparation, Cambridge exams, business English, online lessons, CELTA certified, Montenegro"
        />
        <link rel="canonical" href="https://vadim-teacher.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Expert English & Russian Tuition | Vadim Panas" />
        <meta
          property="og:description"
          content="Master English with a Cambridge-certified professional. 17+ years of experience, IELTS 8.5, MA from University of Bath."
        />
        <meta property="og:type" content="website" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Vadim",
            jobTitle: "English & Russian Teacher",
            description: "CELTA-certified language teacher with 17+ years of experience",
            knowsLanguage: ["English", "Russian", "French", "Serbian"],
            hasCredential: [
              {
                "@type": "EducationalOccupationalCredential",
                name: "CELTA",
                credentialCategory: "Teaching Certificate",
              },
              {
                "@type": "EducationalOccupationalCredential",
                name: "MA in Translation & Interpreting",
                educationalLevel: "Master's Degree",
              },
            ],
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Credentials />
          <Testimonials />
          <BookingCalendar />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <CookieConsent />
      </div>
    </>
  );
};

export default Index;
