import { React } from "react";
import { useScore } from "@/context/useScore"

export default function Leaderboard () {



    const {score} = useScore()

    return (
        <div className="container mx-auto p-3 bg-red-400 flex flex-col items-center">
        <p>Leaderboard</p>
        <div>
        <p>Your score: {score}</p>
        <p>Mukti: 12</p>
        <p>Luke: 7</p>
        <p>Ben: 4</p>
        </div>
        </div>
    )
}