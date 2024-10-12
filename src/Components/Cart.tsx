import { ActivityAction } from "../reducers/cart-reducer";
import type { CartItem } from "../types";

type CartProps = {
  cartGuitar: CartItem
  dispatch: React.Dispatch<ActivityAction>
}

const Cart = ({ cartGuitar, dispatch } : CartProps) => {
  const { image, name, price, quantity } = cartGuitar;

  const removeItem = () => {
    dispatch({ type: 'REMOVE_FROMCART', payload: { id: cartGuitar.id } })
  }

  const increaseItem = () => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: { id: cartGuitar.id } })
  }

  const decreaseItem = () => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: { id: cartGuitar.id } })
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