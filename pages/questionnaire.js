import QuestionnaireForm from "@/components/QuestionnaireForm/QuestionnaireForm";
import Head from "next/head";
import React, { useState } from "react";

const questionsArray = [
  {
    question: "How do you travel to work ?",
    answers: [
      { answer: "Car / Motorbike", points: 0 },
      { answer: "Car Share", points: 1 },
      { answer: "Bus", points: 2 },
      { answer: "Walk / Cycle", points: 3 },
    ],
  },
  {
    question: "Do you sort out glass, paper, plastic, bottles and cans?",
    answers: [
      { answer: "No", points: 0 },
      { answer: "Sometimes", points: 1 },
      { answer: "Yes", points: 3 },
    ],
  },
  {
    question: "Do you use reusable bags?",
    answers: [
      { answer: "No", points: 0 },
      { answer: "Sometimes", points: 1 },
      { answer: "Yes", points: 3 },
    ],
  },
  {
    question: "Do you switch off appliances when not in use?",
    answers: [
      { answer: "No", points: 0 },
      { answer: "Sometimes", points: 1 },
      { answer: "Yes", points: 3 },
    ],
  },
  {
    question: "How much do you personally prioritse recycling at work",
    answers: [
      { answer: "No what can i do?", points: 0 },
      { answer: "Sometimes i do my best", points: 1 },
      { answer: "I always try to prioritse", points: 3 },
    ],
  },
  {
    question: "How easy accessible is recycling at work",
    answers: [
      { answer: "Not evident?", points: 0 },
      { answer: "Some opportunities", points: 1 },
      { answer: "We have multiple recycling options", points: 3 },
    ],
  },
];

export default function Questionnaire() {
  const [questionStep, setQuestionStep] = useState(0);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col justify-center min-h-screen">
        <QuestionnaireForm
          questionsArray={questionsArray}
          questionStep={questionStep}
        />
      </main>
    </>
  );
}
