import React from "react";

// 데이터 객체화 시키기 : 반복되지 않으므로 바로 객체화 시키기
const cardTitle = {
    hadding: "애니멀 활동 소개 📝",
    desc: "애니멀 유치원의 대표적인 활동 리스트 입니다.",
}

// 데이터 객체화 시키기2 : 반복되므로 배열안 객체 형식
const cardInfo = [
    {
        img: "../assets/img/card_bg01_01.jpg",
        imgAlt: "cardimg01",
        title: "개인 활동 시간",
        desc: "당신의 각각의 반려동물의 맞춤 교육 활동입니다. 각 애니멀들의 성향 및 고칠점에 대하여 전문가들과 분석하고 1:1 맞춤형으로 교육이 진행됩니다.",
        btn: "자세히 보기",
        svg: (<svg width="65" height="8" viewBox="0 0 65 8" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M64.3536 4.35355C64.5488 4.15829 64.5488 3.84171 64.3536 3.64645L61.1716 0.464466C60.9763 0.269204 60.6597 0.269204 60.4645 0.464466C60.2692 0.659728 60.2692 0.976311 60.4645 1.17157L63.2929 4L60.4645 6.82843C60.2692 7.02369 60.2692 7.34027 60.4645 7.53553C60.6597 7.7308 60.9763 7.7308 61.1716 7.53553L64.3536 4.35355ZM0 4.5H64V3.5H0V4.5Z" fill="black" /> </svg>)
    },
    {
        img: "../assets/img/card_bg01_02.jpg",
        imgAlt: "cardimg02",
        title: "간식 시간",
        desc: "식사 훈련을 함께 동반하며 사료와 함께 수제로 만든 건강 간식이 제공됩니다. 필요에 따라 직접 선택할 수 있으며 주의 사항에 따라 해당 재료를 먹지 못하는 경우 따로 제공합니다.",
        btn: "자세히 보기",
        svg: (<svg width="65" height="8" viewBox="0 0 65 8" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M64.3536 4.35355C64.5488 4.15829 64.5488 3.84171 64.3536 3.64645L61.1716 0.464466C60.9763 0.269204 60.6597 0.269204 60.4645 0.464466C60.2692 0.659728 60.2692 0.976311 60.4645 1.17157L63.2929 4L60.4645 6.82843C60.2692 7.02369 60.2692 7.34027 60.4645 7.53553C60.6597 7.7308 60.9763 7.7308 61.1716 7.53553L64.3536 4.35355ZM0 4.5H64V3.5H0V4.5Z" fill="black" /> </svg>)

    },
    {
        img: "../assets/img/card_bg01_03.jpg",
        imgAlt: "cardimg03",
        title: "단체 활동 시간",
        desc: "개인 활동과 달리 단체로 활동하는 시간이며 각 애니멀들의 사회성, 사교성을 기르기 위한 교육 시간 입니다. 각 성향에 따라 분리 하여 활동할 수 있습니다.",
        btn: "자세히 보기",
        svg: (<svg width="65" height="8" viewBox="0 0 65 8" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M64.3536 4.35355C64.5488 4.15829 64.5488 3.84171 64.3536 3.64645L61.1716 0.464466C60.9763 0.269204 60.6597 0.269204 60.4645 0.464466C60.2692 0.659728 60.2692 0.976311 60.4645 1.17157L63.2929 4L60.4645 6.82843C60.2692 7.02369 60.2692 7.34027 60.4645 7.53553C60.6597 7.7308 60.9763 7.7308 61.1716 7.53553L64.3536 4.35355ZM0 4.5H64V3.5H0V4.5Z" fill="black" /> </svg>)
    },
];

// 컴포넌트화 시키기 : 밑에 데이터 넣은 값을 불러온 후 데이터 넣을 곳에 뿌려주기.
const CardText = ({img, imgAlt, title, desc, btn, svg}) => {
    return (
        <article className="card">
            <figure className="card__header">
                <img src={`${img}`} alt={`${imgAlt}`} />
            </figure>
            <div className="card__body">
                <h3 className="tit">
                    {title}
                </h3>
                <p className="desc">
                  {desc}
                </p>
                <a className="btn" href="/">
                    {btn}
                    <span aria-hidden="true">
                        {svg}
                    </span>
                </a>
            </div>
        </article>
    )
}

function Card({ attr }) {
    return (
        <section id="cardType" className={`card__wrap ${attr[0]} ${attr[1]}`}>
            <h2>{cardTitle.hadding}</h2>
            <p>{cardTitle.desc}</p>
            {/* <h2>애니멀 활동 소개 📝</h2>
            <p>애니멀 유치원의 대표적인 활동 리스트 입니다.</p> */}
            <div className={`card__inner ${attr[2]}`}>

                {/* 데이터 넣은 후 컴포넌트 불러와서 반복시키기 : forEach도 되지만 더 간편한 map으로 반복문 작성! */}
                {cardInfo.map((info, index) => (
                    <CardText key={index} img={info.img} imgAlt={info.imgAlt} title={info.title} desc={info.desc} btn={info.btn} svg={info.svg} /> 
                ))}

                {/* <article className="card">
                    <figure className="card__header">
                        <img src="../assets/img/card_bg01_01.jpg" alt="상업 전시" />
                    </figure>
                    <div className="card__body">
                        <h3 className="tit">개인 활동 시간</h3>
                        <p className="desc">
                            당신의 각각의 반려동물의 맞춤 교육 활동입니다. 각
                            애니멀들의 성향 및 고칠점에 대하여 전문가들과
                            분석하고 1:1 맞춤형으로 교육이 진행됩니다.
                        </p>
                        <a className="btn" href="/">
                            더 자세히 보기
                            <span aria-hidden="true">
                                <svg width="65" height="8" viewBox="0 0 65 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M64.3536 4.35355C64.5488 4.15829 64.5488 3.84171 64.3536 3.64645L61.1716 0.464466C60.9763 0.269204 60.6597 0.269204 60.4645 0.464466C60.2692 0.659728 60.2692 0.976311 60.4645 1.17157L63.2929 4L60.4645 6.82843C60.2692 7.02369 60.2692 7.34027 60.4645 7.53553C60.6597 7.7308 60.9763 7.7308 61.1716 7.53553L64.3536 4.35355ZM0 4.5H64V3.5H0V4.5Z" fill="black" />
                                </svg>
                            </span>
                        </a>
                    </div>
                </article>
                <article className="card">
                    <figure className="card__header">
                        <img
                            src="../assets/img/card_bg01_02.jpg"
                            alt="미술 전시"
                        />
                    </figure>
                    <div className="card__body">
                        <h3 className="tit">간식 시간</h3>
                        <p className="desc">
                            식사 훈련을 함께 동반하며 사료와 함께 수제로 만든
                            건강 간식이 제공됩니다. 필요에 따라 직접 선택할 수
                            있으며 주의 사항에 따라 해당 재료를 먹지 못하는 경우
                            따로 제공합니다.
                        </p>
                        <a className="btn" href="/">
                            더 자세히 보기
                            <span aria-hidden="true">
                                <svg width="65" height="8" viewBox="0 0 65 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M64.3536 4.35355C64.5488 4.15829 64.5488 3.84171 64.3536 3.64645L61.1716 0.464466C60.9763 0.269204 60.6597 0.269204 60.4645 0.464466C60.2692 0.659728 60.2692 0.976311 60.4645 1.17157L63.2929 4L60.4645 6.82843C60.2692 7.02369 60.2692 7.34027 60.4645 7.53553C60.6597 7.7308 60.9763 7.7308 61.1716 7.53553L64.3536 4.35355ZM0 4.5H64V3.5H0V4.5Z" fill="black" />
                                </svg>
                            </span>
                        </a>
                    </div>
                </article>
                <article className="card">
                    <figure className="card__header">
                        <img src="../assets/img/card_bg01_03.jpg" alt="사진 전시" />
                    </figure>
                    <div className="card__body">
                        <h3 className="tit">단체 활동 시간</h3>
                        <p className="desc">
                            개인 활동과 달리 단체로 활동하는 시간이며 각
                            애니멀들의 사회성, 사교성을 기르기 위한 교육 시간
                            입니다. 각 성향에 따라 분리 하여 활동할 수 있습니다.
                        </p>
                        <a className="btn" href="/">
                            더 자세히 보기
                            <span aria-hidden="true">
                                <svg width="65" height="8" viewBox="0 0 65 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M64.3536 4.35355C64.5488 4.15829 64.5488 3.84171 64.3536 3.64645L61.1716 0.464466C60.9763 0.269204 60.6597 0.269204 60.4645 0.464466C60.2692 0.659728 60.2692 0.976311 60.4645 1.17157L63.2929 4L60.4645 6.82843C60.2692 7.02369 60.2692 7.34027 60.4645 7.53553C60.6597 7.7308 60.9763 7.7308 61.1716 7.53553L64.3536 4.35355ZM0 4.5H64V3.5H0V4.5Z" fill="black" />
                                </svg>
                            </span>
                        </a>
                    </div>
                </article> */}
            </div>
        </section>
    );
}

export default Card;
