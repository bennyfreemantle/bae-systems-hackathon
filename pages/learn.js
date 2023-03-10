import Header from "@/components/Header/Header";
import Head from "next/head";
import React from "react";

export default function learn() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-col min-h-screen">
        <h1>Learn Page</h1>
      </main>
    </>
  );
}
