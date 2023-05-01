import React, { useState } from "react";

export function Home() {
  const [selectedColor, setSelectedColor] = useState("yellow");

  return (
    <div className="traffic-light">
      <div

        onClick={() => setSelectedColor("red")}
        className={"Light red" + (selectedColor === "red" ? " glow" : "")}></div>
      <div
        onClick={() => setSelectedColor("yellow")}
        className={"Light yellow" + (selectedColor === "yellow" ? " glow" : "")}></div>
      <div
        onClick={() => setSelectedColor("green")}
        className={"Light green" + (selectedColor === "green" ? " glow" : "")}></div>
    </div>
  );
}

