import { CuttingIcon } from '@/components/icons/cutting-icon';
import { DesignIcon } from '@/components/icons/design-icon';
import { PackagingIcon } from '@/components/icons/packaging-icon';
import { SewingIcon } from '@/components/icons/sewing-icon';
import { MaterialsIcon } from '@/components/icons/materials-icon';
import { EmbroideryIcon } from '@/components/icons/embroidery-icon';
import { QualityControlIcon } from '@/components/icons/quality-control-icon';

export interface Station {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  processDetails: string[];
  metrics: { name: string; value: string }[];
  galleryImages: string[];
}

const stations: Station[] = [
  {
    slug: 'design-and-pattern-making',
    title: 'Estación 1: Diseño y Patronaje',
    shortDescription: 'Conceptualizando ideas y creando planos precisos para la producción.',
    description: 'Esta fase inicial es donde la creatividad se encuentra con la precisión. Nuestros diseñadores colaboran para crear estilos innovadores, que luego se traducen en patrones detallados. Estos patrones sirven como los planos esenciales para cada prenda, asegurando consistencia y calidad desde el primer paso.',
    icon: DesignIcon,
    processDetails: [
      "Investigación de mercado y análisis de tendencias.",
      "Bocetos y creación de diseños digitales usando software CAD.",
      "Creación de patrones iniciales en papel o digitales.",
      "Creación de prototipos y ajuste de muestras."
    ],
    metrics: [
      { name: "Tiempo para el Primer Patrón", value: "24-48 horas" },
      { name: "Precisión del Patrón", value: "99.5%" },
      { name: "Diseños por Trimestre", value: "50+" },
    ],
    galleryImages: [
      '/images/design/image-1.jpg',
      '/images/design/image-2.jpg',
      '/images/design/image-3.jpg',
    ],
  },
  {
    slug: 'material-selection',
    title: 'Estación 2: Selección de Materiales',
    shortDescription: 'Eligiendo las telas y materiales perfectos para cada prenda.',
    description: 'Cada gran prenda comienza con materiales de alta calidad. En esta etapa, seleccionamos cuidadosamente las telas, hilos y accesorios que cumplen con nuestros estándares de durabilidad, comodidad y estética. Inspeccionamos cada lote para garantizar la uniformidad del color y la textura.',
    icon: MaterialsIcon,
    processDetails: [ 
      "Recepción e inspección de materias primas.", 
      "Pruebas de encogimiento, color y resistencia.", 
      "Almacenamiento de telas en condiciones óptimas.", 
      "Asignación de materiales a órdenes de producción." 
    ],
    metrics: [ 
      { name: "Tasa de Aprobación", value: "99%" }, 
      { name: "Variedad de Telas", value: "200+" }, 
      { name: "Tiempo de Inspección", value: "2 horas/lote" } 
    ],
    galleryImages: [ 
      '/images/materials/image-1.jpg', 
      '/images/materials/image-2.jpg', 
      '/images/materials/image-3.jpg' 
    ],
  },
  {
    slug: 'cutting',
    title: 'Estación 3: Corte',
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
    galleryImages: [
      '/images/cutting/image-1.jpg',
      '/images/cutting/image-2.jpg',
      '/images/cutting/image-3.jpg',
    ],
  },
  {
    slug: 'sewing',
    title: 'Estación 4: Costura',
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
    galleryImages: [
      '/images/sewing/image-1.jpg',
      '/images/sewing/image-2.jpg',
      '/images/sewing/image-3.jpg',
    ],
  },
  {
    slug: 'embroidery-and-printing',
    title: 'Estación 5: Bordado y Estampado',
    shortDescription: 'Añadiendo diseños únicos y personalizados a las prendas.',
    description: 'Aquí es donde las prendas adquieren personalidad. Utilizamos técnicas de bordado computarizado y estampado de última generación, como serigrafía y sublimación, para aplicar diseños complejos con una precisión y durabilidad excepcionales.',
    icon: EmbroideryIcon,
    processDetails: [ 
      "Digitalización de diseños para bordado o estampado.", 
      "Preparación de prendas y bastidores.", 
      "Ejecución de bordado con máquinas multi-cabeza.", 
      "Aplicación de estampados con tintas ecológicas.", 
      "Curado de tintas para máxima durabilidad." 
    ],
    metrics: [ 
      { name: "Precisión de Diseño", value: "99.8%" }, 
      { name: "Puntadas por Minuto", value: "1,200" }, 
      { name: "Durabilidad (Lavados)", value: "50+" } 
    ],
    galleryImages: [ 
      '/images/embroidery/image-1.jpg', 
      '/images/embroidery/image-2.jpg', 
      '/images/embroidery/image-3.jpg' 
    ],
  },
  {
    slug: 'quality-control',
    title: 'Estación 6: Control de Calidad',
    shortDescription: 'Asegurando que cada prenda cumpla con nuestros altos estándares.',
    description: 'Este es el paso final y más crítico antes del empaque. Cada prenda es meticulosamente inspeccionada por nuestro equipo de control de calidad para asegurar que cumple con nuestros estrictos estándares en costuras, medidas, acabados y apariencia general. Solo lo mejor llega a nuestros clientes.',
    icon: QualityControlIcon,
    processDetails: [
      "Inspección visual y dimensional de cada prenda.",
      "Verificación de costuras, botones y cremalleras.",
      "Planchado y vaporizado final para una presentación impecable.",
      "Eliminación de hilos sueltos y limpieza.",
      "Etiquetado final y colocación de marquillas."
    ],
    metrics: [
      { name: "Tasa de Aprobación Final", value: "98%" },
      { name: "Puntos de Inspección", value: "25 por prenda" },
      { name: "Tasa de Devolución", value: "< 0.5%" },
    ],
    galleryImages: [
      '/images/quality-control/image-1.jpg',
      '/images/quality-control/image-2.jpg',
      '/images/quality-control/image-3.jpg',
    ],
  },
  {
    slug: 'packaging-and-distribution',
    title: 'Estación 7: Empaque y Distribución',
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
      { name: "Tiempo de Despacho", value: "< 24 horas" },
      { name: "Empaque Reciclado", value: "80%" },
    ],
    galleryImages: [
      '/images/packaging/image-1.jpg',
      '/images/packaging/image-2.jpg',
      '/images/packaging/image-3.jpg',
    ],
  },
];

export function getStations() {
  return stations;
}

export function getStationBySlug(slug: string) {
  return stations.find((station) => station.slug === slug);
}
