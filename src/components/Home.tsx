import { Link } from "react-router-dom";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const HomeS = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    position: absolute;
    width: 100%;
    height: 100%;
    flex-direction: column;
`;

const Button = styled(Link)`
    padding: 2em 4em;
    margin-top: 4em;
    font-size: 13px;
    letter-spacing: 3px;
    line-height: 1;
    border: 3px solid #fff;
    color: #fff;
    background: none;
    display: inline-block;
    transition: all .2s;
    font-weight: bold;
    &:hover {
        color: #000000;
        background-color: #ffffff;
    }
`;

const H1 = styled.h1`
    font-weight: bold;
    color: #ffffff;
    font-size: 15px;
    @media screen and (min-width: 1000px) {
        font-size: 30px;
    }
`;

const SlidImgItem = styled.div<{ img: string }>`
    background-size: cover;
    background-position: center;
    background-image: url(${(props: any) => props.img});
    height: 100%;
    display: block;
    width: 100%;
    filter: grayscale(50%);
`;

const SlideWordItem = styled.p`
    color: #ffffff;
    font-size: 1rem;
    @media screen and (min-width: 1000px) {
        font-size: 2rem;
    }
`;

const Home = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        draggable: true,
        adaptiveHeight: true,
        fade: true,
    };

    const settings2 = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 1500,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        draggable: true,
        vertical: true,
        rtl: true,
    };

    const imgArr = [
        // 'assets/cat_1.jpg',
        // 'assets/cat_2.jpg',
        // 'assets/cat_3.jpg',
        // 'assets/cat_4.jpg',

        'http://yuwolmood.com/wp-content/uploads/2023/01/3472491042082327368_20221112010919079-1-1920x1280.jpg',
        'http://yuwolmood.com/wp-content/uploads/2023/01/DSC01965-1920x1280.jpg',
        'http://yuwolmood.com/wp-content/uploads/2023/01/YWM09818-1920x1280.jpg',
        'http://yuwolmood.com/wp-content/uploads/2023/01/DSC01522.jpg',
    ]

    const wordArr = [
        'precious memories.', 'unchanging love', 'happiness.', 'naturalness.'
    ]

    return <HomeS>
        <div style={{
            position: 'absolute',
            top: 0, left: 0, zIndex: 2,
            display: 'flex', justifyContent: 'center',
            width: '100%',
            height: '100%',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <H1>LEEMINYOUNG FLOWERS</H1>
            <div className="slider2">
                <Slider {...settings2}>
                    {wordArr.map((word, index) =>
                    (
                        <SlideWordItem key={index}>{word}</SlideWordItem>
                    ))}
                </Slider>
            </div>
            <Button to='/main'>LEEMINYOUNG</Button>
        </div>
        <div
            className="slider1"
            style={{
                position: 'absolute',
                top: 0, left: 0, zIndex: 1,
                width: '100%',
                height: '100%',
            }}
        >
            <Slider {...settings}>
                {imgArr.map((img, index) =>
                (
                    <SlidImgItem img={img} key={index} />
                ))}
            </Slider>
        </div>
    </HomeS >
}

export default Home;