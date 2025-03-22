import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import thumbnailImg from '/images/thubnail-slider-img.png';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const ThumbnailSlider = () => {
  // Custom Left Arrow
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        left: "-30px", // Adjust position
        zIndex: 10, 
      }}
      onClick={onClick}
    >
      <FaChevronLeft size={40} color="white" />
    </div>
  );
};

// Custom Right Arrow
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        right: "-10px",
        zIndex: 10,
      }}
      onClick={onClick}
    >
      <FaChevronRight size={40} color="white" />
    </div>
  );
};

  const sliderImages = [
    { image: thumbnailImg },
    { image: thumbnailImg },
    { image: thumbnailImg },
    { image: thumbnailImg },
    { image: thumbnailImg },
    { image: thumbnailImg },
    { image: thumbnailImg },
  ];
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 4,
          arrows: true,
          prevArrow: <PrevArrow />, 
          nextArrow: <NextArrow />,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 1, 
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {sliderImages.map((item, index) => (
          <div key={index} className="slider-item">
            <img src={item.image} alt="Adidas Bands" />
          </div>
        ))}
      </Slider>
      <div className="line"></div>
    </div>
  );
};
