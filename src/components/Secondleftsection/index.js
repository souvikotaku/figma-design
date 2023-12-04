import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cohorts from "../../assets/cohorts.png";
import "./style.scss";

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
                className="card-title paradesc"
                style={{
                  //   textAlign: "right",
                  color: "white",
                  fontSize: "20px",
                }}
              >
                Watch what the whales are doing
              </h5>
              <p
                className="card-text paradesc"
                style={{
                  //   textAlign: "right",
                  color: "white",
                  fontSize: "16px",
                  lineHeight: "19.2px",
                }}
              >
                All whales are not equal. Know exactly what the whales impacting
                YOUR portfolio are doing.
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
