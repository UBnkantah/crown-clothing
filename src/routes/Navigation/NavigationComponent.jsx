import {useContext} from 'react'
import { UserContext } from '../../context/UserContext'
import { Link } from 'react-router-dom'
import { signOutUser } from '../../utils/firebase/firebase.utils'
const NavigationComponent = () => {
    const { currentUser, setCurrentUser} = useContext(UserContext)
    
    
    const signOutHandler = async () => {
        await signOutUser();
        setCurrentUser(null)
    }

  return (
    <div>
      <h1>Logo</h1>
      <nav>
        {currentUser ? (
            <span className='nav-link' onClick={signOutHandler}>SIGN OUT</span>)
            : (<Link className='' to="/auth">SIGN IN</Link>
        )}
        <Link to="/shop">Shop</Link>
      </nav>
    </div>
  )
}

export default NavigationComponent
