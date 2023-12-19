import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import userico from '../../assets/ico/userico.png';
import colocol from '../../assets/ico/colocol.png';
import menu from '../../assets/ico/menu.svg';
import './HeaderComponent.scss';

function HeaderComponent() {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const visible = prevScrollPos > currentScrollPos;

            setPrevScrollPos(currentScrollPos);
            setVisible(visible);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <header className={`header-animation ${visible ? '' : 'hidden'}`}>
            <nav>
                <section className='nav-container'>
                    <div className='logo'>
                        <NavLink to='/home/orderdata/:formattedDate'><h5>Elite_Express_Club</h5></NavLink>
                    </div>
                    <div className='features-container'>
                        <ul>
                            <li><NavLink to='/kitchen'>Kitchen</NavLink></li>
                            <li><NavLink to='/entertainment'>Entertainment</NavLink></li>
                            <li><NavLink to='/concerts'>Concerts</NavLink></li>
                            <li><NavLink to='/events'>Events</NavLink></li>
                        </ul>

                        <section className='features'>
                            <button className='main-button'><img src={menu} alt="menu" /></button>
                            <button><img src={colocol} alt="colocol" /></button>
                            <button><img src={userico} alt="userico" /></button>
                        </section>
                    </div>
                </section>
            </nav>
        </header>
    );
}

export default HeaderComponent;