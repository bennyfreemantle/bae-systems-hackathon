import { React } from "react";
import { useScore } from "@/context/useScore"
import { RiMedal2Fill} from 'react-icons/ri';

export default function Leaderboard () {



    const {score} = useScore()
    const medal = score <= 6 ? 'Bronze' : score > 6 && score <= 12 ? 'Silver' : 'Gold'


    

    return (
        <div className="container mx-auto p-3 bg-red-400 flex flex-col items-center">
        <div className="flex">
        <p>Leaderboard</p>
        <div>
        <p>Name</p>
        <p>User</p>
        <p>Mukti</p>
        <p>Luke</p>
        <p>Ben</p>
        </div>
        <div>
        <p>Your score </p>
        <p>{score}</p>
        <p>13</p>
        <p>7</p>
        <p>4</p>
        </div>
        
        <div>
        <p>Rating</p>
        <RiMedal2Fill />
        <RiMedal2Fill />
        <RiMedal2Fill />
        <RiMedal2Fill />
        </div>
        
        </div>
        </div>
        
    )
}