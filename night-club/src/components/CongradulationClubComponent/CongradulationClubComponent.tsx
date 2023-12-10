import './CongradulationClubComponent.scss';

import { useRef } from 'react';

import video from '../../assets/videos/video1.mp4'



function CongradulationClubComponent() {
    const videoRef = useRef(null);

    const handleVideoEnd = () => {
      // Перезапуск воспроизведения при завершении
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }
    };
    
    return ( 
        
        
            <section className='vido-conteiner'>
                <video   muted autoPlay onEnded={handleVideoEnd} ref={videoRef}>
                    <source src={video} type="video/mp4" />
                </video>
                <div className='videoUi'>
                    <div className='congradulation-club'>

                    </div>
                </div>
            </section>

        
       
    );
}

export default CongradulationClubComponent;