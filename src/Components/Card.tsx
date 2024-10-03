import type { Guitar, CartItem } from "../types";

type GuitarCardProps = {
  dataGuitar: Guitar
  cart: CartItem[]
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>
}

const Card = ({ dataGuitar, cart, setCart } : GuitarCardProps) => {
  const { id, image, name, description, price } = dataGuitar;

  const handleCart = () => {
    const itemExists = cart.find((item) => item.id === dataGuitar.id);

    if (itemExists) {
      if (itemExists.quantity >= 5) return;
      //en caso de no usar prev, mapear cart en lugar de prev
      setCart((prevCart) => prevCart.map(item => // const updatedCart = cart.map... y setear con setCart(updatedCart)
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ))
    } else {
      const newItem: CartItem = { ...dataGuitar, quantity: 1 };
      setCart([ ...cart, newItem ]);
    }
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
          onClick={handleCart}
          type="button"
          className="btn btn-dark w-100"
        >Agregar al Carrito</button>
      </div>
    </div>
  )
}

export default Card;