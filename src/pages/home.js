import "./home.css";
import { NavLink } from 'react-router-dom';
import React, { useState, useRef, useEffect } from "react";
import { TweenLite, Power3 } from "gsap";
import leftArrow from "../images/arrow-left.svg";
import rightArrow from "../images/arrow-right.svg";
import tote1 from "../images/tote-1.png";
import tote2 from "../images/tote-6.png";
import straw from "../images/straw.jpeg";


const testimonials = [ `${tote1}`, `${tote2}`, `${straw}`];


const Home = () => {
  //Image Slider credit: Wrong Akram https://www.youtube.com/watch?v=t1lx061sncM&list=RDCMUCqrxiLP9RHz2GxDJaZuTRBw&index=2&t=262s
  let imageList = useRef(null);
  const imageWidth = 340;

  const [state, setState] = useState({
    isActive1: true,
    isActive2: false,
    isActive3: false
  });

  //Image transition
  const slideLeft = (index, duration, multiplied = 1) => {
    TweenLite.to(imageList.children[index], duration, {
      x: -imageWidth * multiplied,
      ease: Power3.easeOut
    });
  };

  const slideRight = (index, duration, multiplied = 1) => {
    TweenLite.to(imageList.children[index], duration, {
      x: imageWidth * multiplied,
      ease: Power3.easeOut
    });
  };

  const scale = (index, duration) => {
    TweenLite.from(imageList.children[index], duration, {
      scale: 1.2,
      ease: Power3.easeOut
    });
  };
  
  const nextSlide = () => {
    if (imageList.children[0].classList.contains("active")) {
      setState({ isActive1: false, isActive2: true });
      //Image transition
      slideLeft(0, 1);
      slideLeft(1, 1);
      scale(1, 1);
      slideLeft(2, 1);
      slideLeft(2, 0);
    } else if (imageList.children[1].classList.contains("active")) {
      setState({ isActive2: false, isActive3: true });
      //Image transition
      slideRight(0, 1);
      slideLeft(1, 1, 2);
      slideLeft(2, 1, 2);
      scale(2, 1);
    } else if (imageList.children[2].classList.contains("active")) {
      setState({ isActive1: true, isActive3: false });
      //Image transition
      slideLeft(2, 1, 3);
      slideLeft(0, 1, 0);
      slideLeft(1, 0, 0);
      scale(0, 1);
    }
  };

  const prevSlide = () => {
    if (imageList.children[0].classList.contains("active")) {
      setState({ isActive1: false, isActive3: true });
      //Image transition
      slideLeft(2, 0, 3);
      slideLeft(2, 1, 2);
      scale(2, 1);
      slideRight(0, 1);
      slideRight(1, 1);
    } else if (imageList.children[1].classList.contains("active")) {
      setState({ isActive2: false, isActive1: true });
      //Image transition
      slideLeft(0, 0);
      slideRight(0, 1, 0);
      slideRight(1, 1, 0);
      slideRight(2, 1, 2);
      scale(0, 1);
    } else if (imageList.children[2].classList.contains("active")) {
      setState({ isActive2: true, isActive3: false });
      slideLeft(2, 1);
      slideLeft(1, 0, 2);
      slideLeft(1, 1);
      scale(1, 1);
    }
  };



  return (
    <div className="page">
      <div className="home">
        <div className="content">

          <div className="info">
            {/* <h1>Title</h1> */}
            <h1>Welcome <br></br> to the <br></br> Sustainability Shop!</h1>
            {/* <h2>Caption</h2> */}
            <NavLink className="action" to="/products">Shop now</NavLink>
          </div>

          <div className="img-slider">

            <div className="testimonial-section">
              <div className="testimonial-container">
                <div onClick={prevSlide} className="arrows left">
                  <span>
                    <img src={leftArrow} alt="left arrow" />
                  </span>
                </div>
                <div className="inner">
                  <div className="t-image">
                    <ul ref={el => (imageList = el)}>
                      <li className={state.isActive1 ? "active" : ""}>
                        <img src={testimonials[0]} alt={testimonials[0].name} />
                      </li>
                      <li className={state.isActive2 ? "active" : ""}>
                        <img src={testimonials[1]} alt={testimonials[0].name} />
                      </li>
                      <li className={state.isActive3 ? "active" : ""}>
                        <img src={testimonials[2]} alt={testimonials[0].name} />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="arrows right" onClick={nextSlide}>
                  <img src={rightArrow} alt="right arrow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;