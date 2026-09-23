import { useState, type FormEvent } from "react"
import { useCart } from "../hooks/useCart"

type Step = "cart" | "checkout" | "confirmation"
type Fulfillment = "pickup" | "delivery"

function formatPrice(value: number) {
  return `$${value.toLocaleString("es-AR")}`
}

function generateTrackingCode() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"
  let code = ""
  for (let i = 0; i < 4; i++) code += chars[Math.floor(Math.random() * chars.length)]
  return `ARM-${code}`
}

export default function Cart() {
  const { lines, updateQty, removeItem, subtotal, count, isOpen, closeCart, clearCart } = useCart()
  const [step, setStep] = useState<Step>("cart")
  const [fulfillment, setFulfillment] = useState<Fulfillment>("pickup")
  const [address, setAddress] = useState("")
  const [trackingCode, setTrackingCode] = useState("")

  if (!isOpen) return null

  function handleClose() {
    closeCart()
    setStep("cart")
  }

  function handleConfirm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setTrackingCode(generateTrackingCode())
    setStep("confirmation")
  }

  function handleNewOrder() {
    clearCart()
    setFulfillment("pickup")
    setAddress("")
    setStep("cart")
    closeCart()
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <button
        type="button"
        aria-label="Cerrar carrito"
        onClick={handleClose}
        className="absolute inset-0 bg-foreground/50"
      />
      <aside className="relative flex h-full w-full max-w-md flex-col overflow-y-auto border-l-4 border-double border-accent-gold bg-surface p-6 sm:p-8">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-2xl font-black text-primary">
            {step === "cart" && `Carrito (${count})`}
            {step === "checkout" && "Confirmar pedido"}
            {step === "confirmation" && "¡Pedido listo!"}
          </h2>
          <button
            type="button"
            onClick={handleClose}
            className="font-body text-sm font-bold uppercase tracking-wide text-primary hover:underline"
          >
            Cerrar
          </button>
        </div>

        {step === "cart" && (
          <div className="mt-6 flex flex-1 flex-col">
            {lines.length === 0 ? (
              <p className="font-body text-foreground/70">Todavía no agregaste nada del menú.</p>
            ) : (
              <ul className="flex flex-1 flex-col gap-4">
                {lines.map((line) => (
                  <li key={line.item.id} className="flex items-center justify-between gap-3 border-b border-accent-gold/40 pb-4">
                    <div>
                      <p className="font-body font-bold text-foreground">{line.item.name}</p>
                      <p className="font-body text-sm text-foreground/70">{formatPrice(line.item.priceValue)}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => updateQty(line.item.id, line.qty - 1)}
                        aria-label={`Restar uno a ${line.item.name}`}
                        className="h-7 w-7 rounded-sm border border-muted font-body font-bold text-foreground hover:border-primary"
                      >
                        −
                      </button>
                      <span className="w-6 text-center font-body font-bold text-foreground">{line.qty}</span>
                      <button
                        type="button"
                        onClick={() => updateQty(line.item.id, line.qty + 1)}
                        aria-label={`Sumar uno a ${line.item.name}`}
                        className="h-7 w-7 rounded-sm border border-muted font-body font-bold text-foreground hover:border-primary"
                      >
                        +
                      </button>
                      <button
                        type="button"
                        onClick={() => removeItem(line.item.id)}
                        className="ml-2 font-body text-xs text-foreground/60 hover:text-primary hover:underline"
                      >
                        Quitar
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-6 border-t-2 border-accent-gold pt-4">
              <div className="flex items-center justify-between font-body font-bold text-foreground">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <button
                type="button"
                disabled={lines.length === 0}
                onClick={() => setStep("checkout")}
                className="mt-4 w-full rounded-sm border border-accent-gold bg-primary px-6 py-3 font-body text-lg font-bold uppercase tracking-wide text-surface hover:bg-secondary disabled:pointer-events-none disabled:opacity-40"
              >
                Continuar
              </button>
            </div>
          </div>
        )}

        {step === "checkout" && (
          <form onSubmit={handleConfirm} className="mt-6 flex flex-1 flex-col">
            <fieldset className="flex flex-col gap-3">
              <legend className="font-body text-sm font-bold uppercase tracking-wide text-secondary">¿Cómo lo recibís?</legend>
              <label className="flex items-center gap-2 font-body text-lg text-foreground">
                <input
                  type="radio"
                  name="fulfillment"
                  value="pickup"
                  checked={fulfillment === "pickup"}
                  onChange={() => setFulfillment("pickup")}
                  className="accent-primary"
                />
                Recoger en local
              </label>
              <label className="flex items-center gap-2 font-body text-lg text-foreground">
                <input
                  type="radio"
                  name="fulfillment"
                  value="delivery"
                  checked={fulfillment === "delivery"}
                  onChange={() => setFulfillment("delivery")}
                  className="accent-primary"
                />
                Entrega a domicilio
              </label>
            </fieldset>

            {fulfillment === "delivery" && (
              <div className="mt-4">
                <label htmlFor="address" className="font-body text-sm font-bold uppercase tracking-wide text-secondary">
                  Dirección de entrega
                </label>
                <input
                  id="address"
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="mt-1 w-full border-0 border-b-2 border-muted bg-transparent px-1 py-2 font-body text-lg text-foreground focus:border-primary focus:outline-none"
                />
              </div>
            )}

            <p className="mt-4 font-body text-sm text-foreground/70">
              Pago: <span className="font-bold text-foreground">Efectivo</span>
            </p>

            <div className="mt-6 border-t-2 border-accent-gold pt-4">
              <div className="flex items-center justify-between font-body font-bold text-foreground">
                <span>Total</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <button
                type="submit"
                className="mt-4 w-full rounded-sm border border-accent-gold bg-primary px-6 py-3 font-body text-lg font-bold uppercase tracking-wide text-surface hover:bg-secondary"
              >
                Confirmar pedido
              </button>
              <button
                type="button"
                onClick={() => setStep("cart")}
                className="mt-2 w-full rounded-sm border-2 border-primary px-6 py-2 font-body text-sm font-bold uppercase tracking-wide text-primary hover:bg-primary hover:text-surface"
              >
                Volver al carrito
              </button>
            </div>
          </form>
        )}

        {step === "confirmation" && (
          <div className="mt-6 flex flex-1 flex-col justify-between">
            <div>
              <p className="font-body text-foreground/80">
                Pedido confirmado. {fulfillment === "pickup" ? "Te esperamos en el local." : `Sale para: ${address}.`}
              </p>
              <p className="mt-4 font-body text-sm text-foreground/70">Código de seguimiento</p>
              <p className="font-display text-3xl font-black text-primary">{trackingCode}</p>
              <p className="mt-4 font-body text-xs text-foreground/50">
                Esta funcionalidad es una simulación — el pedido no se envía a ningún sistema real todavía.
              </p>
            </div>
            <button
              type="button"
              onClick={handleNewOrder}
              className="mt-6 w-full rounded-sm border-2 border-primary px-6 py-3 font-body text-lg font-bold uppercase tracking-wide text-primary hover:bg-primary hover:text-surface"
            >
              Hacer otro pedido
            </button>
          </div>
        )}
      </aside>
    </div>
  )
}
