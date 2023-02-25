import React, { useState } from "react";
import FirstStage from "../components/stage/FirstStage";
const Play = () => {
  const [score, setScore] = useState(100);
  const [budget, setBuget] = useState(500);
  return (
    <FirstStage score={score} setScore={setScore} budget={budget} setBuget={setBuget}/>
  );
};

export default Play;
