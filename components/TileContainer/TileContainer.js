import React from "react";
import Tile from "./Tile/Tile";

export default function TileContainer() {
  return (
    <div className="container mx-auto justify-center p-4 flex flex-col gap-4 md:flex-row">
      <div className="flex flex-col gap-4">
        <Tile
          title={"Login"}
          desc={"Login to your account"}
          buttonText={"Login ->"}
          hrefLink={"/login"}
        />
        <Tile
          title={"Questionnaire"}
          desc={"Take our questionnaire to see your current carbon footprint"}
          buttonText={"Questionnaire ->"}
          hrefLink={"/questionnaire"}
        />
      </div>
      <div className="flex flex-col gap-4">
        <Tile
          title={"Leader board"}
          desc={"Check how your score compares with your colleagues"}
          buttonText={"Leaderboard ->"}
          hrefLink={"/leaderboard"}
        />
        <Tile
          title={"Learning"}
          desc={"Learn more about how carbon footprint affects your world"}
          buttonText={"Learn ->"}
          hrefLink={"/learn"}
        />
      </div>
    </div>
  );
}
