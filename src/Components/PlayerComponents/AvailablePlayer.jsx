import { use } from "react";
import PlayerCard from "./PlayerCard";

const AvailablePlayer = ({
  promiseData,
  selectPlayerHandler,
  balance,
  setBalance,
}) => {
  const playersData = use(promiseData);

  return (
    <>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-7 font-inter">
        {/* mapping player data */}
        {playersData.map((player) => (
          <PlayerCard
            balance={balance}
            setBalance={setBalance}
            key={player.id}
            selectPlayerHandler={selectPlayerHandler}
            player={player}
          >
            {" "}
          </PlayerCard>
        ))}
      </div>
    </>
  );
};

export default AvailablePlayer;
