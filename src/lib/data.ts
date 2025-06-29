import { CuttingIcon } from '@/components/icons/cutting-icon';
import { DesignIcon } from '@/components/icons/design-icon';
import { FinishingIcon } from '@/components/icons/finishing-icon';
import { PackagingIcon } from '@/components/icons/packaging-icon';
import { SewingIcon } from '@/components/icons/sewing-icon';

export interface Station {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  processDetails: string[];
  metrics: { name: string; value: string }[];
  proposedImprovements: string;
  galleryImages: string[];
}

const stations: Station[] = [
  {
    slug: 'design-and-pattern-making',
    title: 'Diseño y Patronaje',
    shortDescription: 'Conceptualizando ideas y creando planos precisos para la producción.',
    description: 'Esta fase inicial es donde la creatividad se encuentra con la precisión. Nuestros diseñadores colaboran para crear estilos innovadores, que luego se traducen en patrones detallados. Estos patrones sirven como los planos esenciales para cada prenda, asegurando consistencia y calidad desde el primer paso.',
    icon: DesignIcon,
    processDetails: [
      "Investigación de mercado y análisis de tendencias.",
      "Bocetos y creación de diseños digitales usando software CAD.",
      "Selección y abastecimiento de materiales.",
      "Creación de patrones iniciales en papel o digitales.",
      "Creación de prototipos y ajuste de muestras."
    ],
    metrics: [
      { name: "Tiempo para el Primer Patrón", value: "24-48 horas" },
      { name: "Precisión del Patrón", value: "99.5%" },
      { name: "Diseños por Trimestre", value: "50+" },
    ],
    proposedImprovements: `// Propuesta de mejora basada en software
function integrate3DPrototyping(pattern) {
  const digitalPattern = convertTo3D(pattern);
  const virtualFit = simulateGarmentOnAvatar(digitalPattern);
  if(virtualFit.issues.length > 0) {
    return refinePattern(pattern, virtualFit.feedback);
  }
  return digitalPattern;
}
// Esto reduce el desperdicio de material de muestras físicas hasta en un 70%.`,
    galleryImages: [
      'https://placehold.co/600x400',
      'https://placehold.co/600x400',
      'https://placehold.co/600x400',
    ],
  },
  {
    slug: 'cutting',
    title: 'Corte',
    shortDescription: 'Transformando tela en piezas cortadas con precisión para el ensamblaje.',
    description: 'Utilizando maquinaria automatizada avanzada, grandes rollos de tela se extienden y cortan cuidadosamente según los patrones creados en la fase de diseño. La precisión es clave aquí para minimizar el desperdicio y asegurar que cada componente de la prenda encaje perfectamente.',
    icon: CuttingIcon,
    processDetails: [
      "Inspección de la tela en busca de defectos.",
      "Extendido de múltiples capas de tela.",
      "Corte CNC automatizado basado en patrones digitales.",
      "Agrupación de piezas cortadas para el departamento de costura.",
      "Clasificación y reciclaje de material de desecho."
    ],
    metrics: [
      { name: "Utilización de Tela", value: "92%" },
      { name: "Velocidad de Corte", value: "500 piezas/hora" },
      { name: "Precisión de Corte", value: "±1mm" },
    ],
    proposedImprovements: `// Propuesta de mejora operativa
Podemos optimizar los diseños de tela utilizando un algoritmo de anidamiento impulsado por IA.
Esto podría aumentar la utilización de la tela del 92% al 95%, ahorrando miles en costos de material anualmente. El algoritmo analizaría todas las piezas cortadas de un pedido y encontraría la disposición más eficiente en el extendido de la tela.`,
    galleryImages: [
      'https://placehold.co/600x400',
      'https://placehold.co/600x400',
      'https://placehold.co/600x400',
    ],
  },
  {
    slug: 'sewing',
    title: 'Costura',
    shortDescription: 'Ensamblando piezas de tela cortadas para crear prendas terminadas.',
    description: 'Operarios calificados utilizan una variedad de máquinas de coser industriales para ensamblar las piezas cortadas. Aquí es donde la prenda toma su forma final. Nuestras líneas de producción están organizadas para una máxima eficiencia, con cada operario especializándose en una parte específica del proceso de ensamblaje.',
    icon: SewingIcon,
    processDetails: [
      "Ensamblaje de componentes en una línea de producción.",
      "Uso de máquinas especializadas (overlock, pespunte, etc.).",
      "Costura de uniones, colocación de cuellos, mangas y bolsillos.",
      "Controles de calidad en línea en varios puntos.",
      "Corte de hilos y planchado inicial."
    ],
    metrics: [
      { name: "Prendas por Hora", value: "120" },
      { name: "Tasa de Defectos", value: "< 1.5%" },
      { name: "Eficiencia de Línea", value: "85%" },
    ],
    proposedImprovements: `// Propuesta de mejora tecnológica
La implementación de rastreadores RFID en cada paquete de prendas puede proporcionar un monitoreo de la producción en tiempo real. Esto permitiría a los supervisores identificar cuellos de botella en la línea de costura al instante y reasignar recursos para mantener un flujo óptimo, aumentando potencialmente la eficiencia de la línea a más del 90%.`,
    galleryImages: [
      'https://placehold.co/600x400',
      'https://placehold.co/600x400',
      'https://placehold.co/600x400',
    ],
  },
  {
    slug: 'finishing-and-quality-control',
    title: 'Acabado y Control de Calidad',
    shortDescription: 'Añadiendo los toques finales y asegurando que cada prenda cumpla con nuestros altos estándares.',
    description: 'Después de la costura, las prendas pasan por un proceso de acabado que puede incluir lavado, planchado y colocación de botones o etiquetas. El paso final y más crítico es el Control de Calidad, donde cada prenda es meticulosamente inspeccionada para asegurar que cumple con nuestros estrictos estándares de calidad.',
    icon: FinishingIcon,
    processDetails: [
      "Colocación de botones, cremalleras y adornos.",
      "Lavado de prendas o tratamientos especiales.",
      "Planchado y vaporizado final.",
      "Inspección detallada de costuras, medidas y tela.",
      "Etiquetado y colocación de marquillas."
    ],
    metrics: [
      { name: "Tasa de Aprobación Final", value: "98%" },
      { name: "Puntos de Inspección por Prenda", value: "25" },
      { name: "Tasa de Devolución (Calidad)", value: "< 0.5%" },
    ],
    proposedImprovements: `// Propuesta de mejora de proceso
Utilizar un sistema de IA basado en visión para el control de calidad puede complementar la inspección humana. El sistema puede escanear prendas en busca de defectos comunes como puntadas omitidas o fallas en la tela a una velocidad de 5 prendas por segundo, marcando posibles problemas para la revisión humana. Esto asegura una cobertura de inspección del 100% para tipos de defectos específicos.`,
    galleryImages: [
      'https://placehold.co/600x400',
      'https://placehold.co/600x400',
      'https://placehold.co/600x400',
    ],
  },
  {
    slug: 'packaging-and-distribution',
    title: 'Empaque y Distribución',
    shortDescription: 'Preparando las prendas terminadas para su viaje hacia el cliente.',
    description: 'Una vez que una prenda pasa la inspección final, se dobla, empaqueta y encaja cuidadosamente. Nuestro equipo de logística luego se asegura de que los pedidos se recojan, empaquen y envíen con precisión a nuestros clientes de todo el mundo, completando el ciclo de producción.',
    icon: PackagingIcon,
    processDetails: [
      "Doblado y embolsado de prendas individuales.",
      "Escaneo de códigos de barras para la gestión de inventario.",
      "Empaque de prendas en cajas de envío.",
      "Generación de etiquetas de envío y documentación.",
      "Carga de envíos para su despacho."
    ],
    metrics: [
      { name: "Precisión de Pedidos", value: "99.9%" },
      { name: "Tiempo de Despacho", value: "< 24 horas desde producción" },
      { name: "Material de Empaque", value: "80% reciclados" },
    ],
    proposedImprovements: `// Propuesta de mejora de automatización
Una máquina automatizada de embolsado y sellado puede aumentar la velocidad de empaque en un 200%. Esto reduciría los costos de mano de obra en el departamento de empaque y garantizaría una presentación final del producto más consistente y profesional. También reduciría el tiempo desde la finalización de la producción hasta el despacho.`,
    galleryImages: [
      'https://placehold.co/600x400',
      'https://placehold.co/600x400',
      'https://placehold.co/600x400',
    ],
  },
];

export function getStations() {
  return stations;
}

export function getStationBySlug(slug: string) {
  return stations.find((station) => station.slug === slug);
}
