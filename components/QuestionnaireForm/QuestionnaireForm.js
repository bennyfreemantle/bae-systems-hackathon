import React, { useState } from "react";

export default function QuestionnaireForm({
  questionsArray,
  questionStep,
  setQuestionStep,
}) {
  const [answer, setAnswer] = useState();

  return (
    <div>
      <form>
        <label>{questionsArray[questionStep].question}</label>
        {questionsArray[questionStep].answers.map((answer, index) => {
          return (
            <div key={answer.options}>
              <input name={"options"} type={"radio"} id={`answers${index}`} />
              <label value={answer.points} for={`answers${index}`}>
                {answer.options}
              </label>
            </div>
          );
        })}
        <button onClick={() => setQuestionStep((prev) => prev + 1)}>
          Next
        </button>
      </form>
    </div>
  );
}
