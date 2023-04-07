import {Fragment, useContext} from 'react'
import CartIcon from '../../components/CartIcon/CartIcon'
import { UserContext } from '../../context/UserContext'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import CartDropDown from '../../components/CartDropDown/CartDropDown'
import { NavigationContainer, NavLink, NavLinks, LogoContainer } from './Navigation.styles'
const NavigationComponent = () => {
    const { currentUser} = useContext(UserContext)
    const { isCartOpen} = useContext(CartContext)
    

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <h1>Logo</h1>
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">Shop</NavLink>
          {currentUser ? (
              <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>)
              : (<NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropDown />}
      </NavigationContainer>
    </Fragment>
    
  )
}

export default NavigationComponent
