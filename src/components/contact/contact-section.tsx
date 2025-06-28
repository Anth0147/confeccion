import { ContactForm } from './contact-form';
import { LocationMap } from './map';

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 w-full bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Get In Touch</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a question or a project in mind? We'd love to hear from you.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <ContactForm />
          </div>
          <div className="h-80 md:h-full w-full rounded-lg shadow-lg overflow-hidden">
            <LocationMap />
          </div>
        </div>
      </div>
    </section>
  );
}
