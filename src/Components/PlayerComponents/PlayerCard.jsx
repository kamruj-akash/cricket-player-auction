import { faFlag, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
const PlayerCard = ({ player, selectPlayerHandler }) => {
  const [selected, setSelected] = useState(true);
  const handleSelectedBtn = (player) => {
    selectPlayerHandler(player);
    setSelected(!selected);
  };
  return (
    <div
      key={player.id}
      className="card bg-base-100 shadow-sm p-6 border-1 border-[#13131314]"
    >
      <figure>
        <img
          className="w-full rounded-xl h-[240px]
                "
          src={player.image}
          alt="Shoes"
        />
      </figure>
      <div className="py-6">
        <h2 className="text-xl font-bold">
          {" "}
          <FontAwesomeIcon icon={faUserTie} /> {player.name}
        </h2>
        <div className="flex justify-between text-[16px] border-b-1 border-[#1313139b] pb-5 mb-5">
          <p className="text-[#1313139d] flex items-center">
            <FontAwesomeIcon icon={faFlag} /> {player.country}
          </p>
          <p className="py-[9px] px-[16px] bg-[#1313130f] rounded-xl text-[16px] font-thin">
            {player.role}
          </p>
        </div>
        <p className="text-md font-normal">Rating</p>
        <div className="flex justify-between my-2">
          <p>{player.battingStyle}</p>
          <p className="text-[#1313139d]"> {player.role}</p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <p>Price: ${player.price}</p>
          <button
            disabled={!selected}
            onClick={() => handleSelectedBtn(player)}
            className="btn text-[#1313139d] rounded-xl disabled:opacity-50"
          >
            {selected ? "Choose Player" : "Selected"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
