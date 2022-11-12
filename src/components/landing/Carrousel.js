import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import { IconButton, Stack } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Overlay from "./Overlay";

const Carrousel = ({ posts }) => {
  const [mySwiper, setMySwiper] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <Stack sx={{ width: "100%", userSelect: "none" }}>
      <Swiper
        className="slides"
        modules={[Autoplay]}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
        onInit={(ev) => {
          setMySwiper(ev);
        }}
        allowTouchMove={false}
      >
        {posts.map((post) => (
          <SwiperSlide key={post.id} className="slide">
            <img src={post.thumb.url} alt={post.slug} />
          </SwiperSlide>
        ))}
        <Stack
          direction="row"
          sx={{
            width: {xs:"100%",md:"18%",xl:"25%"},
            height: "100vh",
            zIndex: 11,
            position: "absolute",
            top: 0,
            right: 0,
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <IconButton
            sx={{
              borderRadius: 0,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              color: "rgba(255, 255, 255, 0.5)",
              backdropFilter: "blur(2px)",
              zIndex: 11,
              width: "50%",
              padding: "1rem",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.3)",
                color: "rgba(255,255,255,0.7)",
              },
            }}
            onClick={() => mySwiper.slideNext()}
            disabled={currentIndex === posts.length - 1}
          >
            <ArrowForwardIosIcon />
          </IconButton>
          <IconButton
            sx={{
              borderRadius: 0,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              color: "rgba(255, 255, 255, 0.5)",
              backdropFilter: "blur(2px)",
              zIndex: 11,
              width: "50%",
              padding: "1rem",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.3)",
                color: "rgba(255,255,255,0.7)",
              },
            }}
            onClick={() => mySwiper.slidePrev()}
            disabled={currentIndex === 0}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
        </Stack>
      </Swiper>
      <Overlay post={posts[currentIndex]} />
    </Stack>
  );
};

export default Carrousel;
