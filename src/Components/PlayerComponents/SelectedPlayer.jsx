import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SelectedPlayer = () => {
  return (
    <div>
      <div className="flex border-1 border-[#1313131d] p-6 justify-between container mx-auto rounded-xl">
        <div className="flex gap-8">
          <div className="w-20 h-20 rounded-xl border-1 border-[#1313130b] flex justify-center items-center">
            <img src="" alt="Image" />
          </div>
          <div className="flex items-center flex-col justify-center ">
            <h1>Darrell Steward</h1>
            <p>Left-Hand-Bat</p>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <button className="text-red-500 btn btn-ghost">
            <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectedPlayer;
