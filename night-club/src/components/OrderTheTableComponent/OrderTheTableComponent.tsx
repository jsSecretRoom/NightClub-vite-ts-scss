import './OrderTheTableComponent.scss';
import { Outlet } from 'react-router-dom';
import ClubСalendar from './ClubСalendar/ClubСalendar';
import TimeRangeSlider from '../TimeRangeSlider/TimeRangeSlider';

function OrderTheTableComponent() {
    return ( 
        <section className="order-the-table-conteiner">
            <h2>Reserve a place</h2>
            <div className='order-conteiner'>
                
                <form action="">
                    <div className='form-conteiner'>
                        <ClubСalendar/>
                        <div className='form-data'>
                            <TimeRangeSlider/>
                            <input type="number" name="phoneNumber" id="" placeholder='Phone number'/>
                            <input type="text" name="personName" id="" placeholder='Your name'/>
                            <input type="text" name="personSurname" id="" placeholder='Your Surname'/>
                            <button type="submit">Reserve</button>
                        </div>
                        <div className='club-room'>
                            <Outlet/>
                        </div>
                    </div>
                    
                </form>
            </div>
        </section>
    );
}

export default OrderTheTableComponent;