import './AutorizationPage.scss';
import { NavLink } from 'react-router-dom';

function AutorizationPage() {
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
                            <input type="email" name="" id="" placeholder='Email'/>
                            <input type="password" name="" id="" placeholder='Password'/>
                        </div>
                        <div className='auth-info'>
                            <p>Not registered yet?</p>
                            <NavLink to="/registration">Register now!</NavLink>
                        </div>
                        <NavLink to="/home"><button type='submit'>Log in</button></NavLink>
                        
                    </form>
                </section>
            </div>
        </main>
    );
}

export default AutorizationPage;