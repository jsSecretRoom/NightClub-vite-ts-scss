import './RegistrationPage.scss';

import EmailAndPassfordRegistration from '../../components/Autorization&Registration/Registration/EmailAndPassfordRegistration/EmailAndPassfordRegistration';

function RegistrationPage() {
    
    return ( 
        <main className='autorization-form'>
            <EmailAndPassfordRegistration/>
        </main>
    );
}

export default RegistrationPage;