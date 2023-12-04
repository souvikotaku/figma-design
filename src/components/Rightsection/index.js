import React, { useState } from "react";

const Rightsection = () => {
  const [emailvalue, setemailvalue] = useState();

  //   const submitfunc = () => {
  //     console.log(emailvalue);
  //   };
  return (
    <div
      style={{
        display: "flex",
        // justifyContent: "center",
        alignItems: "center",
        height: "100%",
        padding: "9%",
      }}
    >
      <form>
        <div className="mb-3">
          <label
            htmlFor="exampleInputEmail1"
            className="form-label"
            style={{
              fontSize: "39px",
              fontWeight: 500,
              color: "#B0B1B3",
              lineHeight: "46.8px",
              textAlign: "left",
              marginBottom: "10%",
            }}
          >
            Sign up for exclusive access.
          </label>
          <input
            onChange={(event) => {
              setemailvalue(event.target.value);
            }}
            value={emailvalue}
            placeholder="Your email address"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          {emailvalue === "" ? (
            <div
              id="emailHelp"
              className="form-text"
              style={{
                color: "red",
              }}
            >
              Please enter an email Id.
            </div>
          ) : !emailvalue?.includes("@") ? (
            <div
              id="emailHelp"
              className="form-text"
              style={{
                color: "red",
              }}
            >
              Please enter a valid email.
            </div>
          ) : (
            ""
          )}
        </div>

        <button
          style={{
            background: "black",
            border: "1px solid black",
            width: "100%",
            marginBottom: "20px",
          }}
          type="button"
          className="btn btn-primary"
          onClick={() => {
            console.log(emailvalue);
            if (emailvalue != "" && emailvalue?.includes("@")) {
              window.open("https://app.loch.one/welcome");
            }
          }}
        >
          Get Started
        </button>
        <div
          //   id="emailHelp"
          className="form-text"
          style={{
            fontWeight: "bold",
          }}
        >
          You’ll receive an email with an invite link to join.
        </div>
      </form>
    </div>
  );
};

export default Rightsection;
