import React from "react";
import "./style.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card1 from "../../assets/card1.png";
import Card2 from "../../assets/card2.png";
import Card3 from "../../assets/card3.png";

const Firstleftsection = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    arrows: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    adaptiveHeight: false,
    autoplay: true,
    autoplaySpeed: 1500,
  };
  return (
    <div>
      <div
        className="row"
        style={{
          justifyContent: "space-evenly",
        }}
      >
        <div className="col-md-4">
          <div
            className="card"
            style={{
              border: "none",
              background: "transparent",
            }}
          >
            <div className="card-body">
              <h5
                className="card-title"
                style={{
                  textAlign: "left",
                  color: "white",
                  fontSize: "20px",
                }}
              >
                Get notified when a highly correlated whale makes a move
              </h5>
              <p
                className="card-text"
                style={{
                  textAlign: "left",
                  color: "white",
                  fontSize: "16px",
                  lineHeight: "19.2px",
                }}
              >
                Find out when a certain whale moves more than any preset amount
                on-chain or when a dormant whale you care about becomes active.
              </p>
              {/* <a href="#" className="btn btn-primary">
                Go somewhere
              </a> */}
            </div>
          </div>
        </div>

        <div className="col-md-6 row">
          <Slider {...settings}>
            <div className="col-md-4">
              <div
                className="card"
                style={{
                  border: "none",
                  background: "transparent",
                }}
              >
                <div
                  className="card-body"
                  style={{
                    padding: 0,
                  }}
                >
                  {/* <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a> */}
                  <img src={Card1} style={{ width: "100%" }} />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="card"
                style={{
                  border: "none",
                  background: "transparent",
                }}
              >
                <div
                  className="card-body"
                  style={{
                    padding: 0,
                  }}
                >
                  {/* <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a> */}
                  <img src={Card2} style={{ width: "100%" }} />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="card"
                style={{
                  border: "none",
                  background: "transparent",
                }}
              >
                <div
                  className="card-body"
                  style={{
                    padding: 0,
                  }}
                >
                  {/* <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a> */}
                  <img src={Card3} style={{ width: "100%" }} />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="card"
                style={{
                  border: "none",
                  background: "transparent",
                }}
              >
                <div
                  className="card-body"
                  style={{
                    padding: 0,
                  }}
                >
                  <img src={Card3} style={{ width: "100%" }} />
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Firstleftsection;
