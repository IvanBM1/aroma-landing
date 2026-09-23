import Cart from "./components/Cart"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Location from "./components/Location"
import Menu from "./components/Menu"
import Reservations from "./components/Reservations"
import { CartProvider } from "./context/CartContext"

export default function App() {
  return (
    <CartProvider>
      <div className="font-body text-foreground">
        <Header />
        <main>
          <Hero />
          <Menu />
          <Reservations />
          <Location />
        </main>
        <Footer />
        <Cart />
      </div>
    </CartProvider>
  )
}
