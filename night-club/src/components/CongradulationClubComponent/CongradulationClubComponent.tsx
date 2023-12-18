import './CongradulationClubComponent.scss';

import { useRef } from 'react';
import { NavLink } from 'react-router-dom';

import RestaurantMenu from '../RestaurantMenu/RestaurantMenu';

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

      <div className='videoUi'>
          <div className='background-video-conteiner'>
            <video   muted autoPlay onEnded={handleVideoEnd} ref={videoRef}>
              <source src={video} type="video/mp4" />
            </video>
          </div>
        <div className='ui-video-continer'>
          <div className='congradulation-club1'>
            <NavLink to={''}>
              <h2>Розклад</h2>
            </NavLink>
            
            <ul>
              <li>Початок роботи: 9:00 ранку</li>
              <li>Кухня зачиняеться: 20:00 вечора</li>
              <li>Бар працюе до: 2:00 ночі</li>
              <li>Казино працюе з 18:00 до 22:00</li>
              <li>У суботу працюемо 24/7!</li>
              <li>Що пятниці - тематична вечірка!</li>
              <li>Стендапи по неділях!</li>
              <li>Віп-зона працюе цілодобово!</li>
            </ul>
          </div>
          <div className='congradulation-club2'>
            <NavLink to={''}><h2>Тематические вечеринки</h2></NavLink>
            
            <p>Не пропусти наши тематические вечеринки! От стиля 80-х до футуристических тем — настоящий карнавал стилей и веселья! Присоединяйся и окунись в мир удивительных перевоплощений!</p>
          </div>
          <div className='congradulation-club3'>
            <NavLink to={''}><h2>Memu</h2></NavLink>
            
            <p>Перейдіть до розділу кухня щоб побаити більше!</p>
            <RestaurantMenu/>
          </div>
          <div className='congradulation-club4'>
            <NavLink to={''}><h2>Вечер-стендапа</h2></NavLink>
              
              <p>Угар и позитив только у нас! Забудь о повседневности на наших стендап-вечерах "Смех на Первом". Каждую неделю встречайте топовых комиков, приносящих в вашу жизнь порцию невероятного юмора. Готовьтесь к смеховой атаке – в нашем клубе каждый смешной момент становится легендой!</p>
          </div>
          <div className='congradulation-club5'>
            <NavLink to={''}><h2>VIP-зона</h2></NavLink>
              
              <p>Для наших особенных гостей у нас есть VIP-зоны с уникальным сервисом. Здесь ты сможешь насладиться ночью в полном комфорте, окруженный стильным дизайном и вниманием персонала. 
                Забронируй свою VIP-зону уже сегодня и почувствуй себя звездой нашего ночного клуба!</p>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default CongradulationClubComponent;