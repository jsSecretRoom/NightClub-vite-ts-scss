// TableButton.jsx
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { io } from 'socket.io-client';
import './TableButton.scss';

const socketIo = io.connect('http://localhost:5000');

function TableButton({ tableNumber, isTableReserved }: { tableNumber: number; isTableReserved: boolean }) {
    const { formattedDate } = useParams();
    const [isReserved, setIsTableReserved] = useState(isTableReserved);

    useEffect(() => {
        setIsTableReserved(isTableReserved); // Обновляем isReserved при изменении props
    }, [isTableReserved]);

    const handleButtonClick = (e) => {
        let jsnumber = tableNumber - 1;
        e.preventDefault();
        const action = isReserved ? 'releaseTable' : 'reserveTable';
        socketIo.emit(action, { jsnumber, formattedDate });

        // Обновляем локальное состояние стола
        setIsTableReserved(!isReserved);
    };

    return (
        <button onClick={handleButtonClick} className={`${isReserved ? 'reserved' : ''}`}>
            {tableNumber}
        </button>
    );
}

export default TableButton;