import './SociallLincs.scss';
import { NavLink } from 'react-router-dom';

import facebook from '../../../assets/ico/facebook_3d.png';
import instagram from '../../../assets/ico/instagram_3d.png';
import telegram from '../../../assets/ico/telegram_3d.png';
import twitter from '../../../assets/ico/twitter_3d.png';
import youtube from '../../../assets/ico/youtube_3d.png';

function SociallLincs() {
    return (
        <div className='company-info' >
            <section className='confidense-info'>
                <div className='confidence'>
                    <h4>Elite Express Club</h4>
                    <p>We guarantee your anonymity!</p>
                    <p>All rights reserved!</p>
                    <p></p>
                </div>
                <div className='confidence'>
                    <h4>Elite Express Club</h4>
                    <p>We guarantee your anonymity!</p>
                    <p>All rights reserved!</p>
                    <p></p>
                </div>
                <div className='confidence'>
                    <h4>Elite Express Club</h4>
                    <p>We guarantee your anonymity!</p>
                    <p>All rights reserved!</p>
                    <p></p>
                </div>
                <div className='confidence'>
                    <h4>Elite Express Club</h4>
                    <p>We guarantee your anonymity!</p>
                    <p>All rights reserved!</p>
                    <p></p>
                </div>
                <div className='confidence'>
                    <h4>Elite Express Club</h4>
                    <p>We guarantee your anonymity!</p>
                    <p>All rights reserved!</p>
                    <p></p>
                </div>
                <div className='confidence'>
                    <h4>Elite Express Club</h4>
                    <p>We guarantee your anonymity!</p>
                    <p>All rights reserved!</p>
                    <p></p>
                </div>
                <div className='confidence'>
                    <h4>Elite Express Club</h4>
                    <p>We guarantee your anonymity!</p>
                    <p>All rights reserved!</p>
                    <p></p>
                </div>
            </section>
            <section className='sociall-lincs'>
                
                <div className='links'>
                    <p>Follow the life of the club in social networks!</p>
                    <NavLink to=''><img src={facebook} alt="facebook" /></NavLink>
                    <NavLink to=''><img src={instagram} alt="instagram" /></NavLink>
                    <NavLink to=''><img src={telegram} alt="telegram" /></NavLink>
                    <NavLink to=''><img src={twitter} alt="twitter" /></NavLink>
                    <NavLink to=''><img src={youtube} alt="youtube" /></NavLink>
                </div>
            </section>
        </div> 

    );
}

export default SociallLincs;