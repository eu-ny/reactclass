import React from 'react'

function ImageText({attr}) {
  return (
        <section id="imgTextType" className={`imgText__wrap ${attr[0]} ${attr[1]} ${attr[2]}`}>
            <h2 className="blind">애니멀 유치원 살펴보기</h2>
            <div className={`imgText__inner container ${attr[3]}`}>
                <div className="imgText__txt">
                <span>ANIMALS</span>
                <h3>애니멀 유치원 살펴보기</h3>
                <p>
                    교육 및 사회성이 필요한 반려동물들의 애니멀 유치원 소개 사이트 입니다.
                </p>
                <ul>
                    <li><a href="/">애니멀 유치원 사이트</a></li>
                    <li><a href="/">댕댕꾸러기 소개</a></li>
                    <li><a href="/">칭찬해요</a></li>
                    <li><a href="/">서운해요</a></li>
                    <li><a href="/">공지사항</a></li>
                    <li><a href="/">ANIMALS Youtube</a></li>
                </ul>
                </div>
                <div className="imgText__img img1">
                    <li><a href="/">멍멍 유치원 사이트</a></li>
                </div>
                <div className="imgText__img img2">
                    <li><a href="/" className="blue">야옹 유치원 사이트</a></li>
                </div>
            </div>
        </section>
    )
}

export default ImageText