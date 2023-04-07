import { useContext } from 'react'
// import {ReactComponent as ShoppingIcon} from '../../assests/shopping-bag.svg'
import {ShoppingIcon, CartIconContainer, ItemCount} from "./CartIconStyles.jsx"
import { CartContext } from '../../context/CartContext'

const CartIcon = () => {
  const {isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsOpen = () => setIsCartOpen(!isCartOpen)

  return (
    <CartIconContainer onClick={toggleIsOpen}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon