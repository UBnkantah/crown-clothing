import {Fragment, useContext} from 'react'
import CartIcon from '../../components/CartIcon/CartIcon'
import { CartContext } from '../../context/CartContext'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import CartDropDown from '../../components/CartDropDown/CartDropDown'
import { NavigationContainer, NavLink, NavLinks, LogoContainer } from './Navigation.styles'
import { useSelector } from 'react-redux'
import { SelectCurrentUser } from '../../Store/User/UserSelector'

const NavigationComponent = () => {
    const { isCartOpen} = useContext(CartContext)
    const currentUser = useSelector(SelectCurrentUser);
    

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
