// DynamicClubRoomComponent.jsx
import './DynamicClubRoomComponent.scss';
import TableButton from './TableButton/TableButton';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socketIo = io.connect('http://localhost:5000');

function DynamicClubRoomComponent() {
    const { formattedDate } = useParams();
    const [reservedTables, setReservedTables] = useState([]);
    
    useEffect(() => {
        if (formattedDate) {
            console.log('Joining room for date:', formattedDate);
            socketIo.emit('join', formattedDate);
        }
    }, [formattedDate]);
    
    useEffect(() => {
        const handleUpdateTables = (updatedTables) => {
            console.log('Received updated table states for date:', formattedDate, updatedTables);
            setReservedTables(updatedTables);
        };
    
        socketIo.on('updateTables', handleUpdateTables);
    
        return () => {
            socketIo.off('updateTables', handleUpdateTables);
        };
    }, [formattedDate, setReservedTables]);

    const teblesGrynder = (tables, date, tablelStart, tableEnd) => {
        const tablesGroup = tables.slice(tablelStart - 1, tableEnd);
        
        return tablesGroup.map((table, index) => (
            <TableButton
                key={tablelStart + index + date}
                tableNumber={tablelStart + index}
                isTableReserved={table.reserved}
            />
        ));
    };

    return ( 
        <>
            <div className='tables-left'>
                {teblesGrynder(reservedTables, formattedDate, 1, 4)}
            </div>
            <div className='center'>
                <div className='deco'>
                    <div className='monitor'></div>
                    <div className='scene'></div>
                </div>
                
                <div className='order-info'>
                    <p className='time'>{`Date: ${formattedDate?.slice(0, 10)}`}</p>
                </div>
                
                <div className='tables-midle'>
                    <div className='line1'>
                        {teblesGrynder(reservedTables, formattedDate, 9, 11)}
                    </div>
                    <div className='line2'>
                        {teblesGrynder(reservedTables, formattedDate, 12, 16)}
                    </div>
                </div>
            </div>
            <div className='tables-right'>
                {teblesGrynder(reservedTables, formattedDate, 5, 8)}
            </div>
        </>
        
    );
}

export default DynamicClubRoomComponent;