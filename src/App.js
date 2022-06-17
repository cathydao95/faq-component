import Question from "./components/Question";
import { useState } from "react";

function App() {
  const questionObjects = [
    {
      question: "How many bones does a cat have?",
      answer: "A cat has 230 bones - 6 more than a human",
    },
    {
      question: "How much do cats sleep?",
      answer: "The average cat sleeps 12-16 hours per day",
    },
    {
      question: "How long do cats live",
      answer:
        "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
    },
  ];

  return (
    <div className="container">
      <h1>Frequently Asked Questions</h1>
      {questionObjects.map((item) => {
        return (
          <Question
            question={item.question}
            answer={item.answer}
            key={item.question}
          />
        );
      })}
    </div>
  );
}

export default App;
