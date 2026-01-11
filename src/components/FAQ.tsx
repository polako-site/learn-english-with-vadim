import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqItems = [
  {
    question: "What levels do you teach?",
    answer: "I specialise in higher levels, but most of my students are pre-intermediate to advanced. New students take a short placement check so lessons start at the right level."
  },
  {
    question: "How long is a typical lesson?",
    answer: "Lessons are usually 60 minutes. Please contact me for other options. Trial lessons normally last 30–40 minutes."
  },
  {
    question: "How do I book a lesson?",
    answer: "Book via the \"Book a lesson\" page or the embedded calendar on the site. After booking you'll receive a confirmation email with the lesson link and payment details."
  },
  {
    question: "What payment methods do you accept?",
    answer: "I accept credit/debit cards, SEPA, other bank transfers (in EUR or your currency as agreed), and USDT. Payment is taken at or right after booking according to the selected lesson category."
  },
  {
    question: "What is your cancellation and rescheduling policy?",
    answer: "You can cancel or reschedule free of charge up to 24 hours before the lesson. Cancellations under 24 hours may be charged. Exceptions are considered for emergencies."
  },
  {
    question: "Are materials included?",
    answer: "Yes — I provide lesson materials and homework (where applicable). If you prefer a specific textbook, please contact me."
  },
  {
    question: "Do you offer trial lessons or demos?",
    answer: "Yes — a short trial lesson is available so you can meet the teacher, discuss goals and try the format before committing."
  },
  {
    question: "Do you offer group classes or only one-to-one lessons?",
    answer: "At the moment I only offer one-to-one personalised lessons. Group lessons for mini-groups of 3-4 learners may be introduced later this year — please contact me to join the waiting list!"
  },
  {
    question: "Can you help me prepare for exams (e.g. IELTS, Cambridge)?",
    answer: "Yes — I provide targeted exam preparation courses (IELTS - both academic and general modules, Cambridge exams for B1, B2, C1 and C2 levels, CELPIP) with practice tests, feedback and exam techniques."
  },
  {
    question: "What is your teaching approach?",
    answer: "Lessons are communicative and student-centered: we combine speaking practice, structured grammar, vocabulary (with spaced repetition) and regular testing to track progress."
  },
  {
    question: "Do you teach children?",
    answer: "No, as a rule I do not work with children unless they are mature and motivated enough to study without the parents' supervision. In my experience, online lessons work best for young students of 12 years old or older."
  },
  {
    question: "Which platform do you use for online lessons?",
    answer: "Lessons are held on Google Meet (default). Jitsi, Discord or Microsoft Teams are also available on request. Links are sent after booking. I do not provide classes via WhatsApp or Telegram due to low resolution and poor audio quality."
  },
  {
    question: "What technical setup do I need?",
    answer: "Stable internet (recommended ≥5 Mbps), headphones with a microphone, and an up-to-date browser. A smartphone or a tablet can work, but a laptop/desktop is recommended."
  },
  {
    question: "Which language do you use during lessons?",
    answer: "Lessons are primarily in English to maximize immersion. Explanations in another language (e.g., Russian) are available on request for lower level students."
  },
  {
    question: "How do I contact support or ask other questions?",
    answer: "Feel free to email me at vadim.panas@bath.edu. Response time is typically within 24 hours."
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary font-medium uppercase tracking-wider text-sm">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Find answers to common questions about lessons, booking, payments, and more.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-xl px-6 shadow-soft border-none"
              >
                <AccordionTrigger className="text-left font-serif font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>{item.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 pl-8">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
