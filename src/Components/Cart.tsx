import type { CartItem } from "../types";

type CartProps = {
  cartGuitar: CartItem
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>
}

const Cart = ({ cartGuitar, setCart } : CartProps) => {
  const { id, image, name, price, quantity } = cartGuitar;

  const removeItem = () => {
    setCart((prev) => prev.filter(guitar => guitar.id !== id))
  }

  const increaseItem = () => {
    setCart((prev) => prev.map(guitar => 
      guitar.id === id && guitar.quantity < 5 ? { ...guitar, quantity: guitar.quantity + 1 } : guitar
    ))
  }

  const decreaseItem = () => {
    setCart((prev) => prev.map(guitar => 
      guitar.id === id && guitar.quantity > 1 ? { ...guitar, quantity: guitar.quantity - 1 } : guitar
    ))
  }

  return (
    <tr>
      <td>
        <img
          className="img-fluid"
          src={`/img/${image}.jpg`}
          alt="imagen guitarra"
        />
      </td>
      <td>{name}</td>
      <td className="fw-bold">${price}</td>
      <td className="flex align-items-start gap-4">
        <button onClick={decreaseItem} type="button" className="btn btn-dark">
          -
        </button>
          {quantity}
        <button onClick={increaseItem} type="button" className="btn btn-dark">
          +
        </button>
      </td>
      <td>
        <button onClick={removeItem} className="btn btn-danger" type="button">
          X
        </button>
      </td>
    </tr>
  )
}

export default Cart;