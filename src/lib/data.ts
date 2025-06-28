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
    title: 'Design and Pattern Making',
    shortDescription: 'Conceptualizing ideas and creating precise blueprints for production.',
    description: 'This initial phase is where creativity meets precision. Our designers collaborate to create innovative styles, which are then translated into detailed patterns. These patterns serve as the essential blueprints for every garment, ensuring consistency and quality from the very first step.',
    icon: DesignIcon,
    processDetails: [
      "Market research and trend analysis.",
      "Sketching and digital design creation using CAD software.",
      "Material selection and sourcing.",
      "Creating initial paper or digital patterns.",
      "Prototyping and sample fitting."
    ],
    metrics: [
      { name: "Time to First Pattern", value: "24-48 hours" },
      { name: "Pattern Accuracy", value: "99.5%" },
      { name: "Designs per Quarter", value: "50+" },
    ],
    proposedImprovements: `// Software-based improvement proposal
function integrate3DPrototyping(pattern) {
  const digitalPattern = convertTo3D(pattern);
  const virtualFit = simulateGarmentOnAvatar(digitalPattern);
  if(virtualFit.issues.length > 0) {
    return refinePattern(pattern, virtualFit.feedback);
  }
  return digitalPattern;
}
// This reduces material waste from physical samples by up to 70%.`,
    galleryImages: [
      'https://placehold.co/600x400',
      'https://placehold.co/600x400',
      'https://placehold.co/600x400',
    ],
  },
  {
    slug: 'cutting',
    title: 'Cutting',
    shortDescription: 'Transforming fabric into precisely cut pieces for assembly.',
    description: 'Using advanced automated machinery, large rolls of fabric are carefully laid out and cut according to the patterns created in the design phase. Precision is key here to minimize waste and ensure every component of the garment fits perfectly together.',
    icon: CuttingIcon,
    processDetails: [
      "Fabric inspection for defects.",
      "Spreading multiple layers of fabric.",
      "Automated CNC cutting based on digital patterns.",
      "Bundling of cut pieces for the sewing department.",
      "Waste material sorting and recycling."
    ],
    metrics: [
      { name: "Fabric Utilization", value: "92%" },
      { name: "Cutting Speed", value: "500 pieces/hour" },
      { name: "Cut Accuracy", value: "±1mm" },
    ],
    proposedImprovements: `// Operational improvement proposal
We can optimize fabric layouts using an AI-powered nesting algorithm.
This could increase fabric utilization from 92% to 95%, saving thousands in material costs annually. The algorithm would analyze all cut pieces for an order and find the most efficient arrangement on the fabric spread.`,
    galleryImages: [
      'https://placehold.co/600x400',
      'https://placehold.co/600x400',
      'https://placehold.co/600x400',
    ],
  },
  {
    slug: 'sewing',
    title: 'Sewing',
    shortDescription: 'Assembling cut fabric pieces into finished garments.',
    description: 'Skilled operators use a variety of industrial sewing machines to assemble the cut pieces. This is where the garment takes its final shape. Our production lines are organized for maximum efficiency, with each operator specializing in a specific part of the assembly process.',
    icon: SewingIcon,
    processDetails: [
      "Component assembly in a production line.",
      "Use of specialized machines (overlock, lockstitch, etc.).",
      "Stitching seams, attaching collars, sleeves, and pockets.",
      "In-line quality checks at various points.",
      "Thread trimming and initial pressing."
    ],
    metrics: [
      { name: "Garments per Hour", value: "120" },
      { name: "Defect Rate", value: "< 1.5%" },
      { name: "Line Efficiency", value: "85%" },
    ],
    proposedImprovements: `// Technology improvement proposal
Implementing RFID trackers in each garment bundle can provide real-time production monitoring. This would allow supervisors to identify bottlenecks in the sewing line instantly and reallocate resources to maintain optimal flow, potentially increasing line efficiency to over 90%.`,
    galleryImages: [
      'https://placehold.co/600x400',
      'https://placehold.co/600x400',
      'https://placehold.co/600x400',
    ],
  },
  {
    slug: 'finishing-and-quality-control',
    title: 'Finishing & Quality Control',
    shortDescription: 'Adding final touches and ensuring every garment meets our high standards.',
    description: 'After sewing, garments go through a finishing process which may include washing, pressing, and attaching buttons or labels. The final and most critical step is Quality Control, where each garment is meticulously inspected to ensure it meets our stringent quality standards.',
    icon: FinishingIcon,
    processDetails: [
      "Buttoning, zippering, and trim application.",
      "Garment washing or special treatments.",
      "Final pressing and steaming.",
      "Detailed inspection of stitching, measurements, and fabric.",
      "Tagging and labeling."
    ],
    metrics: [
      { name: "Final Pass Rate", value: "98%" },
      { name: "Inspection Points per Garment", value: "25" },
      { name: "Customer Return Rate (Quality)", value: "< 0.5%" },
    ],
    proposedImprovements: `// Process improvement proposal
Utilizing a vision-based AI system for quality control can supplement human inspection. The system can scan garments for common defects like missed stitches or fabric flaws at a rate of 5 garments per second, flagging potential issues for human review. This ensures 100% inspection coverage for specific defect types.`,
    galleryImages: [
      'https://placehold.co/600x400',
      'https://placehold.co/600x400',
      'https://placehold.co/600x400',
    ],
  },
  {
    slug: 'packaging-and-distribution',
    title: 'Packaging & Distribution',
    shortDescription: 'Preparing finished garments for their journey to the customer.',
    description: 'Once a garment passes final inspection, it is carefully folded, packaged, and boxed. Our logistics team then ensures that orders are accurately picked, packed, and shipped to our clients around the world, completing the production cycle.',
    icon: PackagingIcon,
    processDetails: [
      "Folding and bagging individual garments.",
      "Barcode scanning for inventory management.",
      "Packing garments into shipping cartons.",
      "Generating shipping labels and documentation.",
      "Loading shipments for dispatch."
    ],
    metrics: [
      { name: "Order Accuracy", value: "99.9%" },
      { name: "Time to Dispatch", value: "< 24 hours from production finish" },
      { name: "Packaging Material", value: "80% recycled materials" },
    ],
    proposedImprovements: `// Automation improvement proposal
An automated bagging and sealing machine can increase packaging speed by 200%. This would reduce labor costs in the packaging department and ensure a more consistent and professional final presentation of the product. It would also reduce the time from production finish to dispatch.`,
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
