import { motion } from "framer-motion"
import { fadeUp, viewportOnce } from "../lib/motion"

export default function Footer() {
  return (
    <footer className="border-t-4 border-double border-accent-gold bg-secondary text-surface">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mx-auto max-w-6xl px-6 py-10"
      >
        <div className="ornament-divider mx-auto max-w-xs font-display text-lg text-accent-gold" aria-hidden="true">
          ❦
        </div>
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-xl font-black tracking-wide text-accent-gold">Aroma</p>
          <nav aria-label="Redes sociales">
            <ul className="flex gap-6 font-body text-lg font-medium">
              <li>
                <a href="#top" className="underline-offset-4 transition-colors duration-200 hover:text-accent-gold hover:underline">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#top" className="underline-offset-4 transition-colors duration-200 hover:text-accent-gold hover:underline">
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="mailto:hola@aroma.cafe"
                  className="underline-offset-4 transition-colors duration-200 hover:text-accent-gold hover:underline"
                >
                  hola@aroma.cafe
                </a>
              </li>
            </ul>
          </nav>
          <p className="font-body text-sm text-surface/60">© {new Date().getFullYear()} Aroma. Todos los derechos reservados.</p>
        </div>
      </motion.div>
    </footer>
  )
}
