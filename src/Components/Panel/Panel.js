import React, { useState } from 'react';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // import Swiper modules
import "swiper/css"; 
import "swiper/css/navigation"; 
import "swiper/css/pagination"; 

const styles = {
  tabs: {
    background: "#bfbfbf",
    bottom: "0px",
  },
  slide: {
    paddingTop: 0,
    minHeight: 0,
    color: "#000",
    display: "flex",
    justifyContent: "center",
  },
};

const Panel = ({ findings, findings1, results, final, changed }) => {
  const [index, setIndex] = useState(0);
  let swiperInstance = null;

  const handleChange = (event, value) => {
    setIndex(value);
    if (swiperInstance) swiperInstance.slideTo(value);
    if (changed) changed();
  };

  const handleSlideChange = (swiper) => {
    setIndex(swiper.activeIndex);
    if (changed) changed();
  };

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination]} // enable nav + pagination
        navigation // show prev/next arrows
        pagination={{ clickable: true }} // show dots & make them clickable
        onSwiper={(swiper) => (swiperInstance = swiper)}
        onSlideChange={handleSlideChange}
        initialSlide={index}
        spaceBetween={0}
        slidesPerView={1}
      >
        <SwiperSlide style={styles.slide}>{findings}</SwiperSlide>
        <SwiperSlide style={styles.slide}>{findings1}</SwiperSlide>
        <SwiperSlide style={{ display: "block", height: "auto" }}>
  {results}
</SwiperSlide>

        <SwiperSlide style={styles.slide}>{results}</SwiperSlide>
        <SwiperSlide style={styles.slide}>{final}</SwiperSlide>
      </Swiper>

      {/* Optional Tabs if you want to keep them */}
      {/* <Tabs
        value={index}
        variant="fullWidth"
        onChange={handleChange}
        style={styles.tabs}
      >
        <Tab label="Physical" />
        <Tab label="Lab" />
        <Tab label="Additional" />
        <Tab label="Calculation" />
      </Tabs> */}
    </div>
  );
};

export default Panel;
