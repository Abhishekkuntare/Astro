import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImgSlider = (props) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <a>
          <img
            src="https://i.pinimg.com/originals/79/fa/bf/79fabf225f637e8111b6a287564ef66a.jpg"
            alt=""
          />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img
            src="https://lumiere-a.akamaihd.net/v1/images/ma_ps_on_disney-in_2000x835_ind_v01_4416356b.jpeg?region=0,0,2000,835"
            alt=""
          />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img
            src="https://lumiere-a.akamaihd.net/v1/images/djindia_2000x835_d73d9379.jpeg?region=0,0,2000,835"
            alt=""
          />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img
            src="https://lumiere-a.akamaihd.net/v1/images/img_2351_28d35a79.jpeg?region=0,0,2000,835"
            alt=""
          />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img
            src="https://lumiere-a.akamaihd.net/v1/images/cover-2000-x-835_1_e15da45d.png?region=0,0,2000,835"
            alt=""
          />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img
            src="https://lumiere-a.akamaihd.net/v1/images/mroc_mbrooks_2000x835_v2_b25ad54d.jpeg?region=0,0,2000,835"
            alt=""
          />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img
            src="https://lumiere-a.akamaihd.net/v1/images/retina--2000-x-835_80c07de4.jpeg?region=0,0,2000,835"
            alt=""
          />
        </a>
      </Wrap>
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  margin-top: 20px;
  width:90%
  overflow-x: hidden;
  overflow: hidden;
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -75px;
  }

  .slick-next {
    right: -75px;
  }
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  width:90%;
  overflow-x: hidden;
  overflow: hidden;

  a {
    overflow-x: hidden;
    overflow: hidden;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;

    img {
      width: 90%;
      height: 100%;
      margin-left:auto;
      margin-right:auto;
    }

    &:hover {
      cursor: pointer;
      box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;

      transform: scale(1.05);
      border-color: rgba(249, 249, 249, 0.8);
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }
`;

export default ImgSlider;
