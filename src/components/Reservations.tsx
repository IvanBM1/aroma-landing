import { useState, type FormEvent } from "react"

interface FormState {
  nombre: string
  fecha: string
  hora: string
  personas: string
  comentario: string
}

const initialState: FormState = {
  nombre: "",
  fecha: "",
  hora: "",
  personas: "2",
  comentario: "",
}

const fieldClasses =
  "mt-1 w-full border-0 border-b-2 border-muted bg-transparent px-1 py-2 font-body text-lg text-foreground focus:border-primary focus:outline-none"

export default function Reservations() {
  const [form, setForm] = useState<FormState>(initialState)
  const [confirmed, setConfirmed] = useState(false)

  function handleChange(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setConfirmed(true)
  }

  if (confirmed) {
    return (
      <section id="reservas" className="border-b-4 border-double border-accent-gold bg-background">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="border-4 border-double border-accent-gold bg-surface p-8 sm:p-12">
            <h2 className="font-display text-3xl font-black text-primary">¡Reserva confirmada!</h2>
            <p className="mt-3 max-w-md font-body text-lg text-foreground/80">
              Te esperamos, {form.nombre}. Guardamos tu mesa para el {form.fecha} a las {form.hora}, para{" "}
              {form.personas} persona{form.personas === "1" ? "" : "s"}.
            </p>
            <button
              type="button"
              onClick={() => {
                setForm(initialState)
                setConfirmed(false)
              }}
              className="mt-6 rounded-sm border-2 border-primary px-5 py-2 font-body text-base font-bold uppercase tracking-wide text-primary hover:bg-primary hover:text-surface"
            >
              Hacer otra reserva
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="reservas" className="border-b-4 border-double border-accent-gold bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-display text-4xl font-black text-primary sm:text-5xl">Reservá tu mesa</h2>
        <p className="mt-3 max-w-md font-body text-lg text-foreground/70">Guardá tu mesa. Sin vueltas.</p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 grid max-w-2xl grid-cols-1 gap-6 border-4 border-double border-accent-gold bg-surface p-6 sm:grid-cols-2 sm:p-10"
        >
          <div className="sm:col-span-2">
            <label htmlFor="nombre" className="font-body text-sm font-bold uppercase tracking-wide text-secondary">
              Nombre
            </label>
            <input
              id="nombre"
              type="text"
              required
              value={form.nombre}
              onChange={(e) => handleChange("nombre", e.target.value)}
              className={fieldClasses}
            />
          </div>

          <div>
            <label htmlFor="fecha" className="font-body text-sm font-bold uppercase tracking-wide text-secondary">
              Fecha
            </label>
            <input
              id="fecha"
              type="date"
              required
              value={form.fecha}
              onChange={(e) => handleChange("fecha", e.target.value)}
              className={fieldClasses}
            />
          </div>

          <div>
            <label htmlFor="hora" className="font-body text-sm font-bold uppercase tracking-wide text-secondary">
              Hora
            </label>
            <input
              id="hora"
              type="time"
              required
              value={form.hora}
              onChange={(e) => handleChange("hora", e.target.value)}
              className={fieldClasses}
            />
          </div>

          <div>
            <label htmlFor="personas" className="font-body text-sm font-bold uppercase tracking-wide text-secondary">
              Personas
            </label>
            <select
              id="personas"
              value={form.personas}
              onChange={(e) => handleChange("personas", e.target.value)}
              className={fieldClasses}
            >
              {Array.from({ length: 8 }, (_, i) => i + 1).map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="comentario" className="font-body text-sm font-bold uppercase tracking-wide text-secondary">
              Comentario (opcional)
            </label>
            <input
              id="comentario"
              type="text"
              value={form.comentario}
              onChange={(e) => handleChange("comentario", e.target.value)}
              className={fieldClasses}
            />
          </div>

          <div className="sm:col-span-2">
            <button
              type="submit"
              className="rounded-sm border border-accent-gold bg-primary px-6 py-3 font-body text-lg font-bold uppercase tracking-wide text-surface hover:bg-secondary"
            >
              Confirmar reserva
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
