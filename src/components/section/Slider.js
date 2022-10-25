import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


function Slider() {
	return (
		<div className="slider__inner">
		  <Swiper 
		  	autoplay={{
				delay: 3000,
				disableOnInteraction: false,
			}}
		  	navigation={true} 
			pagination={{clickable: true}} 
			modules={[Navigation, Pagination, Autoplay]} 
			className="mySwiper">
			<SwiperSlide>
				<div class="desc">
					<span>ANIMALS</span>
					<h3>CUTE ANIMALS</h3>
					<p>
						당신의 반려 동물에게 새로운 친구를 만나게 하고 싶나요?!<br />
						여기 애니멀 유치원으로 어서 오세요!
					</p>
					<div class="btn">
						<a href="/">자세히 보기</a>
						<a href="/" class="black">사이트 보기</a>
					</div>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div class="desc">
					<span>ANIMALS</span>
					<h3>CUTE ANIMALS</h3>
					<p>
						당신의 반려 동물에게 새로운 친구를 만나게 하고 싶나요?!<br />
						여기 애니멀 유치원으로 어서 오세요!
					</p>
					<div class="btn">
						<a href="/">자세히 보기</a>
						<a href="/" class="black">사이트 보기</a>
					</div>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div class="desc">
					<span>ANIMALS</span>
					<h3>CUTE ANIMALS</h3>
					<p>
						당신의 반려 동물에게 새로운 친구를 만나게 하고 싶나요?!<br />
						여기 애니멀 유치원으로 어서 오세요!
					</p>
					<div class="btn">
						<a href="/">자세히 보기</a>
						<a href="/" class="black">사이트 보기</a>
					</div>
				</div>
			</SwiperSlide>
		  </Swiper>
		</div>
	);	
}

export default Slider