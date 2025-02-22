import { useMemo } from "react";
import Cart from "./Cart";
import { ActivityAction, CartState } from "../reducers/cart-reducer";

type HeaderProps = {
  state: CartState
  dispatch: React.Dispatch<ActivityAction>
}

const Header = ({ state, dispatch } : HeaderProps) => {
  const isEmpty = useMemo(() => state.cart.length === 0, [state.cart]);
  const cartTotal = useMemo(() => state.cart.reduce((total, item) => total + (item.quantity * item.price), 0), [state.cart]);

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  return (
    <header className="py-5 header">
      <div className="container-xl">
        <div className="row justify-content-center justify-content-md-between">
          <div className="col-8 col-md-3">
            <a href="index.html">
              <img
                className="img-fluid"
                src="/img/logo.svg"
                alt="imagen logo"
              />
            </a>
          </div>
          <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
            <div className="carrito">
              <img
                className="img-fluid"
                src="/img/carrito.png"
                alt="imagen carrito"
              />

              <div id="carrito" className="bg-white p-3">
                {isEmpty ? (
                  <p className="text-center">El carrito está vacío</p>
                ) : (
                  <>
                  <table className="w-100 table">
                    <thead>
                      <tr>
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {state.cart.map((guitar) => (
                        <Cart 
                          key={guitar.id} 
                          cartGuitar={guitar}
                          dispatch={dispatch}
                        />
                      ))}
                    </tbody>
                  </table>

                  <p className="text-end">
                    Total pagar: <span className="fw-bold">${cartTotal}</span>
                  </p>
                  </>
                )}

                <button onClick={clearCart} className="btn btn-dark w-100 mt-3 p-2">
                  Vaciar Carrito
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
