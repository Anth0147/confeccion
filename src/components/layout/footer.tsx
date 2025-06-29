export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="container flex items-center justify-center py-4">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Confección Estrellita. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
