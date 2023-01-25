import { React } from "react";
import { useScore } from "@/context/useScore"

export default function Leaderboard () {



    const {score} = useScore()
    const medal = score <= 6 ? 'Bronze' : score > 6 && score <= 12 ? 'Silver' : 'Gold'


    

    return (
        <div className="container mx-auto p-3 bg-red-400 flex flex-col items-center">
        <p>Leaderboard</p>
        <div>
        <p>Your score: {score} {medal} </p>
        <p>Mukti: 13 Gold</p>
        <p>Luke: 7 Silver</p>
        <p>Ben: 4 Bronze</p>
        </div>
        </div>
    )
}