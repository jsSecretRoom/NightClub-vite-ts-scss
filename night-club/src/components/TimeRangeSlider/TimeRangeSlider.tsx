import { useState } from 'react';

import './TimeRangeSlider.scss';

const TimeRangeSlider = () => {
    const [selectedTime, setSelectedTime] = useState(9 * 60); // Время в минутах (9:00 утра)
    
    const handleInputChange = (event) => {
      setSelectedTime(parseInt(event.target.value, 10));
    };
  
    const formatTime = (minutes) => {
      const hours = Math.floor(minutes / 60);
      const mins = minutes % 60;
      return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}`;
    };
  
    return (
        <div>
            <p>The restaurant is open from 9:00 to 20:00.</p>
            <p>Selected time: {formatTime(selectedTime)}</p>
            <input
                type="range"
                min={9 * 60}   // Минимальное значение (9:00 утра)
                max={19 * 60}  // Максимальное значение (19:00 вечера)
                step={30}      // Шаг в минутах (полчаса)
                value={selectedTime}
                onChange={handleInputChange}
            />
        </div>
    );
  };
  

export default TimeRangeSlider;