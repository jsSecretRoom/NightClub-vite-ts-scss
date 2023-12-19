import './AutorizationPage.scss';

import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firestoreSDK";

import { NavLink } from 'react-router-dom';

function AutorizationPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    function logIn(e) {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
        .then((user) => {
            console.log(user);
            setError("");
            setEmail("");
            setPassword("");
        })
            .catch((error) => {
                console.log(error);
                setError("SORRY, COULDN'T FIND YOUR ACCOUNT")
        });
    }

    return ( 
        <main className='registr-form'>
            <div className='registration-conteiner'>
                <section className='apyRegistration'>
                    <div>google-autorization</div>
                    <div>fasebook-autorization</div>
                    <div>tviter-autorization</div>
                    <div>anathr-autorization</div>
                </section>
                <section className='form-conteiner'>
                    <form action="">
                        <div className='input-conteiner'>

                            <input
                                placeholder="Please enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                            />

                            <input
                                placeholder="Please enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                            />
                            {error ? <p style={{ color: "red" }}>{error}</p> : ""}

                        </div>
                        <div className='auth-info'>
                            <p>Not registered yet?</p>
                            <NavLink to="/registration">Register now!</NavLink>
                        </div>
                        <NavLink to="/home/orderdata/:formattedDate"><button onClick={logIn}>Login</button></NavLink>
                    </form>
                </section>
            </div>
        </main>
    );
}

export default AutorizationPage;