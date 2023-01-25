import QuestionnaireForm from "@/components/QuestionnaireForm/QuestionnaireForm";
import Head from "next/head";
import React from "react";

export default function Questionnaire() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col justify-center min-h-screen">
        <QuestionnaireForm />
      </main>
    </>
  );
}
