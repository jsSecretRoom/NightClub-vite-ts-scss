import './OrderTheTableComponent.scss';
function OrderTheTableComponent() {
    return ( 
        <section className="order-the-table-conteiner">
            <h2>Reserve a place</h2>
            <div className='order-conteiner'>
                
                <form action="">
                    <div className='form-data'>
                        <input type="number" name="phoneNumber" id="" placeholder='Phone number'/>
                        <input type="text" name="personName" id="" placeholder='Your name'/>
                        <input type="text" name="personSurname" id="" placeholder='Your Surname'/>
                        <button>Reserve</button>
                    </div>

                    <div className='Club-room'>

                    </div>

                </form>
                

            </div>
        </section>
    );
}

export default OrderTheTableComponent;