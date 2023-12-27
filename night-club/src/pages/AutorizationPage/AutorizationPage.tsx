import './AutorizationPage.scss';

import EmailAndPassfordAutorization from '../../components/Autorization&Registration/Autorization/EmailAndPassfordAutorization/EmailAndPassfordAutorization';

function AutorizationPage() {

    return ( 
        <main className='registr-form'>
            <div className='registration-conteiner'>
                <h2>log in now!</h2>
                <section className='apyRegistration'>
                    <div>google-autorization</div>
                    <div>fasebook-autorization</div>
                    <div>tviter-autorization</div>
                    <div>anathr-autorization</div>
                </section>
                <EmailAndPassfordAutorization/>
            </div>
        </main>
    );
}

export default AutorizationPage;