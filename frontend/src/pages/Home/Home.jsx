import React from "react";
import { Link } from "react-router-dom";

import FrameSvgText from "../../components/FrameSvgText/FrameSvgText";
import "./Home.css";

function Home() {
  return (
    <>
      <h1 className="h1-home">
        Discover, create, share <br />
        new recipes & flavors!
      </h1>
      <div className="home-elements">
        <svg
          width="100"
          height="129"
          viewBox="0 0 100 129"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_125_77)">
            <path
              d="M47.9807 33.8895L44.1706 42.6026L37.1194 48.2373L30.8384 50.3244L18.4817 62.9316L16.8671 76.2643L18.8958 90.9902L28.1207 105.903L31.1848 113.1L30.9446 118.016L35.2078 114.76L44.0471 112.068L58.7564 101.338L67.7882 88.339L72.1506 66.3408L66.6682 54.8632L55.9582 46.2957L50.2229 41.8893L47.9807 33.8895Z"
              fill="#F6CD00"
            />
            <path
              d="M47.9444 35.872L66.1658 18.8974L81.7867 16.7727L99.9868 23.607L88.1181 32.5183L74.2368 37.6394L58.0986 39.0757L47.9444 35.872Z"
              fill="#006834"
            />
          </g>
          <defs>
            <clipPath id="clip0_125_77">
              <rect
                width="58.9225"
                height="114.162"
                fill="white"
                transform="translate(46) rotate(23.6185)"
              />
            </clipPath>
          </defs>
        </svg>

        <Link to="/signup" className="home-link-square">
          Sign Up Now
        </Link>
      </div>
      <div className="home-page">
        <FrameSvgText
          svgPath="carot"
          title="Discover new recipes"
          description="Embark on a one-of-a-kind culinary adventure"
        />
        <FrameSvgText
          svgPath="tomat"
          title="Give inpiration"
          description="Introduce the world to new flavors"
        />
        <FrameSvgText
          svgPath="cherry"
          title="Become a Chief"
          description="Join our network of Chefs!"
        />
        <div className="square-img-text">
          <div className="square-img">
            <svg
              width="80"
              height="100"
              viewBox="0 0 57 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_75_491)">
                <path
                  d="M28.207 12.0923L11.7262 13.4194L3.14025 18.4702L0 31.2973L0.630262 41.026L5.25771 45.0951L12.7656 46L17.4759 44.6455L20.2347 40.7957L23.3916 43.2854L26.6203 45.0951L34.6976 44.1738L38.4736 40.3569L39.994 40.2308L43.5821 44.1738L51.3 43.5103L57 35.5968L56.0436 27.6779L52.8425 20.6583L47.148 15.3553L36.8814 12.0923H28.207Z"
                  fill="#F7A418"
                />
                <path
                  d="M25.0002 15.3827L20.71 0H25.9566L27.4217 15.3827H25.0002Z"
                  fill="#007071"
                />
                <path
                  d="M8.22645 1.17907L12.4448 2.07296L13.65 4.36528V7.69409L11.9417 8.84573H9.73024L9.63072 7.69409L13.2464 6.15856L15.8559 6.35598L18.2664 7.69409L19.9748 8.84573L20.7101 11.7358V14.1268L22.2857 14.5272L25.0003 15.3827L24.0659 16.4192L20.7101 15.8214L19.2726 15.3827L18.67 13.7265V11.5384L16.6134 9.84383L12.3287 4.65045L7.4248 8.79638L8.82907 10.0412L15.3528 5.06175L15.4579 2.97234L13.1469 0H8.82907L8.22645 1.17907Z"
                  fill="#007071"
                />
                <path
                  d="M29.3901 14.5107L33.1054 13.222L36.8814 12.0923L42.211 14.5107V17.8286L40.1654 21.5138L35.8033 22.8026L34.6976 20.4061L35.8033 16.4192H40.3534L44.439 18.7499L46.4791 21.8813V26.4879L48.1542 29.0489H46.4791L44.7818 26.1698L45.2075 23.4881L44.5662 21.0203L42.504 19.397L40.0161 18.196L37.097 18.2673L36.2456 20.1044L37.6665 20.5706L39.3029 19.3257L40.2981 15.3827L37.7383 14.0336L34.6976 14.2475L32.4751 15.7995L30.1254 15.3827L29.3901 14.5107Z"
                  fill="#007071"
                />
              </g>
              <defs>
                <clipPath id="clip0_75_491">
                  <rect width="57" height="46" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="square-text">
            <h4>Start you culinary adventure now!</h4>
            <div
              className="line"
              style={{ width: 92, height: 0, border: "0.5px #2E2E2E solid" }}
            />
            <Link to="/signup" className="home-link-square">
              Register
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
