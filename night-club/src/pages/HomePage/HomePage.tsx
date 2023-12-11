import SiteSlider from "../../components/SiteSlider/SiteSlider";

import CongradulationClubComponent from "../../components/CongradulationClubComponent/CongradulationClubComponent";
import SlidersCategories from "../../components/SiteSlider/SlidersCategories/SlidersCategories";
import DecorationBottomLine from "../../components/DecorationBottomLine/DecorationBottomLine";
import ClubEventsComponent from "../../components/ClubEventsComponent/ClubEventsComponent";
import OrderTheTableComponent from "../../components/OrderTheTableComponent/OrderTheTableComponent";

import { useState} from "react";

import concertimg1 from '../../assets/img/slidersimg/Concertsimg/concrtimg1.svg'
import concertimg2 from '../../assets/img/slidersimg/Concertsimg/concrtimg2.svg'
import concertimg3 from '../../assets/img/slidersimg/Concertsimg/concrtimg3.svg'
import concertimg4 from '../../assets/img/slidersimg/Concertsimg/concrtimg4.svg'

const concertSlider = [concertimg1, concertimg2, concertimg3, concertimg4];

import kitchenimg1 from '../../assets/img/slidersimg/Kitchenimg/kitchenimg1.svg'
import kitchenimg2 from '../../assets/img/slidersimg/Kitchenimg/kitchenimg2.svg'
import kitchenimg3 from '../../assets/img/slidersimg/Kitchenimg/kitchenimg3.svg'
import kitchenimg4 from '../../assets/img/slidersimg/Kitchenimg/kitchenimg4.svg'

const kitchenSlider = [kitchenimg1, kitchenimg2, kitchenimg3, kitchenimg4];

import entertainmentimg1 from '../../assets/img/slidersimg/Entertainmentimg/entertainmentimg1.svg'
import entertainmentimg2 from '../../assets/img/slidersimg/Entertainmentimg/entertainmentimg2.svg'
import entertainmentimg3 from '../../assets/img/slidersimg/Entertainmentimg/entertainmentimg3.svg'
import entertainmentimg4 from '../../assets/img/slidersimg/Entertainmentimg/entertainmentimg4.svg'

const entertainmentSlider = [entertainmentimg1, entertainmentimg2, entertainmentimg3, entertainmentimg4];

import privatePartiesimg1 from '../../assets/img/slidersimg/PrivatePartiesimg/privatePartiesimg1.svg'
import privatePartiesimg2 from '../../assets/img/slidersimg/PrivatePartiesimg/privatePartiesimg2.svg'
import privatePartiesimg3 from '../../assets/img/slidersimg/PrivatePartiesimg/privatePartiesimg3.svg'
import privatePartiesimg4 from '../../assets/img/slidersimg/PrivatePartiesimg/privatePartiesimg4.svg'

const privatePartiesSlider = [privatePartiesimg1, privatePartiesimg2, privatePartiesimg3, privatePartiesimg4];


function HomePage() {
    
    let [sliderName, setSliderName] = useState('first');
    let currentSlider = kitchenSlider;

        if(sliderName === 'first') {
            currentSlider = kitchenSlider;
        } else if(sliderName === 'second') {
            currentSlider = entertainmentSlider;
        } else if(sliderName === 'third') {
            currentSlider = concertSlider; 
        } else {
            currentSlider = privatePartiesSlider;
        }

    return ( 
        <div className='home-page-container'>
            <CongradulationClubComponent/>
            <SlidersCategories setSliderName={setSliderName} sliderName={sliderName}/>
            <SiteSlider sliderFoto={currentSlider} sliderName={sliderName} setSliderName={setSliderName}/>
            <OrderTheTableComponent/>
            <DecorationBottomLine/>
            <ClubEventsComponent/>
            <DecorationBottomLine/>
        </div>
    );
}

export default HomePage;