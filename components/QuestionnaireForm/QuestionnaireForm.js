import React, { useState } from "react";
import { useScore } from "@/context/useScore";
import Link from "next/link";

export default function QuestionnaireForm({
  questionsArray,
  questionStep,
  setQuestionStep,
}) {
  const [answer, setAnswer] = useState();
  const { score, setScore } = useScore();

  function handleSubmit(e) {
    e.preventDefault();
    setQuestionStep((prev) => prev + 1);
    setScore((prev) => prev + answer);
    console.log(answer);
  }

  const endOfQuestionnaire = questionStep === questionsArray.length;

  return (
    <div>
      {!endOfQuestionnaire ? (
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>{questionsArray[questionStep].question}</label>
          {questionsArray[questionStep].answers.map((answer, index) => {
            return (
              <div key={answer.options}>
                <input
                  value={answer}
                  onChange={() => setAnswer(answer.points)}
                  name={"options"}
                  type={"radio"}
                  id={`answers${index}`}
                />
                <label value={answer.points} htmlFor={`answers${index}`}>
                  {answer.options}
                </label>
              </div>
            );
          })}
          <button>Next</button>
        </form>
      ) : (
        <div>
          <h1>Questionnaire finished</h1>
          <Link href='/leaderboard'>
          <button>
            View Score
          </button>
          </Link>
        </div>
      )}
    </div>
  );
}
