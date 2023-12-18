import './HeaderComponent.scss';
import { NavLink } from 'react-router-dom';
function HeaderComponent() {
    return ( 
        <header>
            <nav>
                <section className='nav-conteiner'>
                    <div className='logo'>
                        <NavLink to='/home/orderdata/:formattedDate'><h5>Elite_Express_Club</h5></NavLink>
                    </div>
                    <div className='features-conteiner'>
                        <ul>
                            <li><NavLink to='/kitchen'>Kitchen</NavLink></li>
                            <li><NavLink to='/entertainment'>Entertainment</NavLink></li>
                            <li><NavLink to=''>Concerts</NavLink></li>
                            <li><NavLink to=''>Events</NavLink></li>
                        </ul>
                        <section className='features'>
                            <button><img src="" alt="" /></button>
                            <button><img src="" alt="" /></button>
                            <button><img src="" alt="" /></button>
                            <button><img src="" alt="" /></button>
                        </section>
                    </div>
                </section>
            </nav>
        </header>
    );
}

export default HeaderComponent;