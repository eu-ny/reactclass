import React from 'react'

const TextTitle = {
    smallHadding: "ANIMALS",
    hadding: "애니멀 유치원을 소개합니다.",
}

const TextInfo = [
    {
        className: "t1",
        title: "홈페이지",
        desc: "애니멀 유치원의 공식 홈페이지 입니다. 애니멀 유치원의 각 과정과 활동 사진 등을 확인하실 수 있습니다.",
        btn: "더보기",
        btnLink: "/",
    },
    {
        className: "t2",
        title: "공지사항",
        desc: "애니멀 유치원의 행사, 일정, 모집 등 중요 사항들을 확인할 수 있습니다.",
        btn: "더보기",
        btnLink: "/",
    },
    {
        className: "t3",
        title: "주의해요",
        desc: "당신의 반려 동물에 대한 주의점(알레르기, 행동, 성격 등)을 작성할 수 있습니다.",
        btn: "더보기",
        btnLink: "/",
    },
    {
        className: "t4",
        title: "공지사항",
        desc: "이 달의 베스트 애니멀 학생을 확인할 수 있습니다.",
        btn: "더보기",
        btnLink: "/",
    },
    {
        className: "t5",
        title: "칭찬해요",
        desc: "칭찬해요와 서운해요에 해당하는 투표를 진행하는 곳입니다.",
        btn: "더보기",
        btnLink: "/",
    },
    {
        className: "t6",
        title: "서운해요",
        desc: "각 학생들의 벌점을 확인할 수 있습니다.",
        btn: "더보기",
        btnLink: "/",
    },
];

const TextCont = ({className, title, desc, btn, btnLink}) => {
    return (
        <div className={`text ${className}`}>
            <h3 className="text__title">{title}</h3>
            <p className="text__desc">{desc}</p>
            <a className="text_btn" href={`${btnLink}`}>{btn}</a>
        </div>
    )
};

function Text({attr}) {
  return (
    <section id="textType" className={`text__wrap scroll ${attr[0]} ${attr[1]}`}>
        <span>{TextTitle.smallHadding}</span>
        <h2 className="mb70">{TextTitle.hadding}</h2>
        <div className={`text__inner ${attr[2]}`}>

            {TextInfo.map((info, index) => (
                <TextCont key={index} className={info.className} title={info.title} desc={info.desc} btn={info.btn} btnLink={info.btnLink} />
            ))}

            {/* <div className="text t1">
                <h3 className="text__title">홈페이지</h3>
                <p className="text__desc">애니멀 유치원의 공식 홈페이지 입니다. 애니멀 유치원의 각 과정과 활동 사진 등을 확인하실 수 있습니다.</p>
                <a className="text_btn" href="/">더보기</a>
            </div>
            <div className="text t2">
                <h3 className="text__title">공지사항</h3>
                <p className="text__desc">애니멀 유치원의 행사, 일정, 모집 등 중요 사항들을 확인할 수 있습니다.</p>
                <a className="text_btn" href="/">더보기</a>
            </div>
            <div className="text t3">
                <h3 className="text__title">주의해요</h3>
                <p className="text__desc">당신의 반려 동물에 대한 주의점(알레르기, 행동, 성격 등)을 작성할 수 있습니다.</p>
                <a className="text_btn" href="/">더보기</a>
            </div>
            <div className="text t4">
                <h3 className="text__title">칭찬해요</h3>
                <p className="text__desc">이 달의 베스트 애니멀 학생을 확인할 수 있습니다.</p>
                <a className="text_btn" href="/">더보기</a>
            </div>
            <div className="text t5">
                <h3 className="text__title">추천해요</h3>
                <p className="text__desc">칭찬해요와 서운해요에 해당하는 투표를 진행하는 곳입니다.</p>
                <a className="text_btn" href="/">더보기</a>
            </div>
            <div className="text t6">
                <h3 className="text__title">서운해요</h3>
                <p className="text__desc">각 학생들의 벌점을 확인할 수 있습니다.</p>
                <a className="text_btn" href="/">더보기</a>
            </div> */}
        </div>
    </section>
  )
}

export default Text