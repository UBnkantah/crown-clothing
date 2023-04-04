import {useState, useContext} from 'react'

import FormInput from '../../components/form-input/FormInputComponent';

import { UserContext } from '../../context/UserContext';

import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';


const SignInForm = () => {

  const defaultFormFields = {
    email: "",
    password: "",
  }

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields

  const { setCurrentUser  } = useContext(UserContext)

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const SignWithGoogle = async () => {
    await signInWithGooglePopup();  
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

  
    try {
      const {user} = await signInAuthUserWithEmailAndPassword(email, password);

      setCurrentUser(user)

      resetFormFields();

    } catch(error) {
      switch(error.code) {
        case 'auth/wrong-password':
          alert('Incorrect password or email')
          break
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break
        default:
          console.log(error);
      }
    }
  }

  const handleChange = (e) => {
    const {name, value} = e.target;

    setFormFields({...formFields, [name]: value});
  };
  

  return (
    <div className='sign-up-container'>
      <h2>Already have an Account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>

        <FormInput
          label="Email" 
          type="email" 
          name="email" 
          value={email} 
          onChange={handleChange} 
        />

        <FormInput 
          label="Password"
          type="password" 
          name="password" 
          value={password} 
          onChange={handleChange} 
        />
        <div className="button-contain">
          <button type="submit">Sign In</button>
          <button type='button' onClick={SignWithGoogle}>Sign In with Google</button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm
