import React from "react";

const imageTextInfo = {
    smallTitle: "ANIMALS",
    title: "애니멀 유치원 살펴보기",
    desc: "교육 및 사회성이 필요한 반려동물들의 애니멀 유치원 소개 사이트 입니다.",
};
const imageTextList = [
    {
        link: "/",
        list: "애니멀 유치원 사이트",
    },
    {
        link: "/",
        list: "댕댕꾸러기 소개",
    },
    {
        link: "/",
        list: "칭찬해요",
    },
    {
        link: "/",
        list: "서운해요",
    },
    {
        link: "/",
        list: "공지사항",
    },
    {
        link: "/",
        list: "ANIMALS Youtube",
    },
];

const imageBtn = [
    {
        className: "img1",
        btn: "멍멍 유치원 사이트",
    },
    {
        className: "img2",
        btn: "야옹 유치원 사이트",
    },
];

const ImageTextCont = ({link, list}) => {
    return (
        <li><a href={`${link}`}>{list}</a></li>
    )
}

const ImageTextCont2 = ({className, className2, btn}) => {
    return (
        <div className={`imgText__img ${className}`}>
            <li><a href="/">{btn}</a></li>
        </div>
    )
}

function ImageText({ attr }) {
    return (
        <section
            id="imgTextType"
            className={`imgText__wrap ${attr[0]} ${attr[1]} ${attr[2]}`}
        >
            <h2 className="blind">애니멀 유치원 살펴보기</h2>
            <div className={`imgText__inner container ${attr[3]}`}>
                <div className="imgText__txt">
                    <span>{imageTextInfo.smallTitle}</span>
                    <h3>{imageTextInfo.title}</h3>
                    <p>
                        {imageTextInfo.desc}
                    </p>
                    <ul>
                        {imageTextList.map((info, index) => (
                            <ImageTextCont key={index} link={info.link} list={info.list} />
                        ))}

                        {/* <li><a href="/">애니멀 유치원 사이트</a></li>
                        <li><a href="/">댕댕꾸러기 소개</a></li>
                        <li><a href="/">칭찬해요</a></li>
                        <li><a href="/">서운해요</a></li>
                        <li><a href="/">공지사항</a></li>
                        <li><a href="/">ANIMALS Youtube</a></li> */}
                    </ul>
                </div>
                {imageBtn.map((info, index)=> (
                    <ImageTextCont2 key={index} className={info.className} btn={info.btn} />
                ))}

                {/* <div className="imgText__img img1">
                    <li><a href="/">멍멍 유치원 사이트</a></li>
                </div>
                <div className="imgText__img img2">
                    <li><a href="/">야옹 유치원 사이트</a></li>
                </div> */}
            </div>
        </section>
    );
}

export default ImageText;
