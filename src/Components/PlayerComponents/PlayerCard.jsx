import { faFlag, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import { toast } from "react-toastify";

const PlayerCard = ({ player, selectPlayerHandler, balance, setBalance }) => {
  const notify = () => toast("Player Selected!");

  const [selected, setSelected] = useState(true);
  const handleSelectedBtn = (player) => {
    if (player.price <= balance) {
      setBalance(balance - player.price);
      selectPlayerHandler(player);
      setSelected(!selected);
      notify();
    } else {
      alert("Not have Balance");
    }
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
            onClick={() =>
              document.getElementById(`modal_${player.id}`).showModal(player)
            }
            className="btn text-[#1313139d] rounded-xl disabled:opacity-50"
          >
            Player Info
          </button>

          <dialog id={`modal_${player.id}`} className="modal">
            <div className="modal-box">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg">{player.name}</h3>
              <p className="py-4">{player.country}</p>
              <p>Role: {player.role}</p>
              <p>Batting: {player.battingStyle}</p>
              <p>Bowling Style: {player.bowlingStyle}</p>
              <p>Price: ${player.price}</p>
              <p>Age: {player.age}</p>
              <div>
                <p>Matches: {player.stats.test.matches}</p>
              </div>
              <button
                disabled={!selected}
                onClick={() => handleSelectedBtn(player)}
                className="btn text-[#1313139d] rounded-xl disabled:opacity-50"
              >
                {selected ? "Choose Player" : "Selected"}
              </button>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;

/**   {
    "id": "P1001",
    "name": "Virat Kohli",
    "country": "India",
    "role": "All-Rounder",
    "battingStyle": "Right-Hand-Bat",
    "price": 1500,
    "image": "https://i.ibb.co.com/6JZ6ZmJC/Virat-Kohli-India-celebrates-50th-century-Cricket-November-15-2023.webp",
    "birthDate": "5 November 1988",
    "age": 36,
    "height": "5 ft 9 in (175 cm)",
    "bowlingStyle": "Right-arm medium",
    "stats": {
      "test": {
        "matches": 123,
        "runs": 9230,
        "avg": 46.85,
        "wickets": 0
      },
      "odi": {
        "matches": 302,
        "runs": 14181,
        "avg": 57.88,
        "wickets": 5
      },
      "t20i": {
        "matches": 125,
        "runs": 4188,
        "avg": 48.69,
        "wickets": 4
      }
    },
    "achievements": [
      "Holds the record for scoring the most centuries in ODI cricket with 51 centuries.",
      "Named the male cricketer of the decade by the International Cricket Council in 2020.",
      "Won the ICC ODI Player of the Year award four times (2012, 2017, 2018, 2023).",
      "Scored a record 765 runs in a single edition of the 2023 World Cup, named Player of the Tournament.",
      "Led India to victory in the 2024 T20 World Cup and 2025 Champions Trophy."
    ]
  } */
