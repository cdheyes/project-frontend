import { SignForm } from "../components/signLog"
import { LogForm } from "../components/signLog"
import { Footer } from "../components/footer";
import { useState } from "react";

import "../style/login.css";

const Login = () => {
    const [user, setUser] = useState();
    return (
        <div className="formContainer">
            <div className="signUpForm">
                <h1 className="sectionHeader">Sign-up</h1>
                <p> Need an account? sign-up for free today! </p>
                {!user && <SignForm setUser={setUser} />}
            </div>

            <div className="logInForm">
                <h1 className="sectionHeader">Log-in</h1>
                <p> Already got an account? Log in here</p>
                {!user && <LogForm setUser={setUser} />}
            </div>
            <Footer />
        </div>
        
    )
}

export default Login