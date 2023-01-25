import React from "react";

export default function QuestionnaireForm({ questionsArray, questionStep }) {
  return (
    <div>
      <form>
        <label>{question}</label>
        {answers.map((answer, index) => {
          <div>
            <input type={"checkbox"} id={`answer-${index}`} />
            <label for={`answer-${index}`}>{answer.title}</label>
          </div>;
        })}
      </form>
    </div>
  );
}
