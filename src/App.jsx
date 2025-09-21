// import Banner from "./Components/Banner";
import { Suspense, useState } from "react";
import Navbar from "./Components/Navbar";
import AvailablePlayer from "./Components/PlayerComponents/AvailablePlayer";
import SelectedPlayer from "./Components/PlayerComponents/SelectedPlayer";

const fetchFile = "../public/Data/playerData.json";
const fetchPlayerData = async () => {
  const res = await fetch(fetchFile);
  return res.json();
};
const promiseData = fetchPlayerData();

function App() {
  // balance function
  const [balance, setBalance] = useState(6000);

  // toggle function
  const [toggle, setToggle] = useState(true);

  // choose player function
  const [select, setSelect] = useState([]);
  const selectPlayerHandler = (player) => {
    // if (select.includes(player)) {
    //   let existedPlayer = select.filter((p) => p != player);
    //   setSelect(existedPlayer);
    // } else {
    // }

    const newSelect = [...select, player];
    const uniqueArray = [...new Set(newSelect)];
    setSelect(uniqueArray);
  };

  return (
    <>
      <Navbar balance={balance}></Navbar>
      {/* <Banner></Banner> */}
      <div className="container mx-auto flex justify-between my-5 items-center px-5">
        <p className="font-bold text-2xl text-[#131313]">Available Players</p>
        <div>
          <button
            onClick={() => setToggle(true)}
            className={`btn bg-[#E7FE29] border-[#1313130c] border-e-0 rounded-e-none ${
              toggle ? "bg-[#E7FE29]" : "bg-transparent"
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`btn bg-[#E7FE29] border-[#1313130c] border-s-0 rounded-s-none ${
              toggle ? "bg-transparent" : "bg-[#E7FE29]"
            }`}
          >
            Selected (<span>0</span>)
          </button>
        </div>
      </div>
      {toggle ? (
        <Suspense
          fallback={
            <div className="flex items-center justify-center">
              <span className="loading loading-ring w-[250px] "></span>
            </div>
          }
        >
          <AvailablePlayer
            balance={balance}
            setBalance={setBalance}
            selectPlayerHandler={selectPlayerHandler}
            promiseData={promiseData}
          ></AvailablePlayer>
        </Suspense>
      ) : (
        <SelectedPlayer select={select}></SelectedPlayer>
      )}
    </>
  );
}

export default App;
