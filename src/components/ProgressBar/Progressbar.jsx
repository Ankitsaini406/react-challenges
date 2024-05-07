import React, { useEffect, useState } from "react";
import { Max, Min } from "../const";
import "../../css/progressbar.css";

const Progressbar = () => {
  const [value, setValue] = useState(0);
  const [precent, setPrecent] = useState(value);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setValue((val) => val + 1);
    }, 100);
  }, []);

  useEffect(() => {
    setPrecent(Math.min(Max, Math.max(value, Min)));

    if (value >= Max) {
      setSuccess(true);
    }
  }, [value]);

  return (
    <div className="progress-box">
      <h1>Progress Bar</h1>
      <div className="progress-bar">
        <span style={{ color: precent > 49 ? "white" : "black" }}>
          {precent.toFixed()}%
        </span>
        <div
          // style={{ width: `${precent}%` }}
          // This is alternative way of width using css
          style={{
            transform: `scaleX(${precent / Max})`,
            transformOrigin: "left",
          }}
          role="progressbar"
          aria-valuemin={Min}
          aria-valuemax={Max}
          aria-valuenow={precent.toFixed()}
        />
      </div>
      <span>{success ? "Complete!" : "Loading..."}</span>
    </div>
  );
};

export default Progressbar;
