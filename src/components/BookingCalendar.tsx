import { useEffect } from "react";

const BookingCalendar = () => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <section id="booking" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-secondary font-medium uppercase tracking-wider text-sm">
            Book a Lesson
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-4">
            Schedule Your Lesson
          </h2>
          <p className="text-muted-foreground">
            Choose a convenient time slot and book your lesson directly. 
            You'll receive a confirmation email with all the details.
          </p>
        </div>

        {/* Calendly Widget */}
        <div className="max-w-4xl mx-auto bg-background rounded-2xl shadow-soft overflow-hidden">
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/polakoenglish/englishclass"
            style={{ minWidth: "320px", height: "700px" }}
          />
        </div>
      </div>
    </section>
  );
};

export default BookingCalendar;
