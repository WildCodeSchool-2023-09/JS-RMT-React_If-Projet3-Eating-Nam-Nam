import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

function Home() {
  return (
    <>
      <h1 className="h1-home">
        Discover,
        <br /> Create,
        <br /> Share new recipes
      </h1>
      <div className="home-page">
        <div className="square-img-text">
          <div className="square-img">
            <svg
              width="123"
              height="100"
              viewBox="0 0 80 115"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_75_390)">
                <path
                  d="M69.7246 41.2729L80.4548 26.3729L85.1739 6.39683L90.329 8.91285L86.483 22.6679L83.2437 29.6039L78.5509 38.4647L92.215 23.1877L97.6754 8.77524L104.143 13.391L93.3674 30.6438L89.9652 34.8026L84.3246 41.6822L100.284 27.9069L105.873 18.8509L111.028 21.3669L105.548 30.565L90.5392 46.0043L80.4445 53.6924L69.7246 41.2729Z"
                  fill="#006834"
                />
                <path
                  d="M79.3195 71.6046L80.9442 45.8357L62.5535 38.3549L53.9922 42.2618L15.225 90.6408L17.0834 99.7218L25.7678 98.9418L79.3195 71.6046Z"
                  fill="#F08229"
                />
              </g>
              <defs>
                <clipPath id="clip0_75_390">
                  <rect
                    width="45.5371"
                    height="122.304"
                    fill="white"
                    transform="translate(92.585) rotate(49.2008)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="square-text">
            <h4>Become a Chief</h4>
            <div
              className="Line"
              style={{ width: 92, height: 0, border: "0.5px #2E2E2E solid" }}
            />
            <p>Embark on a one-of-a-kind culinary adventure</p>
          </div>
        </div>
        <div className="square-img-text">
          <div className="square-img">
            <svg
              width="80"
              height="100"
              viewBox="0 0 95 98"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_238_2)">
                <path
                  d="M42.2777 36.7523L21.5252 40.4595L13.4213 49.2959L9.81642 66.4861L15.7168 82.9202L30.6056 91.2913L48.2894 91.8267L66.5867 88.5582L78.1669 83.5277L88.2732 73.601L91.3333 64.1899L89.21 52.3035L83.5543 40.0642L74.7274 33.9069L60.8807 33.4291L42.2777 36.7523Z"
                  fill="#E34B37"
                />
                <path
                  d="M32.5417 10.8517L39.4109 32.3561L16.4318 38.6064L7.87423 55.6139L26.8718 43.8477L30.5405 64.3853L35.713 54.9108L38.2541 42.8295L49.0604 45.0017L53.2303 51.1013L60.0778 56.7122L60.4169 47.0755L57.6808 41.4105L58.5834 36.8118L68.7041 37.7354L80.0488 43.5686L67.5337 31.1837L59.1598 28.5038L66.377 22.7666L68.0116 14.6149L62.5086 18.4132L54.2186 23.9129L45.7845 30.5477L40.2574 7.61053L32.5417 10.8517Z"
                  fill="#008F53"
                />
              </g>
              <defs>
                <clipPath id="clip0_238_2">
                  <rect
                    width="80.6504"
                    height="84.3163"
                    fill="white"
                    transform="translate(0.565674 14.7009) rotate(-10.1283)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="square-text">
            <h4>Become an inspiration</h4>
            <div
              className="Line"
              style={{ width: 92, height: 0, border: "0.5px #2E2E2E solid" }}
            />
            <p>Introduce the world to new flavors</p>
          </div>
        </div>
        <div className="square-img-text">
          <div className="square-img">
            <svg
              width="60"
              height="80"
              viewBox="0 0 60 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40.8316 16.7917L31.9031 22.5507L30.1328 29.7511L35.4865 36.9516L44.7998 38.9283L54.0618 36.9516L59.4668 29.273L56.9439 21.1092L49.6061 16.7917H40.8316Z"
                fill="#C11C43"
              />
              <path
                d="M11.66 33.4902L2.72294 39.2492L0.952637 46.4496L6.30631 53.6501L15.6196 55.6268L24.8902 53.6501L30.2952 45.9715L27.7637 37.8148L20.426 33.4902H11.66Z"
                fill="#C11C43"
              />
              <path
                d="M11.6595 33.4903L8.99121 16.7915L10.3254 4.08192L13.1476 0L15.6192 3.01148L18.5526 10.1834L21.828 11.6249L25.5397 13.2591L41.3527 20.01V22.7717L19.2367 11.6249L13.9515 7.0934L11.0865 12.3742L13.9515 36.6802L11.6595 33.4903Z"
                fill="#006B35"
              />
            </svg>
          </div>
          <div className="square-text">
            <h4>Join our network of Chefs!</h4>
            <div
              className="Line"
              style={{ width: 92, height: 0, border: "0.5px #2E2E2E solid" }}
            />
            <p>Join our network of Chefs!</p>
          </div>
        </div>
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
            <p>Start you culinary adventure now!</p>
            <div
              className="Line"
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
