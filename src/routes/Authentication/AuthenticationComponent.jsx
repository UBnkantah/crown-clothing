import SignUpForm from "../SignUpForm/SignUpFormComponent";
import SignInForm from "../SignInForm/SignInFormComponent";


const Authentication = () => {

    return (
        <div className="authentication-container">
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default Authentication