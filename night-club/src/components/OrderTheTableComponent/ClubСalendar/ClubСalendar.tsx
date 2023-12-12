import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';
import './ClubСalendar.scss';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

function ClubСalendar() {
  const [value, onChange] = useState<Value>(new Date());
  const navigate = useNavigate();

  // Функция для проверки, должна ли дата быть отключена (disabled)
  const tileDisabled = ({ date, view }) => {
    // For disabling dates that have already passed, check if the current date is earlier than today
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set time to midnight
  
    return view === 'month' && date < today;
  };

  useEffect(() => {
    // Округлить дату до начала дня
    const roundedDate = new Date(value);
    roundedDate.setHours(0, 0, 0, 0);
  
    // Добавить 2 часа
    roundedDate.setHours(roundedDate.getHours() + 2);
  
    // Форматируйте округленную и измененную дату в строку
    const formattedDate = roundedDate.toISOString();
  
    // Переадресация на новый URL с отформатированной и округленной датой
    navigate(`/home/orderdata/${formattedDate}`);
  }, [value, navigate]);

  return (
    <section className='calendar'>
      <Calendar onChange={onChange} value={value} tileDisabled={tileDisabled} />
    </section>
  );
}

export default ClubСalendar;