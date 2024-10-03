import { useState } from "react";
import { db } from "../utils/dbGuitar";
import Card from "./Card";
import type {Guitar, CartItem } from "../types";

type HomeProps = {
  cart: CartItem[]
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>
}

const Home = ({ cart, setCart } : HomeProps) => {
  const [data] = useState<Guitar[]>(db);

  return (
    <>
      {data.map((guitar) => (
        <Card 
          key={guitar.id} 
          dataGuitar={guitar} 
          cart={cart} 
          setCart={setCart} 
        />
      ))}
    </>
  )
}

export default Home;