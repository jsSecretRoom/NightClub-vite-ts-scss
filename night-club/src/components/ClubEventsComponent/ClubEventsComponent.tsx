import './ClubEventsComponent.scss';

import { NextArrow, PrevArrow } from '..//SiteSlider/sliderArrows/SampleArrows';

import { useMediaQuery } from 'react-responsive';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import slide1 from '../../assets/img/seconSlider/slide1.svg'
import slide2 from '../../assets/img/seconSlider/slide2.svg'
import slide3 from '../../assets/img/seconSlider/slide3.svg'
import slide4 from '../../assets/img/seconSlider/slide4.svg'
import slide5 from '../../assets/img/seconSlider/slide5.svg'
import slide6 from '../../assets/img/seconSlider/slide6.svg'

const sliderItems = [slide1, slide2, slide3, slide4, slide5, slide6]


function ClubEventsComponent() {

    const isExtraWideScreen = useMediaQuery({ minWidth: 1500 });
    const isWideScreen = useMediaQuery({ minWidth: 950, maxWidth: 1499 });
    const slidersShowCount = isExtraWideScreen ? 3 : isWideScreen ? 2 : 1;

    let settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: slidersShowCount,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <section className="club-evnts-conteiner">
            <div className="header-events">
                <h2>Don't miss upcoming events!</h2>
                <div className='agitation'>
                    <p>Cool parties every Friday!</p>
                    <p>Concerts, stand-ups, celebrities</p>
                </div>
            </div>
            <div className="slider-events-info">
                <Slider {...settings}>
                    {sliderItems.map((item, index) => (
                        <li className='img-item' key={index}>
                            <div className='foto'>
                                <img src={item} alt={item}/>
                            </div>
                            
                        </li>
                    ))}

                </Slider>
            </div>
        </section>
    );
}

export default ClubEventsComponent;