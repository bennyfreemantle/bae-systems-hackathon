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
    <div className="container mx-auto p-4">
      {!endOfQuestionnaire ? (
        <form
          className="w-full flex flex-col gap-4 items-center"
          onSubmit={(e) => handleSubmit(e)}
        >
          <label className="text-2xl md:w-1/2 text-center">
            {questionsArray[questionStep].question}
          </label>
          {questionsArray[questionStep].answers.map((answer, index) => {
            return (
              <div
                key={answer.options}
                className="rounded-md border-2 p-2 flex gap-2 w-full border-blue-700 md:max-w-[600px]"
              >
                <input
                  value={answer}
                  onChange={() => setAnswer(answer.points)}
                  name={"options"}
                  type={"radio"}
                  id={`answers${index}`}
                  required
                />
                <label
                  className="w-full"
                  value={answer.points}
                  htmlFor={`answers${index}`}
                >
                  {answer.options}
                </label>
              </div>
            );
          })}
          <button className="rounded bg-blue-700 w-1/2 p-2 text-white text-lg">
            Next
          </button>
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
