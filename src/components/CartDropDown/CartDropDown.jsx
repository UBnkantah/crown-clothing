import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import "./CartDropDown.css"
import CartItem from "../CartItem/CartItem"

const CartDropDown = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext)
  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }

  return (
    <div className="cart-dropdown-container">
        <div className="cart-items">
            {cartItems.map((item) => (
                <CartItem key={item.id} cartItem={item} />
            ))}
            <button className="cart-dd-btn" onClick={goToCheckoutHandler}>Go To CheckOut</button>
        </div>
    </div>
  )
}

export default CartDropDown