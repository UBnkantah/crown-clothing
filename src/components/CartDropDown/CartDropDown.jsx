import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import {CartDropDownContainer, EmptyMessage, CartItems} from "./CartDropDown.styles.jsx"
import Button from "../Button/Button"
import CartItem from "../CartItem/CartItem"

const CartDropDown = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext)
 
  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }

  return (
    <CartDropDownContainer>
        <CartItems>
          {
            cartItems.length ? (cartItems.map((item) => (
              <CartItem key={item.id} cartItem={item} />
            ))) : (
              <EmptyMessage>Your Cart is Empty</EmptyMessage>
            )
          }
            {cartItems.map((item) => (
                <CartItem key={item.id} cartItem={item} />
            ))}
            <Button className="cart-dd-btn" onClick={goToCheckoutHandler}>Go To CheckOut</Button>
        </CartItems>
    </CartDropDownContainer>
  )
}

export default CartDropDown