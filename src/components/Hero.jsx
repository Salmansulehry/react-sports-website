import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

import playIcon from '/images/play-icon.png';
import videoThunbnail from '/images/video-thumbnail-img.png';
import reebokLogo from '/images/reebok-logo.png';

export const Hero = () => {
  // const sliderImages = [
  //   { image: thumbnailImg },
  //   { image: thumbnailImg },
  //   { image: thumbnailImg },
  //   { image: thumbnailImg },
  //   { image: thumbnailImg },
  //   { image: thumbnailImg },
  //   { image: thumbnailImg },
  // ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true,
  };
  useEffect(() => {
    Fancybox.bind('[data-fancybox]', {
      infinite: false,
    });

    return () => {
      Fancybox.destroy();
    };
  }, []);
  return (
    <>
    <div className="hero-baner">
    <h1>HOME PAGE</h1>
    <div className='hero-baner-logo'>
      <h4>PARTNERSHIP BY</h4>
      <img src={reebokLogo} alt="" />
    </div>
  </div>
    <section className="hero">
      <Slider {...settings}>
        <div className="hero-items">
          <div className="hero-video">
            <img className="video-frame" src={videoThunbnail} />
            <div className="hero-icon">
              <a
                href="https://www.youtube.com/watch?v=6Pjw7uFmJDg"
                data-fancybox
              >
                <img src={playIcon} />
              </a>
            </div>
          </div>

          <div className="hero-content">
            <h1>GET READY FOR NEW ADIDAS BANDS</h1>
            <p>
              Adidas tracks all begin with a starting gate and end with a finish
              line, but everything in between varies from track to track.
              Because no two tracks are alike, this action sport keeps you on
              your toes wherever you are racing.
            </p>
          </div>
        </div>
        <div className="hero-items"> 
          <div className="hero-video">
              <img className="video-frame" src={videoThunbnail} />
              <div className="hero-icon">
                <a
                  href="https://www.youtube.com/watch?v=6Pjw7uFmJDg"
                  data-fancybox
                >
                  <img src={playIcon} />
                </a>
              </div>
            </div>
          <div className="hero-content">
            <h1>GET READY FOR NEW ADIDAS BANDS</h1>
            <p>
              Adidas tracks all begin with a starting gate and end with a finish
              line, but everything in between varies from track to track.
              Because no two tracks are alike, this action sport keeps you on
              your toes wherever you are racing.
            </p>
          </div>
        </div>
        <div className="hero-items">
          <div className="hero-video">
              <img className="video-frame" src={videoThunbnail} />
              <div className="hero-icon">
                <a
                  href="https://www.youtube.com/watch?v=6Pjw7uFmJDg"
                  data-fancybox
                >
                  <img src={playIcon} />
                </a>
              </div>
            </div>
          <div className="hero-content">
            <h1>GET READY FOR NEW ADIDAS BANDS</h1>
            <p>
              Adidas tracks all begin with a starting gate and end with a finish
              line, but everything in between varies from track to track.
              Because no two tracks are alike, this action sport keeps you on
              your toes wherever you are racing.
            </p>
          </div>
        </div>
        <div className="hero-items">
          <div className="hero-video">
                <img className="video-frame" src={videoThunbnail} />
                <div className="hero-icon">
                  <a
                    href="https://www.youtube.com/watch?v=6Pjw7uFmJDg"
                    data-fancybox
                  >
                    <img src={playIcon} />
                  </a>
                </div>
              </div>
          <div className="hero-content">
            <h1>GET READY FOR NEW ADIDAS BANDS</h1>
            <p>
              Adidas tracks all begin with a starting gate and end with a finish
              line, but everything in between varies from track to track.
              Because no two tracks are alike, this action sport keeps you on
              your toes wherever you are racing.
            </p>
          </div>
        </div>
      </Slider>
    </section>
    </>
  );
};
