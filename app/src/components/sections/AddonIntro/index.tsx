"use client";
import { useId, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./style.module.scss";
import { cssVariables } from "@/assets/styles/variables";
import parser from "html-react-parser";

const slides = [
  {
    id: 1,
    image: {
      url: "/images/addon-slide-1.svg",
      width: 301,
      height: 287,
    },
    title: "How it Works?",
    text: "Works only with jup.bot in Telegram.<br/>Sign up quickly to get your first x100",
  },
  {
    id: 2,
    image: {
      url: "/images/addon-slide-2.svg",
      width: 346,
      height: 352,
    },
    title: "Fast Buy",
    text: "Quickly make purchases with just a few clicks",
  },
  {
    id: 3,
    image: {
      url: "/images/addon-slide-3.svg",
      width: 346,
      height: 339,
    },
    title: "Full Customization",
    text: "Tailor every aspect to suit your trading style",
  },
  {
    id: 4,
    image: {
      url: "/images/addon-slide-4.svg",
      width: 357,
      height: 261,
    },
    title: "Handy Keyboard Shortcuts",
    text: "Speed up your workflow with convenient shortcuts",
  },
];

export const AddonIntro = () => {
  const router = useRouter();
  const id = useId().replace(/:/g, "");
  const swiperRef = useRef<any>(null);
  const [last, setLast] = useState(false);
  return (
    <div className={styles.intro}>
      <div className={styles.intro__slider_box}>
        <span className={styles.intro__slider_box_overlay}></span>
        <Swiper
          className={`${styles.intro__slider}`}
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={0}
          pagination={{
            dynamicBullets: false,
            el: `#pagination-${id}`,
            type: "bullets",
          }}
          loop={false}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            swiper.realIndex === slides.length - 1
              ? setLast(true)
              : setLast(false);
          }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className={styles.intro__slider_slide}>
                <div className={styles.intro__slider_slide_image}>
                  <Image
                    src={slide.image.url}
                    width={slide.image.width}
                    height={slide.image.height}
                    alt={slide.title}
                    quality={100}
                  />
                </div>
                <div className={styles.intro__slider_slide_content}>
                  <h2 className={styles.intro__slider_slide_content_title}>
                    {slide.title}
                  </h2>
                  <p>{parser(slide.text)}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={styles.intro__actions}>
        <Button
          variant="filled"
          color={cssVariables.green}
          type="large"
          borderRadius={12}
          onClick={() => {
            swiperRef &&
              swiperRef.current &&
              !last &&
              swiperRef.current.slideNext();

            last && router.replace("/trade");
          }}
        >
          {last && (
            <Image
              src="/icons/addon-telegram-icon.svg"
              width={21}
              height={20}
              alt="telegram login"
            />
          )}

          {last ? "Log In via Telegram" : "Next"}
        </Button>
      </div>
      <div
        className={`${styles.intro__slider_pagination} swiper-pagination-alt`}
      >
        <div id={`pagination-${id}`}></div>
      </div>
    </div>
  );
};
