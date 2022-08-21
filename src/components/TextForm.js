import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const ToUpper = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const ToLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const ToClear = () => {
    let newText = "";
    setText(newText);
  };
  const Change = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <div>
        <div
          className="mb-3"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          <h3> Enter String....!!!!!!!!</h3>
          <textarea
            className="form-control "
            id="textBox"
            rows="6"
            value={text}
            onChange={Change}
            style={{
              color: props.mode === "dark" ? "white" : "black",
              background: props.mode === "light" ? "white" : "grey",
            }}
          ></textarea>
          <button className="btn btn-primary my-3 mx-2" onClick={ToUpper}>
            {" "}
            TO UPPER CASE
          </button>
          <button className="btn btn-primary my-3 mx-2" onClick={ToLower}>
            {" "}
            to lower case
          </button>
          <button className="btn btn-primary my-3 mx-2" onClick={ToClear}>
            {" "}
            Clear Text
          </button>
        </div>
        <div
          className="container"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          <h2>Text Summary</h2>
          <p>Number of Words : {text.split(" ").length}</p>
          <p>Number of Characters : {text.length}</p>
          <h2>Text Preview :</h2>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
