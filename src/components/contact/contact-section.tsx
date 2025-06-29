import { LocationMap } from './map';

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 w-full bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Nuestra Ubicación</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Encuéntranos en nuestra ubicación central en Trujillo.
          </p>
        </div>
        <div className="h-96 w-full max-w-5xl mx-auto rounded-lg shadow-lg overflow-hidden">
          <LocationMap />
        </div>
      </div>
    </section>
  );
}
