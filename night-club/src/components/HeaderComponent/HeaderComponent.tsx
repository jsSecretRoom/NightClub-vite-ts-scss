import './HeaderComponent.scss';
import { NavLink } from 'react-router-dom';
function HeaderComponent() {
    return ( 
        <header>
            <nav>
                <ul>
                    <h5>Elite Express Club</h5>
                    <li><NavLink to=''>Kitchen</NavLink></li>
                    <li><NavLink to=''>Entertainment</NavLink></li>
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