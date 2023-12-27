import './EmailAndPassfordAutorization.scss';

import { NavLink, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { auth } from "../../../../firestoreSDK";
import Cookies from "js-cookie";

function EmailAndPassfordAutorization() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        const userTokenFromCookie = Cookies.get('userToken');

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user && userTokenFromCookie !== undefined) {
                navigate('/home/orderdata/:formattedDate');
            }else{
                console.log('время действия токена окончено или вы не зарегистрированы - авторизуйтесь ещё раз!')
            }
        });

        return () => unsubscribe();

    }, [navigate]);


    const logIn = async (e) => {
        e.preventDefault();

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            setError("");
            setEmail("");
            setPassword("");

            // Set userToken cookie with a one-month expiration
            Cookies.set('userToken', user.accessToken, { expires: 30 });

            navigate('/home/orderdata/:formattedDate');
            
        } catch (error) {
            console.error(error);
            setError("ИЗВИНИТЕ, НЕ УДАЛОСЬ НАЙТИ ВАШ АККАУНТ");
        }
    };

    return (
        <section className='form-conteiner'>
            <form action="">
                <div className='input-conteiner'>

                <input
                    placeholder="Пожалуйста, введите свой адрес электронной почты"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="email"
                    id="email"
                />
                
                <input
                    placeholder="Пожалуйста, введите свой пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="current-password"
                    name="password"
                    id="password"
                />
                {error ? <p style={{ color: "red" }}>{error}</p> : ""}

                </div>
                <div className='auth-info'>
                    <p>Not registered yet?</p>
                    <NavLink to="/registration">Register now!</NavLink>
                </div>
                <button onClick={logIn}>Login</button>
            </form>
        </section>
    );
}

export default EmailAndPassfordAutorization;