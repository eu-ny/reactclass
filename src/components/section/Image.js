import React from 'react';

const imageTextTitle = {
    hadding: "애니멀 유치원",
    desc: "🐶 당신의 반려 동물에 맞는 반을 골라주세요!🐱"
};

const imageTextInfo = [
    { 
        title: "멍멍 유치원",
        desc: "강아지는 매우 귀엽습니다. 활동적인 모습이 귀엽습니다. 강아지는 기뻐할 때도 귀엽고 시무룩할 때도 귀엽습니다.",
        className: "img1",
    },
    {
        title: "야옹 유치원",
        desc: "고양이는 매우 귀엽습니다. 도도하면서도 애교가 많습니다. 고양이는 은근하게 다가오는 것이 매력적입니다.",
        className: "img2",
    }
];

const ImageText = ({title, desc, className}) => {
    return (
        // className을 넣으려면 props처럼 넣어주면 된다. 이때 앞에 배열이름은 안넣어도 되고 반복되는 데이터의 키 값만 넣으면 된다.
        <article className={`image ${className}`}>
            <h3 className="image__title">{title}</h3>
            <p className="image__desc">{desc}</p>
            <a href="/" title="자세히 보기" className="image__btn">자세히 보기</a>
        </article>
    );
};

function Image(props) {
  return (
    <section id="imageType" className={`image__wrap scroll ${props.attr[0]} ${props.attr[1]}`}>
        {/* <h2>애니멀 유치원</h2>
        <p>🐶 당신의 반려 동물에 맞는 반을 골라주세요!🐱</p> */}
        <h2>{imageTextTitle.hadding}</h2>
        <p>{imageTextTitle.desc}</p>
        <div class={`image__inner ${props.attr[2]}`}>
            {imageTextInfo.map((info) => (
                <ImageText  title={info.title}  desc={info.desc}  className={info.className}  />
            ))}
            {/* 아래의 반복되는 데이터를 컴퍼넌트 시켜서 데이터 관리와 수정을 효율적으로 할 수 있게 된다. */}
            {/* <article className="image img1">
                <h3 className="image__title">멍멍 유치원</h3>
                <p className="image__desc">
                    강아지는 매우 귀엽습니다. 활동적인 모습이 귀엽습니다. 강아지는
                    기뻐할 때도 귀엽고 시무룩할 때도 귀엽습니다.
                </p>
                <a href="/" title="자세히 보기" className="image__btn">자세히 보기</a>
            </article>
            <article className="image img2">
                <h3 className="image__title">야옹 유치원</h3>
                <p className="image__desc">
                    고양이는 매우 귀엽습니다. 도도하면서도 애교가 많습니다. 고양이는
                    은근하게 다가오는 것이 매력적입니다.
                </p>
                <a href="/" title="자세히 보기" className="image__btn yellow">자세히 보기</a>
            </article> */}
        </div>
    </section>

  )
}

export default Image