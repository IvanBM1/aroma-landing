export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display text-xl font-black">Aroma</p>
        <nav aria-label="Redes sociales">
          <ul className="flex gap-6 font-body text-sm font-medium">
            <li>
              <a href="#top" className="hover:text-accent-warm">
                Instagram
              </a>
            </li>
            <li>
              <a href="#top" className="hover:text-accent-warm">
                Facebook
              </a>
            </li>
            <li>
              <a href="mailto:hola@aroma.cafe" className="hover:text-accent-warm">
                hola@aroma.cafe
              </a>
            </li>
          </ul>
        </nav>
        <p className="font-body text-xs text-background/60">© {new Date().getFullYear()} Aroma. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
