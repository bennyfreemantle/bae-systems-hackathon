import { React } from "react";
import { useScore } from "@/context/useScore";
import { RiMedal2Fill } from "react-icons/ri";
import Head from "next/head";
import Header from "@/components/Header/Header";

export default function Leaderboard() {
  const { score } = useScore();
  const medal =
    score <= 6 ? "Bronze" : score > 6 && score <= 12 ? "Silver" : "Gold";

  const medalClass =
    medal === "Bronze"
      ? "text-amber-900"
      : medal === "Silver"
      ? "text-zinc-400"
      : "text-amber-400";

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="container mx-auto p-3 flex flex-col items-center min-h-screen">
        <h1 className="text-2xl font-bold">Leaderboard</h1>

        <table className="">
          <tr>
            <th className="text-left p-2">User</th>
            <th className="text-left p-2">Score</th>
            <th className="text-left p-2">Medal</th>
          </tr>
          <tr>
            <td className="text-left p-2">You</td>
            <td className="text-left p-2">{score}</td>
            <td className="text-left p-2">
              <div className={`${medalClass}`}>
                <RiMedal2Fill size={23} />
              </div>
            </td>
          </tr>
          <tr>
            <td className="text-left p-2">Mukti</td>
            <td className="text-left p-2">13</td>
            <td className="text-left p-2">
              <div className={`text-amber-400`}>
                <RiMedal2Fill size={23} />
              </div>
            </td>
          </tr>
          <tr>
            <td className="text-left p-2">Luke</td>
            <td className="text-left p-2">7</td>
            <td className="text-left p-2">
              <div className={`text-zinc-400`}>
                <RiMedal2Fill size={23} />
              </div>
            </td>
          </tr>
          <tr>
            <td className="text-left p-2">Ben</td>
            <td className="text-left p-2">4</td>
            <td className="text-left p-2">
              <div className={`text-amber-900`}>
                <RiMedal2Fill size={23} />
              </div>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
}
