import './HeaderComponent.scss';
import { NavLink } from 'react-router-dom';
function HeaderComponent() {
    return ( 
        <header>
            <nav>
                <ul> 
                    <NavLink to='/home'><h5>Elite Express Club</h5></NavLink>
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
            </nav>
        </header>
    );
}

export default HeaderComponent;