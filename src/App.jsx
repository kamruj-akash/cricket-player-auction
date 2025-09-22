import { Suspense, useState } from "react";
import { ToastContainer } from "react-toastify";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Newsletter from "./Components/Newsletter";
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
    const newSelect = [...select, player];
    const uniqueArray = [...new Set(newSelect)];
    setSelect(uniqueArray);
  };

  const removePlayer = (playerRemove) => {
    const remove = select.filter((pl) => pl != playerRemove);
    setSelect(remove);
    setBalance(balance + playerRemove.price);
  };

  return (
    <>
      <Navbar balance={balance}></Navbar>
      <Banner></Banner>
      <div className="container mx-auto flex justify-between my-5 items-center px-5 pt-10">
        <p className="font-bold text-2xl text-[#131313]">
          {" "}
          {toggle
            ? "Available Players"
            : `Selected Player (${select.length}/6)`}
        </p>
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
            Selected {select.length}
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
        <SelectedPlayer
          removePlayer={removePlayer}
          select={select}
        ></SelectedPlayer>
      )}
      <Newsletter></Newsletter>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
