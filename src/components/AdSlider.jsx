import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import "../adStyle.css";
import { Autoplay } from "swiper/modules";
import { EffectCreative } from "swiper/modules";
import Product from "../features/products/Product";
import { useSelector } from "react-redux";
function AdSlider() {
  const products = useSelector((store) => store.product.products);

  return (
    <>
      <Swiper
        grabCursor={true}
        effect={"creative"}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-120%", 0, -500],
          },
          next: {
            shadow: true,
            translate: ["120%", 0, -500],
          },
        }}
        modules={([EffectCreative], [Autoplay])}
        className="mySwiper3"
      >
        {products.map((slider, i) => {
          return (
            <SwiperSlide key={i}>{<Product product={slider} />}</SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default AdSlider;
