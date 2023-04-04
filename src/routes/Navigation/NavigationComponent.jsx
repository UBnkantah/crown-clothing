import {useContext} from 'react'
import CartIcon from '../../components/CartIcon/CartIcon'
import { UserContext } from '../../context/UserContext'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import CartDropDown from '../../components/CartDropDown/CartDropDown'
const NavigationComponent = () => {
    const { currentUser} = useContext(UserContext)
    const { isCartOpen} = useContext(CartContext)
    

  return (
    <div>
      <h1>Logo</h1>
      <nav>
        {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>)
            : (<Link className='' to="/auth">SIGN IN</Link>
        )}
        <Link to="/shop">Shop</Link>
        <CartIcon />
      </nav>
      {isCartOpen && <CartDropDown />}
    </div>
  )
}

export default NavigationComponent
