import './DynamicClubRoomComponent.scss';
import { useParams } from 'react-router-dom';
function DynamicClubRoomComponent() {
    const { formattedDate } = useParams();

    const handleButtonClick = (tableNumber, e) => {
        e.preventDefault();
        console.log(`Table ${tableNumber} clicked!`);
    };

    return ( 
        <>
            <div className='tables-left'>
                <button onClick={(e) => handleButtonClick(1, e)}>1</button>
                <button onClick={(e) => handleButtonClick(2, e)}>2</button>
                <button onClick={(e) => handleButtonClick(3, e)}>3</button>
                <button onClick={(e) => handleButtonClick(4, e)}>4</button>
            </div>
            <div className='center'>
                <div className='deco'>
                    <div className='monitor'>
                        <p>Monitor</p>
                    </div>
                    <div className='scene'>
                        <p>Scene</p>
                    </div>
                </div>
                <div className='order-info'>
                    <p className='time'>{`Date: ${formattedDate?.slice(0, 10)}`}</p>
                </div>
                
                <div className='tables-midle'>
                    <div className='line1'>
                        <button onClick={(e) => handleButtonClick(5, e)}>5</button>
                        <button onClick={(e) => handleButtonClick(6, e)}>6</button>
                        <button onClick={(e) => handleButtonClick(7, e)}>7</button>
                    </div>
                    <div className='line2'>
                        <button onClick={(e) => handleButtonClick(8, e)}>8</button>
                        <button onClick={(e) => handleButtonClick(9, e)}>9</button>
                        <button onClick={(e) => handleButtonClick(10, e)}>10</button>
                        <button onClick={(e) => handleButtonClick(11, e)}>11</button>
                        <button onClick={(e) => handleButtonClick(12, e)}>12</button>
                    </div>
                </div>
            </div>
            <div className='tables-right'>
                <button onClick={(e) => handleButtonClick(16, e)}>16</button>
                <button onClick={(e) => handleButtonClick(15, e)}>15</button>
                <button onClick={(e) => handleButtonClick(14, e)}>14</button>
                <button onClick={(e) => handleButtonClick(13, e)}>13</button>
            </div>
        </>
        
    );
}

export default DynamicClubRoomComponent;