import Card from "./Card";
import { ActivityAction, CartState } from "../reducers/cart-reducer";

type HomeProps = {
  state: CartState
  dispatch: React.Dispatch<ActivityAction> 
}

const Home = ({ state, dispatch } : HomeProps) => {

  return (
    <>
      {state.data.map((guitar) => (
        <Card 
          key={guitar.id} 
          dataGuitar={guitar}
          dispatch={dispatch} 
        />
      ))}
    </>
  )
}

export default Home;