export function FinishingIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
        <path d="M19.5 12.5c0 5.5-4.5 5.5-4.5 5.5H9s-4.5 0-4.5-5.5.5-10 6-10c5.5 0 6 4.5 6 10Z" />
        <path d="m9 18 2 2 4-4" />
        <path d="M14 13.5c0 1.9-1.3 3.5-3 3.5s-3-1.6-3-3.5 1.3-3.5 3-3.5" />
    </svg>
  );
}
