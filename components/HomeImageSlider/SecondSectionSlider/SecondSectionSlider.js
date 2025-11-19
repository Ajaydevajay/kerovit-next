"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import style from "./SecondSectionSlider.module.css";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const slidesData = [
  {
    title: "Faucet",
    desc: "Bib Tap with Flange",
    link: "/",
    image: "/assets/landing-page/faucet.png",
  },
  {
    title: "Shower",
    link: "/",
    image: "/assets/landing-page/shower.png",
  },
  {
    title: "Basin",
    link: "/",
    image: "/assets/landing-page/basin.png",
  },
  {
    title: "Toilet",
    link: "/",
    image: "/assets/landing-page/toilet.png",
  },
  {
    title: "Bathroom Furniture",
    link: "/",
    image: "/assets/landing-page/bathroom furniture.png",
  },
  {
    title: "Accessories",
    link: "/",
    image: "/assets/landing-page/accessories.png",
  },
];

const SecondSectionSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const el = sliderRef.current;

    gsap.fromTo(
      el,
      { xPercent: 50, opacity: 1, ease: "power2.out" },
      {
        xPercent: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 40%",
          end: "top 40%",
          scrub: false,
          // markers: true,
          ease: "power2.out",
        },
      }
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section className={`${style.sectionpadd} section_padding_px overflow-auto  `}>
      <div className={`${style.swiperpadding}`}>
        <div
          className="section_3_header mb-[64px] pb-[0]"
          style={{
            paddingBottom: 0,
          }}
        >
          Discover a world crafted <br /> for the way you live
        </div>

        <Swiper
          ref={sliderRef}
          modules={[Navigation]}
          spaceBetween={40}
          slidesPerView={5}
          loop={false}
          breakpoints={{
            0: { slidesPerView: 2, spaceBetween: 16 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            991: { slidesPerView: 5 },
          }}
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="group">
                <div className="relative w-full flex items-center justify-center bg-[#E1E6E5] overflow-hidden">
                  <div className={` ${style.shine} aspect-[3/4]  `}>
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-125"
                    />
                  </div>
                </div>

                <div className="pt-3 sm:pt-4 flex items-center justify-between">
                  <p className="small text-[14px]">{slide.title}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SecondSectionSlider;
