import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import "./CartDropDown.css"
import CartItem from "../CartItem/CartItem"

const CartDropDown = () => {
    const { cartItems } = useContext(CartContext)
  return (
    <div className="cart-dropdown-container">
        <div className="cart-items">
            {cartItems.map((item) => (
                <CartItem key={item.id} cartItem={item} />
            ))}
            <button className="cart-dd-btn">Go To CheckOut</button>
        </div>
    </div>
  )
}

export default CartDropDown