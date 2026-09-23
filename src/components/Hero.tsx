import { motion } from "framer-motion"
import { fadeUp, staggerContainer } from "../lib/motion"

export default function Hero() {
  return (
    <section id="top" className="scroll-mt-24 border-b-4 border-double border-accent-gold bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="relative border-4 border-double border-accent-gold p-8 sm:p-12">
          <span aria-hidden="true" className="absolute -left-1 -top-1 h-5 w-5 border-l-4 border-t-4 border-primary" />
          <span aria-hidden="true" className="absolute -right-1 -top-1 h-5 w-5 border-r-4 border-t-4 border-primary" />
          <span aria-hidden="true" className="absolute -bottom-1 -left-1 h-5 w-5 border-b-4 border-l-4 border-primary" />
          <span aria-hidden="true" className="absolute -bottom-1 -right-1 h-5 w-5 border-b-4 border-r-4 border-primary" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-12 sm:grid-cols-12 sm:items-center sm:gap-8"
          >
            <div className="sm:col-span-7">
              <motion.span
                variants={fadeUp}
                className="inline-block border border-primary px-3 py-1 font-body text-sm font-bold uppercase tracking-[0.25em] text-primary"
              >
                Café de especialidad
              </motion.span>
              <motion.h1
                variants={fadeUp}
                className="mt-6 font-display text-5xl font-black leading-[1.05] tracking-tight text-foreground sm:text-6xl"
              >
                Café de origen.
                <br />
                Tueste propio.
                <br />
                Tu lugar.
              </motion.h1>
              <motion.p variants={fadeUp} className="mt-6 max-w-md font-body text-xl text-foreground/80">
                Grano seleccionado, tostado acá. Sin vueltas, sin relleno — solo café bien hecho.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#reservas"
                  className="rounded-sm border border-accent-gold bg-primary px-6 py-3 font-body text-lg font-bold uppercase tracking-wide text-surface transition-transform duration-200 hover:scale-105 hover:bg-secondary"
                >
                  Reservá tu mesa
                </a>
                <a
                  href="#menu"
                  className="rounded-sm border-2 border-primary px-6 py-3 font-body text-lg font-bold uppercase tracking-wide text-primary transition-transform duration-200 hover:scale-105 hover:bg-primary hover:text-surface"
                >
                  Mirá el menú
                </a>
              </motion.div>
            </div>
            <motion.div variants={fadeUp} className="sm:col-span-5" aria-hidden="true">
              <div className="aspect-[4/5] w-full border-4 border-double border-accent-gold bg-secondary/10" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
