import { getStationBySlug } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle2, SlidersHorizontal, BarChart2 } from 'lucide-react';

export default function StationPage({ params }: { params: { slug: string } }) {
  const station = getStationBySlug(params.slug);

  if (!station) {
    notFound();
  }

  return (
    <div className="bg-card/50">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="mb-8">
          <Button asChild variant="ghost">
            <Link href="/#process">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al Proceso
            </Link>
          </Button>
        </div>

        <header className="text-center mb-12">
          <div className="mx-auto bg-primary/10 rounded-full h-24 w-24 flex items-center justify-center mb-4">
            <station.icon className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
            {station.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            {station.description}
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><SlidersHorizontal className="text-primary"/> Detalles del Proceso</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 list-inside">
                  {station.processDetails.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><BarChart2 className="text-primary"/> Métricas Clave</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                {station.metrics.map((metric, index) => (
                    <div key={index} className="bg-background p-4 rounded-lg">
                        <p className="text-2xl font-bold text-primary">{metric.value}</p>
                        <p className="text-sm text-muted-foreground">{metric.name}</p>
                    </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Galería de la Estación</CardTitle>
              </CardHeader>
              <CardContent>
                <Carousel className="w-full">
                  <CarouselContent>
                    {station.galleryImages.map((src, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <Card className="overflow-hidden">
                            <CardContent className="flex aspect-video items-center justify-center p-0">
                              <Image
                                src={src}
                                alt={`Imagen de la galería de ${station.title} ${index + 1}`}
                                width={600}
                                height={400}
                                className="object-cover w-full h-full"
                                data-ai-hint="textile factory"
                              />
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
