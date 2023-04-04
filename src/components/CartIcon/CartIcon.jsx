import { useContext } from 'react'
import {ReactComponent as ShoppingIcon} from '../../assests/shopping-bag.svg'
import "./CartIconStyles.css"
import { CartContext } from '../../context/CartContext'

const CartIcon = () => {
  const {isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsOpen = () => setIsCartOpen(!isCartOpen)

  return (
    <div className='cart-icon-container' onClick={toggleIsOpen}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  )
}

export default CartIcon