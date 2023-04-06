import {useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import CheckoutItems from '../../components/CheckoutItems/CheckoutItems'
import "./Checkout.css"

const Checkout = () => {
    const {cartItems, cartTotal} = useContext(CartContext);
  return (
    <div className='checkout-container'>
        <div className="check-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {cartItems.map((cartItem) => {
            return (
                <CheckoutItems key={cartItem.id} cartItem={cartItem} />
            )
            })
        }
        <span classname='total'>Total: ${cartTotal}</span>
    </div>
  )
}

export default Checkout