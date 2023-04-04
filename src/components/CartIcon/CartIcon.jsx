import {ReactComponent as ShoppingIcon} from '../../assests/shopping-bag.svg'
import "./CartIconStyles.css"
const CartIcon = () => {
  return (
    <div className='cart-icon-container'>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  )
}

export default CartIcon