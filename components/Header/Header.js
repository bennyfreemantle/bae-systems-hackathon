import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="bg-gray-200 h-20 flex items-center">
      <div className="container mx-auto p-3 flex justify-between">
        <h1 className="text-2xl text-blue-700 font-bold">
          <Link href={"/"}>Logo</Link>
        </h1>
        <nav>
          <ul className="flex gap-3">
            <li className="text-lg">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="text-lg">
              <Link href={"/questionnaire"}>Questionnaire</Link>
            </li>
            <li className="text-lg">
              <Link href={"/leaderboard"}>Leaderboard</Link>
            </li>
            <li className="text-lg">
              <Link href={"/learn"}>Learn</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
