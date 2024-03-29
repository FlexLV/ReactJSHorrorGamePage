import React, { useState } from "react";
import "./LoginSignup.css";
import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";

const LoginSignup = () => {
    const [action, setAction] = useState("Login");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault(); 
    
        console.log(firstName, lastName, username, email, password);
    
        const url = action === "Login" ? 'http://localhost/login.php' : 'http://localhost/signup.php';
        const formData = new FormData();
        formData.append('firstname', firstName);
        formData.append('lastname', lastName);
        formData.append('username', username);
        formData.append('email', email);
        formData.append('password', password);
    
        fetch(url, {
            method: 'POST',
            body: formData,
        })
        .then(response => response.text())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };
    const buttonText = action === "Sign up" ? "Register" : "Log into account";
    return (
        <div className="background-login">
            <div className="container-login">
                <div className={action === "Sign up" ? "box-container-signup" : "box-container-login"}>
                <div className="header-login">
                    <div className="text">{action}</div>
                    <div className="underline"></div>
                </div>
                <form onSubmit={handleSubmit} method="post">
                <div className="inputs">
                    {action === "Sign up" && <>
                        <div className="input">
                            <img src={user_icon} alt="User Icon" />
                            <input type="text" placeholder="Enter your first name" value={firstName} onChange={e => setFirstName(e.target.value)} />
                        </div>
                        <div className="input">
                            <img src={user_icon} alt="User Icon" />
                            <input type="text" placeholder="Enter your last name" value={lastName} onChange={e => setLastName(e.target.value)} />
                        </div>
                        <div className="input">
                            <img src={user_icon} alt="User Icon" />
                            <input type="text" placeholder="Enter username" value={username} onChange={e => setUsername(e.target.value)} />
                        </div>
                    </>}
                    <div className="input">
                        <img src={email_icon} alt="Email Icon" />
                        <input type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="input">
                        <img src={password_icon} alt="Password Icon" />
                        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                </div>
                {action === "Sign up" ? null : <div className="forgot-password">Lost Password? <span onClick={() => {
                    
                }}>Click Here!</span></div>}
                <div className="submit-container">
                    <button className={action === "Sign up" ? "submit green" : "submit green"} type="submit">{buttonText}</button>
                    <div className="position-of-both-login-signup">
                        <div className={action === "Login" ? "submit marginss" : "submit gray marginss"} onClick={() => { setAction("Sign up") }}>Sign Up</div>
                        <div className={action === "Sign up" ? "submit" : "submit gray"} onClick={() => { setAction("Login") }}>Login</div>
                    </div>
                </div>
                </form>
                </div>
            </div>
        </div>
    );
}

export default LoginSignup;