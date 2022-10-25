import React from 'react'

function Banner({attr}) {
  return (
    <section id="bannerType" className={`banner__wrap scroll ${attr[0]} ${attr[1]}`}>
        <h2 className="blind">배너 영역</h2>
        <div className="banner__inner">
        <h3 className="title">HAPPY ANIMALS</h3>
        <p className="desc">
            바쁜 당신의 귀여운 강아지, 고양이들을 위한 안식처 한 번 맡겨보세요!
            <a href="/" title="고양이 보러가기">애니멀 유치원 GO</a>
        </p>
        <span className="small">CUTE ANIMALS</span>
        </div>
    </section>
  )
}

export default Banner