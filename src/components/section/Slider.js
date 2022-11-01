import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const sliderInfo = {
	smallTit: "ANIMALS",
	title: "CUTE ANIMALS",
	desc: "당신의 반려 동물에게 새로운 친구를 만나게 하고 싶나요?! 여기 애니멀 유치원으로 어서 오세요!",
	btn1: "자세히 보기",
	btnLink1: "/",
	btn2: "사이트 보기",
	btnLink2: "/",
}

// const SliderText = ({smallTit, title, desc, btn1, btnLink1, btn2, btnLink2}) => {
// 	return (
// 		<div class="desc">
// 			<span>{smallTit}</span>
// 			<h3>{title}</h3>
// 			<p>
// 				{desc}
// 			</p>
// 			<div class="btn">
// 				<a href={`${btnLink1}`}>{btn1}</a>
// 				<a href={`${btnLink2}`} class="black">{btn2}</a>
// 			</div>
// 		</div>
// 	)
// }

function Slider(props) {
	return (
		<section id="sliderType" className={`slider__wrap ${props.fonts}`}>
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
						<span>{sliderInfo.smallTit}</span>
						<h3>{sliderInfo.title}</h3>
						<p>
							{sliderInfo.desc}
						</p>
						<div class="btn">
							<a href={`${sliderInfo.btnLink1}`}>{sliderInfo.btn1}</a>
							<a href={`${sliderInfo.btnLink2}`} class="black">{sliderInfo.btn2}</a>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div class="desc">
						<span>{sliderInfo.smallTit}</span>
						<h3>{sliderInfo.title}</h3>
						<p>
							{sliderInfo.desc}
						</p>
						<div class="btn">
							<a href={`${sliderInfo.btnLink1}`}>{sliderInfo.btn1}</a>
							<a href={`${sliderInfo.btnLink2}`} class="black">{sliderInfo.btn2}</a>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div class="desc">
						<span>{sliderInfo.smallTit}</span>
						<h3>{sliderInfo.title}</h3>
						<p>
							{sliderInfo.desc}
						</p>
						<div class="btn">
							<a href={`${sliderInfo.btnLink1}`}>{sliderInfo.btn1}</a>
							<a href={`${sliderInfo.btnLink2}`} class="black">{sliderInfo.btn2}</a>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
			</div>
		</section>
	);	
}
export default Slider