import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cohorts from "../../assets/cohorts.png";

const Secondleftsection = () => {
  return (
    <div>
      <div
        className="row"
        style={{
          justifyContent: "space-evenly",
        }}
      >
        <div className="col-md-5">
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
              <img src={Cohorts} style={{ width: "100%" }} />
            </div>
          </div>
        </div>
        <div
          className="col-md-6"
          style={{
            alignItems: "center",
            display: "flex",
          }}
        >
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
                marginTop: "-10%",
              }}
            >
              <h5
                className="card-title"
                style={{
                  textAlign: "right",
                  color: "white",
                  //   fontSize: "31px",
                }}
              >
                Get notified when a highly correlated whale makes a move
              </h5>
              <p
                className="card-text"
                style={{
                  textAlign: "right",
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
      </div>
    </div>
  );
};

export default Secondleftsection;
