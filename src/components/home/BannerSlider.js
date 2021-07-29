import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SwiperCore, { Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import { useDispatch, useSelector } from "react-redux";
// import { getBanners } from "../../redux-action/homeAction";

SwiperCore.use([Pagination, A11y, Autoplay]);

const BannerSlider = () => {
    const { banners } = useSelector((state) => state.home);
    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(getBanners());
    }, [dispatch]);

    return (
        <Swiper
            className="banner-slider s-mt-4 l-block"
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            loop
            pagination={{
                el: ".banner-slider__pagination",
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + ' s-mx-05 "></span>';
                },
            }}
        >
            {banners.map((banner, index) => (
                <SwiperSlide
                    key={index}
                    className="banner-slider__slide"
                >
                    <Link to={banner.bannerredirect}>
                        <img
                            className="swiper-lazy"
                            src={banner.bannerimagen}
                            alt={banner.bannernombre}
                        />
                    </Link>
                </SwiperSlide>
            ))}
            <div className="banner-slider__pagination s-pt-1"></div>
        </Swiper>
    );
};

export default BannerSlider;
