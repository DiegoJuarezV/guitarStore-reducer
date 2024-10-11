import { useEffect, useReducer, useState } from "react";
import type { CartItem } from "./types";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { cartReducer, initialState } from "./reducers/cart-reducer";

function App() {
  const lsCart : CartItem[] = JSON.parse(localStorage.getItem("cart") || '[]');

  const [cart, setCart] = useState(lsCart);

  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart])

  return (
    <>
      <Header cart={cart} setCart={setCart} />
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
        <div className="row mt-5">
          <Home state={state} dispatch={dispatch} />
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
      </footer>
    </>
  )
}

export default App;
