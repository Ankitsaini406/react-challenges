import { useEffect, useState } from "react";
import "../../css/trafficligt.css";

const lights = [
  { color: "red", time: 4000, netLight: 1 },
  { color: "yellow", time: 5000, netLight: 2 },
  { color: "green", time: 3000, netLight: 0 },
];

const TrafficLight = () => {
  const [activeLight, setActiveLight] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setActiveLight(lights[activeLight].netLight);
    }, lights[activeLight].time);
  }, [activeLight]);

  return (
    <div className="traffic-box">
      {lights.map((light, i) => {
        const isActive = activeLight === i ? true : false;
        return (
          <div
            className="light-cricul"
            style={{ backgroundColor: isActive ? light.color : "" }}
          ></div>
        );
      })}
    </div>
  );
};

export default TrafficLight;
