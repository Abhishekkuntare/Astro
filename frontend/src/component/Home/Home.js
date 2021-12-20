import React, { Fragment, useEffect, useState } from "react";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import Zoom from "react-reveal/Zoom";
import ImgSlider from "./ImgSlider";
import "./Nav.css";
import { Clear } from "@material-ui/icons";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);
  const [burgerStatus, setBurgerStatus] = useState(false);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="ASTRO" />
          <div className="logo">
            <a href="/">
              <img
                src="https://t3.ftcdn.net/jpg/02/86/85/60/360_F_286856042_PCn5Y4BF06A5iBPyt5AxW7tvvUxUSsah.jpg"
                alt=""
              />
            </a>

            <Zoom top cascade duration={2000}>
              <p>Astro</p>
            </Zoom>
          </div>
          <div className="banner">
            <Zoom left cascade delay={1500} duration={2000}>
              <h1>Wear Classy, Be Classy !</h1>
            </Zoom>

            <p>The Class .</p>

            <a href="#container">
              <div className="arrow"></div>
              <div className="arrow"></div>
              <div className="arrow"></div>
            </a>
          </div>

          <h3 onClick={() => setBurgerStatus(true)} className="message">
            Message Me
          </h3>
          <a className="search" href="/search">Search
          </a>

          <BurgerNav show={burgerStatus}>
            <CloseWrapper>
              <CustomClear onClick={() => setBurgerStatus(false)} />
            </CloseWrapper>

            <Fade top>
              <p>Hi there 👋</p>
            </Fade>

            <Des>
              <p>
                Welcome to <span>ASTRO</span> . We are here to Help!! ,
              </p>

              <h6> how can I help you?</h6>

              <hr />

              <p>We typically reply within a few minutes.</p>

              <h6>or ask me a question ?</h6>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Hey, ask me something..."
              ></textarea>
              <h5>Send</h5>
            </Des>

            <li>
              <a>MODELS</a>
            </li>
            <li>
              <a href="#">DEALERS</a>
            </li>
            <li>
              <a href="#">MUSEUM AND PRODUCTION LINE</a>
            </li>
            <li>
              <a href="#">AD PERSONAM</a>
            </li>
            <li>
              <a href="#">WORK WITH US</a>
            </li>
            <li>
              <a href="#">COMPANY AND HISTORY</a>
            </li>
            <li>
              <a href="#">MASTERPIECES</a>
            </li>
            <div className="rightFooter">
              <a href="http://instagram.com/abhishek__kuntare">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="http://instagram.com/abhishek__kuntare">
                <i class="fab fa-facebook-f"></i>
              </a>
            </div>
          </BurgerNav>

          <div className="banner banner2">
            <Zoom right cascade duration={1500}>
              <h1>NEW ARRIVAL,NEW SEASON</h1>
            </Zoom>

            <p>Shop from our latest collection</p>
          </div>

          <div className="banner banner3">
            <Zoom left cascade duration={1500}>
              <h1>WE HAVE THE CLASS</h1>
            </Zoom>

            <p>'shop your vibe'</p>
          </div>

          <div className="banner banner4">
            <Zoom right cascade duration={1500}>
              <h1>SHIRT FOR RICH "</h1>
            </Zoom>
            <p>'comfort fit'</p>
          </div>
          <ImgSlider />

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;

const BurgerNav = styled.div`
  overflow-y: scroll;
  position: fixed;
  overflow-x: hidden;
  top: 0;
  right: 0;
  bottom: 0;
  background: white;
  width: 439px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transition: transform 0.6s ease-in-out;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  font-family: "Spartan", sans-serif;
  p {
    text-transform: uppercase;
    font-size: 1.2rem;
    line-height: 1;
    font-weight: 500;
    padding: 20px;
    font-family: "Spartan", sans-serif;

    span {
      font-family: "Major Mono Display", monospace;
      font-weight: 500;
      font-size: 1.2rem;
      color: black;
    }
  }
  li {
    padding: 15px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    border: 1px solid #e8e8e8;
    color: #181818;
    vertical-align: middle;
    border: 1px solid #e8e8e8;
    border-radius: 0;
    white-space: "wrap";
    font-family: "Spartan", sans-serif;
    width: 80%;
    cursor: pointer;
    display: table;
    margin-top: 1.5vw;
    &:hover {
      border: 1px solid black;
    }
  }
  a {
    font-weight: 600;
    width: 80%;
    transition: all 0.7s ease-in-out;
    text-decoration: none;
    color: #181818;
    text-align: center;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-family: "Spartan", sans-serif;
  }
  @media (max-width: 512px) {
    width: 301px;
  }
`;
const Des = styled.div`
  p {
    text-transform: uppercase;
    font-size: 1rem;
    line-height: 1;
    font-weight: 500;
    padding: 20px;
    letter-spacing: 2px;
    line-height: 22px;
    font-family: "Spartan", sans-serif;
  }
  h6 {
    text-transform: uppercase;
    font-size: 0.8rem;
    line-height: 1;
    font-weight: 500;
    padding: 20px;
    letter-spacing: 2px;
    opacity: 0.8;
    font-family: "Spartan", sans-serif;
  }
  textarea {
    margin-top: 0px;
    margin-bottom: 0px;
    height: 65px;
    width: 367px;
    margin-left: 10px;
    padding: 10px;
    font-size: 16px;
    opacity: 0.7;
    font-family: "Spartan", sans-serif;

    @media (max-width: 600px) {
      width: 251px;
    }
  }
  h5 {
    text-align: center;
    align-items: center;
    opacity: 0.7;
    text-transform: uppercase;
    font-family: "Spartan", sans-serif;
  }
  &:hover {
    h5 {
      color: black;
      cursor: pointer;
    }
  }
`;
const CustomClear = styled(Clear)`
  cursor: pointer;
  margin-top: 19px;
  font-size: 3rem;
  margin-top: 20px;
  margin-left: 17px;
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  color: gray;
  &:hover {
    color: black;
  }
  p {
    font-size: 1.4rem;
    margin-top: 20px;
    letter-spacing: 1px;
  }
`;
