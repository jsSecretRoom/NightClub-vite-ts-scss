import './EmailAndPassfordRegistration.scss';

import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../../../firestoreSDK";
import { useNavigate, NavLink } from "react-router-dom";


function EmailAndPassfordRegistration() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [copyPassword, setCopyPassword] = useState("");
    const [error, setError] = useState("");

    function register(e) { 
        e.preventDefault();
        if (copyPassword !== password) {
            setError("Passwords didn't match");
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
            console.log(user);
            setError("");
            setEmail("");
            setCopyPassword("");
            setPassword("");
            navigate('/authorization');
        })
        .catch((error) => {
            console.log(error)
            setError('error autorizition')
        });
    }
    return ( 
        <div className='autorization-conteiner'>
            <form onSubmit={register}>
                <h2>Register now!</h2>
                <input
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                />
                <input
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                />
                <input
                    placeholder="Кepeat password again"
                    value={copyPassword}
                    onChange={(e) => setCopyPassword(e.target.value)}
                    type="password"
                    
                />
                <div className="comment">
                    <p>Already registered?</p>
                    <NavLink to={'/authorization'}>log in now!</NavLink>
                </div>
                <button>Create</button>
                {error ? <p style={{ color: "red" }}>{error}</p> : ""}
            </form>
        </div>
    );
}

export default EmailAndPassfordRegistration;