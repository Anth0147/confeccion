export function SewingIcon({ className }: { className?: string }) {
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
      <path d="M20 18h-8" />
      <path d="M12 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12h4" />
      <path d="M12 6h8" />
      <path d="M18 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M12 12h-2" />
    </svg>
  );
}
