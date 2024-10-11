import { ActivityAction } from "../reducers/cart-reducer";
import type { Guitar } from "../types";

type GuitarCardProps = {
  dataGuitar: Guitar
  dispatch: React.Dispatch<ActivityAction>
}

const Card = ({ dataGuitar, dispatch } : GuitarCardProps) => {
  const { image, name, description, price } = dataGuitar;

  const addToCart = () => {
    dispatch({ type: 'ADD_CART', payload: { guitar: dataGuitar } })
  }

  return (
    <div className="col-md-6 col-lg-4 my-4 row align-items-center">
      <div className="col-4">
        <img className="img-fluid" src={`/img/${image}.jpg`} alt="imagen guitarra" />
      </div>
      <div className="col-8">
        <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
        <p>{description}</p>
        <p className="fw-black text-primary fs-3">${price}</p>
        <button 
          onClick={addToCart}
          type="button"
          className="btn btn-dark w-100"
        >Agregar al Carrito</button>
      </div>
    </div>
  )
}

export default Card;