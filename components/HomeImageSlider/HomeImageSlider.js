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
      desc: "Kerovit Experiece Center, Chennai.",
    },
    {
      id: 2,
      img: "/assets/landing-page/bhopal.png",
      title: "02",
      desc: "Kerovit Experiece Center, Bhopal.",
    },
    {
      id: 3,
      img: "/assets/landing-page/chennai.png",
      title: "03",
      desc: "Kerovit Experiece Center, Chennai.",
    },
    {
      id: 4,
      img: "/assets/landing-page/mumbai.png",
      title: "04",
      desc: "Kerovit Experiece Center, Mumbai.",
    },
  ];

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
                <div className="absolute  bottom-[180px]  right-[17%] m z-40">
                  <div className="text-design">{slide.title}</div>
                  <div className="text-design">{slide.desc}</div>
                </div>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>

        {/* Thumbnail Swiper */}
        <div className={style.thumbscontainer} id="homecontainslide">
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
        <div>sample</div>
      </div>
    </div>
  );
}
