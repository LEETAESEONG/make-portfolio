"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

type Params = {
  containerStyles: string;
  btnStyles: string;
  iconsStyles: string;
};

export default function WorkSliderBtns(params: Params) {
  const swiper = useSwiper();
  return (
    <div className={params.containerStyles}>
      <button className={params.btnStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={params.iconsStyles} />
      </button>
      <button className={params.btnStyles} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={params.iconsStyles} />
      </button>
    </div>
  );
}
