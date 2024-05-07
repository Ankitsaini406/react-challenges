import React, { useEffect, useRef, useState } from "react";
import "../../css/stpear.css";
import { CheckoutStep } from "../../data/Checkout-step";

const Stpear = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const [margin, setMargins] = useState({
    marginLeft: 0,
    marginRight: 0,
  });
  const stepRef = useRef([]);

  useEffect(() => {
    setMargins({
      marginLeft: stepRef.current[0].offsetWidth / 2,
      marginRight: stepRef.current[CheckoutStep.length - 1].offsetWidth / 2,
    })
  }, [stepRef])

  const handleNext = () => {
    setCurrentStep((prevStep) => {
      if (prevStep === CheckoutStep.length) {
        setIsComplete(true);
        return prevStep;
      } else {
        return prevStep + 1;
      }
    });
  };

  const calculateProgressBarWidth = () => {
    return ((currentStep - 1) / (CheckoutStep.length - 1)) * 100;
  };

  const ActiveComponent = CheckoutStep[currentStep - 1].Component;

  if (!CheckoutStep.length) {
    return <></>;
  }

  return (
    <div className="stepper-box">
      <h1>Checkout</h1>
      <div className="stepper">
        {CheckoutStep.map((step, index) => {
          return (
            <div
              key={step.name}
              ref={(el) => {
                stepRef.current[index] = el;
              }}
              className={`step ${currentStep > index + 1 || isComplete ? "complete" : ""
                } ${currentStep === index + 1 ? "active" : ""}`}
            >
              <div className="step-number">
                {currentStep > index + 1 || isComplete ? (
                  <span>&#10003;</span>
                ) : (
                  index + 1
                )}
              </div>
              <div className="step-name">{step.name}</div>
            </div>
          );
        })}
        <div className="progress-bar"
          style={{
            width: `calc(100% - ${margin.marginLeft + margin.marginRight}px)`,
            marginLeft: margin.marginLeft,
            // marginRight: margin.marginRight,
          }}
        >
          <div
            className="progress"
            style={{ width: `${calculateProgressBarWidth()}%` }}
          ></div>
        </div>
      </div>
      <ActiveComponent />
      {!isComplete && (
        <button className="step-button" onClick={handleNext}>
          {currentStep === CheckoutStep.length ? "Finish" : "Next"}
        </button>
      )}
    </div>
  );
};

export default Stpear;
