import React, { useEffect, useState } from "react";
// import imgHeader from "../src/assets/image/upateheart.png";
import "./App.css";

const getRandomColor = () => {
  const digits = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  const colourPicker = new Array(6)
    .fill("")
    .map(() => digits[Math.floor(Math.random() * digits.length)])
    .join("");

  return `#${colourPicker}`;
};

function App() {
  const [colour, setColour] = useState(" #060b58 ");
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<boolean | undefined>(undefined);

  const pickColour = () => {
    const actualColour = getRandomColor();
    setColour(actualColour);
    setAnswers(
      [actualColour, getRandomColor(), getRandomColor()].sort(
        () => 0.5 - Math.random()
      )
    );
  };

  useEffect(() => {
    pickColour();
  }, []);

  const handleAnswerClicked = (answer: string) => {
    if (answer === colour) {
      setResult(true);
      pickColour();
    } else {
      setResult(false);
    }
  };
  return (
    <div className="App">
      <div className="col">
        <div className="guess-me" style={{ background: colour }}></div>
        {answers.map((answer) => (
          <button
            onClick={() => handleAnswerClicked(answer)}
            className="button"
            key={answer}
          >
            {answer}
          </button>
        ))}
        {result === true && (
          <div className="right">That is the Correct Answer!</div>
        )}
        {result === false && (
          <div className="wrong">That is the Wrong Answer!</div>
        )}
      </div>
    </div>
  );
}

export default App;
