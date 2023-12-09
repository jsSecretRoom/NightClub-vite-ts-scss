import './HomePage.scss';

import { useRef } from 'react';

import CategorySlider from '../../components/CategorySier/CategorySlider';

import video from '../../assets/videos/video1.mp4'



function HomePage() {
    const videoRef = useRef(null);

    const handleVideoEnd = () => {
      // Перезапуск воспроизведения при завершении
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }
    };
    return ( 
        <main>
            <div className='home-page-conteiner'>
                <section className='vido-conteiner'>
                    <video width="1920px" height="1080px"  muted autoPlay onEnded={handleVideoEnd} ref={videoRef}>
                        <source src={video} type="video/mp4" />
                    </video>
                    <div className='videoUi'>
                        <div className='congradulation-club'>

                        </div>
                    </div>
                </section>
                <CategorySlider/>
            </div>
        </main>
    );
}

export default HomePage;