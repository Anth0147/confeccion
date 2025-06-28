import Link from 'next/link';
import { getStations } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export function InfographicSection() {
  const stations = getStations();

  return (
    <section id="process" className="py-16 md:py-24 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Industrial Process</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            From a simple thread to a finished garment, explore each stage of our manufacturing journey.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-border -translate-y-1/2"></div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {stations.map((station, index) => (
              <Link key={station.slug} href={`/station/${station.slug}`} className="group block z-10">
                <Card className="h-full text-center transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 border-2 border-transparent hover:border-primary">
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 rounded-full h-20 w-20 flex items-center justify-center mb-4 transition-colors group-hover:bg-primary">
                      <station.icon className="h-10 w-10 text-primary transition-colors group-hover:text-primary-foreground" />
                    </div>
                    <CardTitle className="font-headline text-lg">{station.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{station.shortDescription}</p>
                    <div className="flex items-center justify-center mt-4 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
