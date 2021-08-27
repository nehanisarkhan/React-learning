import React, { useRef, useState } from "react";
import "./style.css";
const InputForm = () => {
  const [Text, setText] = useState("");
  const [Name, setName] = useState("");
  const submitRef = useRef(null);
  return (
    <section className="input-fields">
      <div className="messagebox">
        <textarea
          placeholder="Enter your Message"
          rows="5"
          cols="50"
          value={Text}
          onChange={(e) => {
            if (Text.length < 140) {
              setText(e.target.value);
            }
          }}
        />
      </div>
      <div className="namefield">
        <input
          type="text"
          placeholder="Enter your name"
          className="name"
          value={Name}
          onChange={(e) => {
            if (Name.length < 6) {
              setName(e.target.value);
            }
          }}
        />
      </div>
      <button
        className="btn"
        ref={submitRef}
        onClick={() => {
          console.log(Text);
          console.log(Name);
        }}
      >
        Submit
      </button>
    </section>
  );
};

export default InputForm;
