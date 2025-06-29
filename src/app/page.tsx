import { InfographicSection } from '@/components/homepage/infographic-section';
import { ContactSection } from '@/components/contact/contact-section';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <section id="hero" className="text-center py-16 md:py-24 w-full bg-card/50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary">
            Confección Estrellita
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Un showcase digital de nuestro proceso industrial textil, fusionando tradición con tecnología para una calidad superior.
          </p>
        </div>
      </section>

      <InfographicSection />

      <ContactSection />
    </div>
  );
}
