import React from 'react';
import './SlidersCategories.scss';

function SlidersCategories({ setSliderName, sliderName }: { setSliderName: (sliderName: string) => void; sliderName: string }) {
  const changeSlider = (e: React.MouseEvent<HTMLButtonElement>) => {
    const sliderValue = e.currentTarget.getAttribute('data-value') || '';
    setSliderName(sliderValue);
  };

  return (
    <div className='categories'>
      <section className='tabs-name'>
        <button className={`tab ${sliderName === 'first' ? 'active' : ''}`} onClick={changeSlider} data-value={'first'}>
          Kitchen
        </button>
        <button className={`tab ${sliderName === 'second' ? 'active' : ''}`} onClick={changeSlider} data-value={'second'}>
          Entertainment
        </button>
        <button className={`tab ${sliderName === 'third' ? 'active' : ''}`} onClick={changeSlider} data-value={'third'}>
          Concerts
        </button>
        <button className={`tab ${sliderName === 'fifs' ? 'active' : ''}`} onClick={changeSlider} data-value={'fifs'}>
          Private parties
        </button>
      </section>
    </div>
  );
}

export default SlidersCategories;