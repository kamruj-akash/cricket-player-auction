
import SelectedPlayerCard from "./selectedPlayerCard";
const SelectedPlayer = ({ select, removePlayer }) => {
  return (
    <div>
     
      {select.map((player) => (
        <SelectedPlayerCard player={player} removePlayer={removePlayer}></SelectedPlayerCard>
      ))}
    </div>
  );
};

export default SelectedPlayer;
