"use client";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Thumbs, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";
import style from "./HomeImageslider.module.css";

export default function HomeImageslider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [mainSwiper, setMainSwiper] = useState(null);

  const slides = [
    {
      id: 1,
      img: "/assets/landing-page/bangalore.png",
      title: "01",
      desc: "Kerovit Experiece Center,",
      location: "Banglore",
    },
    {
      id: 2,
      img: "/assets/landing-page/bhopal.png",
      title: "02",
      desc: "Kerovit Experiece Center,",
      location: "Bhopal",
    },
    {
      id: 3,
      img: "/assets/landing-page/chennai.png",
      title: "03",
      desc: "Kerovit Experiece Center,",
      location: "Chennai",
    },
    {
      id: 4,
      img: "/assets/landing-page/mumbai.png",
      title: "04",
      desc: "Kerovit Experiece Center,",
      location: "Mumbai",
    },
  ];

  const slides2 = [
    {
      id: 1,
      image: "/assets/landing-page/bangalore.png",
      number: "01",
      title: "Modern Workspace",
      location: "Business District",
    },
    {
      id: 2,
      image: "/assets/landing-page/bhopal.png",
      number: "02",
      title: "Kerovit Experience Center",
      location: "Chennai",
    },
    {
      id: 3,
      image: "/assets/landing-page/chennai.png",
      number: "03",
      title: "Luxury Showroom",
      location: "Premium Collection",
    },
    {
      id: 4,
      image: "/assets/landing-page/mumbai.png",
      number: "04",
      title: "Design Studio",
      location: "Creative Space",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(1);
  const [direction, setDirection] = useState("next");

  const nextSlide = () => {
    setDirection("next");
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection("prev");
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    if (index > currentIndex) {
      setDirection("next");
    } else {
      setDirection("prev");
    }
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!thumbsSwiper || !mainSwiper) return;

    const handleSlideChange = () => {
      const realIndex = mainSwiper.realIndex;

      thumbsSwiper.slides.forEach((slide, index) => {
        const rect = slide.querySelector(`.${style.progressrect}`);
        const img = slide.querySelector("img");

        // Reset progress animation
        if (rect) {
          rect.style.animation = "none";
          rect.getBoundingClientRect(); // force reflow
          if (index === realIndex) {
            rect.style.animation = `${style.progressAnim} 5s linear forwards`;
          }
        }

        // Scale images
        if (img) {
          if (index === realIndex) {
            img.style.transform = "scale(1)"; // active thumb normal
            img.style.opacity = "1";
          } else {
            img.style.transform = "scale(1.2)"; // inactive thumbs slightly zoomed
            img.style.opacity = "1";
          }
        }
      });
    };

    mainSwiper.on("slideChangeTransitionStart", handleSlideChange);
    handleSlideChange(); // initial call

    return () => {
      mainSwiper.off("slideChangeTransitionStart", handleSlideChange);
    };
  }, [thumbsSwiper, mainSwiper]);

  // const res = await fetch("https://apicms.ecollat.com/api/homepage",
  // {
  //   headers: {
  //     Origin: "https://kerovit.netlify.app",
  //     'Cache-Control': 'public, max-age=604800, immutable',
  //   }
  // });
  // const json = await res.json();

  // console.log(json?.data?.[0]?.content?.homeslidebanner, "plpl");

  return (
    <div>
      <div className={`${style.heroslider} hidden md:block`}>
        {/* Main Swiper */}
        <Swiper
          modules={[Autoplay, Thumbs, EffectFade]}
          effect="fade"
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          thumbs={{ swiper: thumbsSwiper }}
          onSwiper={setMainSwiper}
          className={style.mainswiper}
          
        >
          {slides.map((slide) => (
            <div className="relative">
              <SwiperSlide key={slide.id}>
                <div
                  className={style.heroslide}
                  style={{ backgroundImage: `url(${slide.img})` }}
                ></div>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>

        {/* Thumbnail Swiper */}
        <div className={style.thumbscontainer} id="homecontainslide">
          <div>
            {" "}
            <div className="text-design"> {slides[currentIndex].title}</div>
            <div className="text-design">
              {slides[currentIndex].desc} {slides[currentIndex].location}
            </div>
          </div>
          <Swiper
            onSwiper={setThumbsSwiper}
            slidesPerView={4}
            spaceBetween={20}
            watchSlidesProgress
            className={style.thumbswiper}
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className={style.thumbwrapper}>
                  <div className={style.thumbimage} id="homeslide">
                    <img src={slide.img} alt={slide.title} />
                    <svg
                      className={style.progresssvg}
                      viewBox="0 0 120 120"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        className={style.progressrect}
                        x="6"
                        y="6"
                        width="110"
                        height="110"
                        rx="0"
                        ry="0"
                      />
                    </svg>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="block md:hidden">
        <div className="relative w-full h-screen  overflow-hidden select-none">
          {/* Main Slide Container */}
          <div className="relative w-full h-full flex items-center justify-center">
            {slides.map((slide, index) => {
              const isActive = index === currentIndex;
              const offset = index - currentIndex;

              return (
                <div
                  key={slide.id}
                  className="absolute w-full h-full transition-all duration-700 ease-in-out"
                  style={{
                    transform: `translateX(${offset * 100}%)`,
                    opacity: isActive ? 1 : 0,
                    zIndex: isActive ? 10 : 1,
                  }}
                >
                  {/* Image with zoom effect */}
                  <div className="w-full h-full overflow-hidden">
                    <img
                      src={slide.img}
                      alt={slide.title}
                      className={`w-full h-full object-cover transition-transform duration-[8000ms] ease-out ${
                        isActive ? "scale-105" : "scale-100"
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation arrows - positioned at bottom */}
          <div className="absolute bottom-8 left-0 w-full px-[16px] z-30">
            <div className="flex justify-between items-center w-full">
              {/* LEFT SIDE */}
              <div className="flex-1">
                <div className="transition-all duration-700">
                  <div className="responsive_mobile_slider_text">
                    {slides[currentIndex].title}
                  </div>
                  <div className="responsive_mobile_slider_text">
                    {slides[currentIndex].desc}
                  </div>
                  <div className="responsive_mobile_slider_text">
                    {slides[currentIndex].location}
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prevSlide}
                  className="w-12 h-12 flex items-center justify-center bg-transparent border border-white/40 hover:bg-white/10 transition-all duration-300 group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                  >
                    <path
                      d="M15 18L9 12L15 6"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <button
                  onClick={nextSlide}
                  className="w-12 h-12 flex items-center justify-center bg-transparent border border-white/40 hover:bg-white/10 transition-all duration-300 group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                  >
                    <path
                      d="M9 6L15 12L9 18"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Slide indicators/dots */}
          <div className="absolute bottom-8 left-[16px] z-30 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="group"
                aria-label={`Go to slide ${index + 1}`}
              >
                <div
                  className={`h-0.5 w-12 transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-white"
                      : "bg-white/40 group-hover:bg-white/60"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
