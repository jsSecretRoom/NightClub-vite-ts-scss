import DropdownMain from './DropdownMain/DropdownMain';
import SociallLincs from './SociallLincs/SociallLincs';
import './FuterComponent.scss';
function FuterComponent() {
    const punctsProps1 : string[] = [
    'Order a personal party', 
    'Private concerts',
    'Info',
    'Contact us',
    'Confidence']
    const punctsProps2 : string[] = [
    'Kitchen',
    'entertainment',
    'concerts',
    'hotline',]
  
    return ( 
        <footer>
            <div className='footer-conteiner'>
                <div className='dropdowns'>
                    <div className='drop-group'>
                        <DropdownMain 
                            forSomevone={'For partners'}
                            puncts={punctsProps1}
                        />
                        <DropdownMain
                            forSomevone={'for a visitors'}
                            puncts={punctsProps2}
                        />
                    </div>
                </div>
                <SociallLincs/>
            </div>

        </footer>
    );
}

export default FuterComponent;