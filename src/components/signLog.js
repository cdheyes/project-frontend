import { useState } from "react";
import { signUp, logIn } from "../utils/index";
import "../style/login.css";

export const SignForm = ({setUser}) => {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const submitSignUpHandler = (e) => {
        e.preventDefault();
        signUp(username, email, password, setUser);
    }

    return (
        <form className= "signForm" onSubmit={submitSignUpHandler}>
            <input className="inputBox" onChange={(e) => setUsername(e.target.value)} 
            placeholder="Username"/>
            <input className="inputBox" onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
            <input className="inputBox" onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
            <button className="actionBtn" type="submit" > Sign-up </button>
        </form>

        
    )

}

export const LogForm = ({setUser}) => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const submitLogInHandler = (e) => {
        e.preventDefault();
        logIn(username, password, setUser);
    }

    return (
        <form className= "logForm" onSubmit={submitLogInHandler}>
            <input className="inputBox" onChange={(e) => setUsername(e.target.value)} 
            placeholder="Username"/>
            <input className="inputBox" onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
            <p></p>
            <button className="actionBtn" type="submit" > Log-in</button>
        </form>

        
    )

}