import React from "react";

const bannerInfo = {
    title: "HAPPY ANIMALS",
    desc: "바쁜 당신의 귀여운 강아지, 고양이들을 위한 안식처 한 번맡겨보세요!",
    btn: "애니멀 유치원 GO",
    smallText: "CUTE ANIMALS",
}

function Banner({ attr }) {
    return (
        <section id="bannerType" className={`banner__wrap scroll ${attr[0]} ${attr[1]}`}>
            <h2 className="blind">배너 영역</h2>
            <div className="banner__inner">
                {/* 데이터 작업 */}
                <h3 className="title">{bannerInfo.title}</h3>
                <p className="desc">
                   {bannerInfo.desc}
                    <a href="/" title="고양이 보러가기">{bannerInfo.btn}</a>
                </p>
                <span className="small">{bannerInfo.smallText}</span>
                 {/* //데이터 작업 */}
            </div>
        </section>
    );
}

export default Banner;
