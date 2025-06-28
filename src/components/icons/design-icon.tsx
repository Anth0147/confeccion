export function DesignIcon({ className }: { className?: string }) {
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
      <path d="M12 15v6" />
      <path d="M10 21h4" />
      <path d="M16 3.83A4 4 0 0 0 12.17 2H12a4 4 0 0 0-4 4v1.17" />
      <path d="M7.83 6A4 4 0 0 0 4 9.83V10a4 4 0 0 0 4 4h1.17" />
      <path d="M16.17 6A4 4 0 0 1 20 9.83V10a4 4 0 0 1-4 4h-1.17" />
    </svg>
  );
}
