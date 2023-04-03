import {useState, useContext} from 'react'

import FormInput from '../../components/form-input/FormInputComponent';

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

import { UserContext } from '../../context/UserContext';

const SignUpForm = () => {

  const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    passwordConfirm: ""
  }

  const [formFields, setFormFields] = useState(defaultFormFields);
  const {displayName, email, password, passwordConfirm} = formFields

  const {setCurrentUser} = useContext(UserContext)

  console.log("hit")

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(password !== passwordConfirm) {
      alert("Password do not match");
      return;
    }
    try {
      const {user} = await createAuthUserWithEmailAndPassword(email, password);
      
      setCurrentUser(user)

      await createUserDocumentFromAuth(user, {displayName});
      resetFormFields();

    } catch(err) {
      if(err.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use")
      } else {
      console.log("user creation encountered an error",err)
      }
    }
  }

  const handleChange = (e) => {
    const {name, value} = e.target;

    setFormFields({...formFields, [name]: value});
  };

  return (
    <div className='sign-up-container'>
      <h2>Don't have an Account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput 
          label="Display Name"
          type="text" 
          name="displayName" 
          value={displayName} 
          onChange={handleChange} 
        />

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

        <FormInput
          label="Confirm Password" 
          type="password" 
          name="passwordConfirm" 
          value={passwordConfirm} 
          onChange={handleChange} 
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default SignUpForm
