import './SiteSlider.scss';

import {NextArrow, PrevArrow} from './sliderArrows/SampleArrows';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SiteSlider({sliderFoto, sliderName, setSliderName} : { sliderFoto : string[], sliderName : string, setSliderName: (sliderName: string) => void}) {

    let settings = {
        dots: true,
        infinite: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        afterChange: (currentSlide: number) => handleAfterChange(currentSlide),
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>
    };

    const handleAfterChange = (currentSlide: number) => {
        setTimeout(() => {

            if (currentSlide === sliderFoto.length - 1) {
                if(sliderName === 'first') {
                    setSliderName('second');
                } else if(sliderName === 'second') {
                    setSliderName('third');
                } else if(sliderName === 'third') {
                    setSliderName('fifs');
                } else {
                    setSliderName('first');
                }
            }
        }, 4000);
    };

    return ( 

        <section className='slider-conteiner'>
            
            <ul className='slider'>
                <Slider {...settings}>
                    {sliderFoto.map((item, index) => (
                        <li className='img-item' key={index}>
                            <img src={item} alt={item}/>
                        </li>
                    ))}
                </Slider>
            </ul>
        </section>
    );
}

export default SiteSlider;