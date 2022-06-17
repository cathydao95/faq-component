import { useState } from "react";

function Question(props) {
  const [isShown, setIsShown] = useState(false);

  function handleClick() {
    setIsShown((prevShown) => !prevShown);
  }
  return (
    <div className="wrapper">
      <div className="question-container">
        <button onClick={handleClick}>Show Answer</button>
        <div>
          <h2>{props.question}</h2>
          {isShown ? <h4 className="answer">{props.answer}</h4> : ""}
        </div>
      </div>
    </div>
  );
}

export default Question;
