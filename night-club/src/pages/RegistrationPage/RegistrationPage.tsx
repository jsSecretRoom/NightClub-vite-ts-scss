import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firestoreSDK";

import './RegistrationPage.scss';
function RegistrationPage() {

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
        })
        .catch((error) => console.log(error));
    }

    return ( 
        <main className='autorization-form'>
            <div className='autorization-conteiner'>
                <form onSubmit={register}>
                    <h2>Create an account</h2>
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
                    <input
                        placeholder="Please enter your password again"
                        value={copyPassword}
                        onChange={(e) => setCopyPassword(e.target.value)}
                        type="password"
                    />
                    <button>Create</button>
                    {error ? <p style={{ color: "red" }}>{error}</p> : ""}
                </form>
            </div>
            

        </main>
    );
}

export default RegistrationPage;